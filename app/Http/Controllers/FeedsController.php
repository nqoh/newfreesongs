<?php

namespace App\Http\Controllers;

use App\Follow;
use App\Member;
use App\Music;
use App\Playlist;
use Illuminate\Http\Request;

class FeedsController extends Controller
{
    function getFeeds($to)
    {
        $followers_ids = [];
        $data = [];
        $musics = Follow::Join('music', 'follows.member_id', 'music.member_id')
            ->Join('members', 'members.id', 'music.member_id')
            ->where('follows.follower_id', session()->get('id'))
            ->select(
                'music.id',
                'music.track',
                'music.size',
                'music.duration',
                'music.album_art',
                'music.downloads',
                'music.download_code',
                'music.price',
                'members.username',
                'members.name'
            )->orderBy('music.created_at', 'desc')->skip($to)->take(10)->get();
        foreach ($musics as $music) {
            $data[] = [
                'track' => $music->track,
                'size' => $music->size,
                'duration' => $music->duration,
                'album_art' => $music->album_art,
                'downloads' => $music->downloads,
                'download_code' => $music->download_code,
                'price' => $music->price,
                'username' => $music->username,
                'name' => $music->name,
                'playlisted_name' => '',
                'playlisted_username' => ''
            ];
        };

        $follows = Follow::Join('members', 'follows.member_id', 'members.id')
            ->where('follower_id', session()->get('id'))->
            orderBy('follows.id', 'desc')->skip($to)->take(10)->get();

        foreach ($follows as $follow) {
            $plays = \App\Playlist::Join('music', 'playlists.music_id', 'music.id')
                ->Join('members', 'music.member_id', 'members.id')
                ->where('playlists.member_id', [$follow->member_id])
                ->orderBy('playlists.created_at', 'desc')->get();
            foreach ($plays as $play) {
                $data[] = [
                    'track' => $play->track,
                    'size' => $play->size,
                    'duration' => $play->duration,
                    'album_art' => $play->album_art,
                    'downloads' => $play->downloads,
                    'download_code' => $play->download_code,
                    'price' => $play->price,
                    'username' => $play->username,
                    'name' => $play->name,
                    'playlisted_name' => $follow->name,
                    'playlisted_username' => $follow->username,
                    'created_at' => $play->created_at
                ];
            }
        }

        $followers = Follow::where('follower_id', session()->get('id'))->get();
        foreach ($followers as $follower) {
            $followers_ids[] = $follower->member_id;
        }

        if ($followers->count() >= 20) {
            $num = 6;
        } else {
            $num = 4;
        }
        if ($num == 4) {
            $suggestions = Member::where('country', session()->get('country'))->where('account_type', 'artist')->
            whereNotIn('id', $followers_ids)->whereNotIn('id', [session()->get('id')])
                ->inRandomOrder()->take(2)->get();
        } else {
            $suggestions = [];
        }

        $TotalFollwer = [];
        $TotalMusic = [];
        foreach ($suggestions as $suggestion) {
            $TotalFollwer[] = Follow::where('follower_id', $suggestion->id)->count();
            $TotalMusic[] = Music::where('member_id', $suggestion->id)->count();
        }

        return [
            'musics' => $data,
            'suggestions' => $suggestions,
            'TotalFollwer' => $TotalFollwer,
            'TotalMusic' => $TotalMusic
        ];

    }
}
