<?php

namespace App\Http\Controllers;
use App\Alert;
use App\Follow;
use App\Member;
use App\Ads;
use Illuminate\Http\Request;


class FollowController extends Controller
{
    function RecentFollowers(){
        return Follow::Join('members', 'members.id', '=', 'follows.follower_id')->
        where('follower_id', '!=', 0)->where('member_id', session()->get('id'))->take(6)->get();
    }

    function ProfileFollowers(){
        $followers = Follow::Join('members', 'follows.follower_id','members.id')->
        where('member_id', session()->get('id'))->orderBy('follows.id','desc')->paginate(18);

        $following = Follow::Join('members', 'members.id', '=', 'follows.member_id')->
        where('follower_id', session()->get('id'))->get();

        return [
            'followers' => $followers,
            'followings' => $following,
        ];
    }

    function ProfileFollowings(){
        return Follow::Join('members', 'members.id', '=', 'follows.member_id')->
        where('follower_id', session()->get('id'))->orderBy('follows.id','desc')->paginate(18);
    }

    function LoungeFollowings($id){
        $member = Member::where('username',$id)->first();
        $following = Follow::Join('members', 'members.id', '=', 'follows.member_id')->
        where('follower_id', $member->id)->paginate(18);

        $LogedInFollowings=[];
        if(session()->get('id')) {
            $LogedInFollowings = Follow::Join('members', 'members.id', '=', 'follows.member_id')->
            where('follower_id', session()->get('id'))->get();
        }

        return [
            'followings' => $following,
            'LogedInFollowings' => $LogedInFollowings,
        ];
    }

    function LoungeFollowers($id){
        $member = Member::where('username',$id)->first();
        $followers = Follow::Join('members', 'follows.follower_id','members.id')->
        where('member_id', $member->id)->paginate(18);

        $LogedInFollowings=[];
        if(session()->get('id')) {
            $LogedInFollowings = Follow::Join('members', 'members.id', '=', 'follows.member_id')->
            where('follower_id', session()->get('id'))->get();
        }

        return [
            'followers' => $followers,
            'LogedInFollowings' => $LogedInFollowings,
        ];
    }

    function LoungeFollow($id){
        $member = Member::where('username',$id)->first();
        $followers = Follow::Join('members', 'follows.follower_id','members.id')->
        where('member_id', $member->id)->paginate(18);

        $following = Follow::Join('members', 'members.id', '=', 'follows.member_id')->
        where('follower_id', $member->id)->paginate(18);

        $LogedInFollowings='';
        $LogedInFollowers='';
        if(session()->get('id')) {
            $LogedInFollowings = Follow::Join('members', 'members.id', '=', 'follows.member_id')->
            where('follower_id', session()->get('id'))->get();
        }
        return [
            'followers' => $followers,
            'followings' => $following,
            'LogedInFollowings' => $LogedInFollowings,
        ];
    }


    function FollowMember($id){
        if(Follow::where('follower_id',session()->get('id'))->where('member_id',$id)->exists()) {
            return 'Ok';
        }else{
            if (Ads::where('member_id', $id)->exists()) {

                $ad = Ads::Join('ads__states', 'ads.id', 'ads__states.Ads_id')->
                where('ads.member_id', $id)->first();

                Ads::Join('ads__states', 'ads.id', 'ads__states.Ads_id')->
                where('ads.member_id', $id)->update(['Followers' => $ad->Followers + 1]);
            }
            $follow = new Follow();
            $follow->follower_id = session()->get('id');
            $follow->member_id = $id;
            $follow->save();
            $alert = new Alert();
            $alert->alert = 'follow';
            $alert->from_member_id = session()->get('id');
            $alert->to_member_id = $id;
            $alert->status = 1;
            $alert->save();
            return 'Ok';
        }
    }

    function LoungeFollowMember($id){
        $member = Member::where('username',$id)->first();
        if(Follow::where('follower_id',session()->get('id'))->where('member_id',$member->id)->exists()) {
            return 'Ok';
        }else{
            $follow = new Follow();
            $follow->follower_id = session()->get('id');
            $follow->member_id = $member->id;
            $follow->save();

            if (Ads::where('member_id', $member->id)->exists()) {

                $ad = Ads::Join('ads__states', 'ads.id', 'ads__states.Ads_id')->
                where('ads.member_id', $member->id)->first();

                Ads::Join('ads__states', 'ads.id', 'ads__states.Ads_id')->
                where('ads.member_id', $member->id)->update(['Followers' => $ad->Followers + 1]);
            }

            $alert = new Alert();
            $alert->alert = 'follow';
            $alert->from_member_id = session()->get('id');
            $alert->to_member_id = $member->id;
            $alert->status = 1;
            $alert->save();
            return 'Ok';
        }

    }
    function LoungeRecentFollowers($id){
        $member= Member::where('username',$id)->first();
        return Follow::Join('members', 'members.id', '=', 'follows.follower_id')->
        where('follower_id', '!=', 0)->where('member_id', $member->id)->take(6)->get();
    }

    function Unfollow($id){
        $member = Member::where('username', $id)->first();
        Follow::where('member_id',$member->id)->where('follower_id',session()->get('id'))->delete();
        $alert= new Alert();
        $alert->alert = 'unfollow';
        $alert->from_member_id = session()->get('id');
        $alert->to_member_id = $member->id;
        $alert->status=1;
        $alert->save();
        return 'Ok';
    }

    function DoIFollowU($id){
        $member = Member::where('username', $id)->first();
        if(Follow::where('member_id',$member->id)->where('follower_id',session()->get('id'))->exists()){
            return 'yes';
        }else{
            return 'no';
        }
    }
}


