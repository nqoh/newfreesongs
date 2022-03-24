<?php

namespace App\Http\Controllers;
use App\Alert;
use Illuminate\Http\Request;

class AlertController extends Controller
{
    function Alert($num){
        Alert::where('to_member_id',session()->get('id'))->update(['status'=>0]);
        return Alert::Join('members', 'alerts.from_member_id', 'members.id')->
        where('to_member_id', session()->get('id'))->select(
            'alerts.alert_id',
            'alerts.created_at',
            'members.username',
            'members.name',
            'alerts.alert'
        )->skip($num)->orderBy('id','desc')->take(10)->get();

    }

    function delete($id){
        if (Alert::where('alert_id', $id)->where('to_member_id', session()->get('id'))->exists()) {
            Alert::where('alert_id', $id)->where('to_member_id', session()->get('id'))->delete();
            return 'Ok';
        } else {
            return 'Not exists';
        }
    }

    function clearAll(){
        Alert::where('to_member_id',session()->get('id'))->delete();
        return 'Ok';
    }
}
