<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    public function followers()
    {
        return $this->hasMany('App\Follow', 'member_id');
    }

    public function music()
    {
        return $this->hasMany('App\Music', 'member_id');
    }

    public function playlists()
    {
        return $this->hasMany('App\Playlist', 'member_id');
    }

}
