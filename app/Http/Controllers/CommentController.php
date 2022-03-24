<?php

namespace App\Http\Controllers;

use App\Comments;
use App\Music;
use Illuminate\Http\Request;
use App\Ads;
class CommentController extends Controller
{
    function getComments($id,$num){
        $music = Music::where('download_code',$id)->first();
        $id=$music->id;
        $comments=Comments::Join('members','comments.member_id','members.id')->where('comments.music_id',$id)
            ->skip($num)->take(15)->orderBy('comments.id','desc')->
            select(
                'members.username',
                'members.name',
                'members.image',
                'comments.id',
                'comments.member_id',
                'comments.comment',
                'comments.created_at'
            )->get();
        $size = Comments::where('music_id',$id)->count();

        $com=[];
        $reg_exUrl = "/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/";
        for($i=0 ; $i < sizeof($comments); $i++){
            $text=$comments[$i]['comment'];
            if(preg_match($reg_exUrl, $text, $url)) {
                $comment=preg_replace($reg_exUrl , "<a target='_blank' href='{$url[0]}'>{$url[0]}</a> " , $text);

            } else {
                $comment=$comments[$i]['comment'];
            }
            $com[] = [
                'username'=>$comments[$i]['username'],
                'name' => $comments[$i]['name'],
                'image'=>$comments[$i]['image'],
                'id'=>$comments[$i]['id'],
                'member_id'=>$comments[$i]['member_id'],
                'comment'=>$comment,
                'created_at'=>$comments[$i]['created_at'],
            ];
        }


        return [
            'comments'=>$com,
            'size'=> $size
        ];

    }

    function sendComment(Request $request){
        $music = Music::where('download_code',$request->download_code)->first();
        if(session()->get('id')){
            $comment = new Comments();
            $comment->comment=$request->comment;
            $comment->music_id=$music->id;
            $comment->member_id=session()->get('id');
            $comment->save();
            $music= Music::where('download_code',$request->download_code)->first();
            if(Ads::where('music_id',$music->id)->exists()) {

                $ad = Ads::Join('ads__states','ads.id','ads__states.Ads_id')->
                where('ads.music_id', $music->id)->first();

                Ads::Join('ads__states','ads.id','ads__states.Ads_id')->
                where('ads.music_id', $music->id)->update(['Comments'=> $ad->Comments + 1]);
            }


            return 'Ok';
        }
    }

    function DeleteComment($id){
        Comments::where('id',$id)->where('member_id',session()->get('id'))->delete();
        return 'Ok';
    }
}
