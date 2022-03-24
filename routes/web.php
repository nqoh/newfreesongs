<?php

use App\Music;
use App\Member;
use App\PriceCurrency;
use App\Follow;
use App\geoLoaction;
use App\Login;
use App\Alert;
use App\Messages;
use App\Ads;
use App\contactus;
use App\Ads_States;
use Illuminate\Http\Request;
use App\Payments_logs;
use App\Earnings;
use App\Unsubscribe;
use App\Http\Controllers\EmailController;
use App\Resetpassword;
use App\crypt;
use Intervention\Image\Facades\Image;
use App\verifyEmail;

Route::resource('signup', 'SignupController');
Route::resource('MemberLogin', 'LoginController');
Route::resource('uploading', 'UploadController');
Route::resource('change_pp', 'PictureController');
Route::get('remove_pp', 'PictureController@removeImg');
Route::post('edit/settings', 'SettingsController@edit');
Route::post('edit/account', 'SettingsController@account');
Route::get('getAccountDetails', 'SettingsController@getdetails');
Route::get('getPassword/{password}', 'SettingsController@getpassword');
Route::post('setPassword', 'SettingsController@setpassword');
Route::get('getPlaylist', 'PlaylistController@getPlaylist');
Route::get('/getLoungePlaylist/{id}', 'PlaylistController@getLoungePlaylist');
Route::get('RemoveOnPlaylist/{id}', 'PlaylistController@RemoveOnPlaylist');
Route::get('/api/addSongOnPlaylist/{id}', 'PlaylistController@addSongOnPlaylist');
Route::get('/api/getSongOnPlaylisted/{id}', 'PlaylistController@getSongOnPlaylisted');
Route::get('/api/getPlaylisted/{download_code}', 'PlaylistController@playlisted');
Route::get('RecentOnPlayList', 'PlaylistController@RecentOnPlayList');
Route::get('/LoungeRecentOnPlayList/{id}', 'PlaylistController@LoungeRecentOnPlayList');
Route::get('/api/getAdds', 'AdsController@index');
Route::get('/api/getAdsOverview', 'AdsController@AdsOverview');
Route::get('/api/getAdInsight/{id}', 'AdsController@getAdInsight');
Route::get('/api/getAdHistoryInsight/{id}', 'AdsController@getAdHistoryInsight');
Route::get('/api/getMusicToPromote', 'AdsController@MusicToPromote');
Route::get('/api/AdHistory', 'AdsController@AdHistory');
Route::get('/api/getAdsMusic/{id}', 'AdsController@AdsMusic');
Route::get('/api/recentFollowers', 'FollowController@RecentFollowers');
Route::get('/api/LoungeRecentFollowers/{id}', 'FollowController@LoungeRecentFollowers');
Route::get('/api/Follow', 'FollowController@Follow');
Route::get('/api/LoungeFollow/{id}', 'FollowController@LoungeFollow');
Route::get('/api/LoungeFollowMember/{id}', 'FollowController@LoungeFollowMember');
Route::get('/api/alerts/{num}', 'AlertController@Alert');
Route::get('/api/clearAll/', 'AlertController@clearAll');
Route::get('/api/deleteAlert/{id}', 'AlertController@delete');
Route::get('/api/getPaidMusic', 'MusicController@Paid');
Route::get('/api/getFreeMusic', 'MusicController@Free');
Route::get('/api/ProfileFollowers', 'FollowController@ProfileFollowers');
Route::get('/api/ProfileFollowings', 'FollowController@ProfileFollowings');
Route::get('/api/LoungeFollowings/{id}', 'FollowController@LoungeFollowings');
Route::get('/api/LoungeFollowers/{id}', 'FollowController@LoungeFollowers');
Route::get('/api/getLoungeFreeMusic/{id}', 'MusicController@FreeLoungeMusic');
Route::get('/api/getLoungePaidMusic/{id}', 'MusicController@PaidLoungeMusic');
Route::get('/api/getLoungeAllMusic/{id}', 'MusicController@PaidLoungeAllMusic');
Route::get('/api/getExploreMusic/{num}', 'MusicController@getExploreMusic');
Route::get('/api/getPurchases/{num}', 'MusicController@getPurchases');
Route::get('/api/getEditMusic/{id}', 'MusicController@getEditMusic');
Route::get('/api/DoIPurchased/{downloadCode}', 'MusicController@Question');
Route::post('/change_artCover', 'MusicController@ChangeCover');
Route::post('/RemoveCover', 'MusicController@RemoveCover');
Route::Post('/updateLyrics/', 'MusicController@updatLyrics');
Route::get('/api/getMusic', 'MusicController@Music');
Route::get('/api/getTotalPaid', 'MusicController@TotalPaid');
Route::get('/api/getMostDownloadMusic/{num}', 'MusicController@MostDownload');
Route::get('/api/DeleteTrack/{id}', 'MusicController@DeleteTrack');
Route::get('/api/TrackExit/{track}', 'MusicController@TrackExit');
Route::get('/api/QualifyPaidDownloads', 'MusicController@QualifyPaidDownloads');
Route::get('/api/trackSessions', 'MusicController@trackSessions');
Route::get('/api/email/{email}', 'SignupController@email');
Route::get('/api/username/{username}', 'SignupController@username');
Route::get('/api/getMessages', 'MessagesController@getMessages');
Route::get('/api/getDeleteMusic/{id}','MusicController@getDeleteMusic');
Route::get('/api/DeleteMusic/{id}','MusicController@DeleteMusic');
Route::get('/api/readMessages/{id}/{num}', 'MessagesController@readMessages');
Route::get('/api/DeleteMessage/{from}/{to}', 'MessagesController@DeleteMessage');
Route::get('/api/readLoungeMessages/{username}/{num}', 'MessagesController@readLoungeMessages');
Route::post('/send/message', 'MessagesController@SendMessage');
Route::post('/send/lounge/message', 'MessagesController@SendLoungeMessage');
Route::get('/api/getFeeds/{to}', 'FeedsController@getFeeds');
Route::get('/api/FollowMember/{id}', 'FollowController@FollowMember');
Route::get('/api/LoungeUnfollowMember/{id}', 'FollowController@Unfollow');
Route::get('/api/DoIFollowU/{id}', 'FollowController@DoIFollowU');
Route::get('/api/Deactivate/{password}', 'DeactivateController@Deactivate');
Route::get('/api/getEarnings/', 'EarningsController@getEarnings');
Route::get('/api/isTrackPurchased/{id}', 'EarningsController@isTrackPurchased');
Route::get('/api/getPlays/{id}', 'PlaysController@getPlays');
Route::get('/api/ResetEmail/{email}', 'ResetPasswordController@ResetPassword');
Route::get('/api/ResetConfirmed/{email}', 'ResetPasswordController@Confirmed');
Route::get('/api/ResetPasswordLinkExists/{link}', 'ResetPasswordController@CheckLink');
Route::post('/ChangePassword', 'ResetPasswordController@ChangePassword');
Route::get('/api/addPlays/{id}', 'PlaysController@addPlays');
Route::get('/api/getComment/{id}/{num}', 'CommentController@getComments');
Route::post('/send/comment', 'CommentController@sendComment');
Route::get('/api/deleteComment/{id}', 'CommentController@DeleteComment');




Route::get('remove', function (){
    $m = Music::where('downloads','<',5)->get();

    foreach ($m as $music){
                  
               unlink('musicfile/' . html_entity_decode($music->track));
               
                if (file_exists('/album_art/' . html_entity_decode($music->album_art))){
                    unlink('album_art/' . html_entity_decode($music->album_art));
                }
                
                Music::where('download_code' , $music->download_code)->delete();
            
      
    }
});




 function verifyEmaill($email){
     include 'email.php';
     return  checkmail($email);
};

Route::get('/api/unsubscribe/{email}', function($email){
            if (Member::where('email', $email)->exists()) {
                if (Unsubscribe::where('email', $email)->exists()) {
                    return 'ok';
                } else {
                    $unsub = new Unsubscribe();
                    $unsub->email = $email;
                    $unsub->save();
                    return 'ok';
                }
            } else {
                return "Email not exists";
            }
        });

Route::get('/api/unsuscribe/{email}', function($email){
            if (Member::where('email', $email)->exists()) {
                if (Unsubscribe::where('email', $email)->exists()) {
                    return 'ok';
                } else {
                    $unsub = new Unsubscribe();
                    $unsub->email = $email;
                    $unsub->save();
                    return 'ok';
                }
            } else {
                return "Email not exists";
            }
        });
        
Route::get('mailtest', function(){
       include_once 'veryfyEmail.php';
 
		//
		$email = "trdrgdf@yahoo.com";//pass an email here to test
		//
		
		$vmail = new verifyEmail();
		$vmail->setStreamTimeoutWait(20);
		$vmail->Debug= TRUE;
		$vmail->Debugoutput= 'html';
 
		$vmail->setEmailFrom('info@bogiyo.com');//email which is used to set from headers,you can add your own/company email over here
 
		if ($vmail->check($email)) {
			echo '<h1>email &lt;' . $email . '&gt; exist!</h1>';
		} elseif (verifyEmail::validate($email)) {
			echo '<h1>email &lt;' . $email . '&gt; valid, but not exist!</h1>';
		} else {
			echo '<h1>email &lt;' . $email . '&gt; not valid and not exist!</h1>';
		}
});


Route::get('/api/broadcastEmail',function (){
    $ids=Follow::where('member_id',session()->get('id'))->get();
    $arrayIds=[];
    foreach ($ids as $id){
        $arrayIds[] = $id->follower_id;
    }
      $object = new EmailController();
      $object->broadcast($arrayIds);
});

Route::get('/api/setResultSession/{num}', function ($num) {
    session()->put('num', $num);
});
$number = session()->get('num');

Route::get('/mail',function(){
    return view('mail');
});


Route::get('/mail2',function(){
    return view('mail2');
});


Route::get('country',function(){
    return session()->get('country');
});

Route::get('za', function () {
    session()->put('country', 'South Africa');
    setcookie('country','South Africa');
});
Route::get('ng', function () {
    session()->put('country', 'Nigeria');
    setcookie('country','Nigeria');
});
Route::get('international', function () {
    session()->put('country', 'international');
    setcookie('country','international');
});

// laravel IPI
Route::get('/api/setDownloadComponent/{username}/{downloadCode}', function ($username,$downloadCode){
    if(Member::where('username',$username)->exists() && Music::where('download_code',$downloadCode)->exists()){
        $member = Member::where('username',$username)->first();
        if(Earnings::where('member_id',$member->id)->exists()){
            session()->put('FromPurchaseId',$member->id);
            return 'download';
        }else{
            return 'error';
        }
    }else{
        return 'error';
    }
});





Route::get('/unsuscribe/{encriptedmail}',function ($encriptedmail){
 try {
     $crypt = new crypt();
     $key = 'base64:48Hp4EKVcFDYYV3oqDPAhWFh+V2T3OlupjegVpRcrmU';
     $decripted_email = $crypt->decryptIt(str_replace('|', '/', $encriptedmail . '='), $key);
     if (Member::where('email', $decripted_email)->exists()) {
         return view('web.unsubscribe', compact('decripted_email'));
     } else {

     }
 }catch (Exception $e){
     return view('web.error');
 }
});



Route::get('/unsubscribe/{encriptedmail}',function ($encriptedmail){
 try {
     $crypt = new crypt();
     $key = 'base64:48Hp4EKVcFDYYV3oqDPAhWFh+V2T3OlupjegVpRcrmU';
     $decripted_email = $crypt->decryptIt(str_replace('|', '/', $encriptedmail . '='), $key);
     if (Member::where('email', $decripted_email)->exists()) {
         return view('web.unsubscribe', compact('decripted_email'));
     } else {

     }
 }catch (Exception $e){
     return view('web.error');
 }
});



/*Route::get('encri', function (){
    $crypt = new crypt();
    $key='base64:48Hp4EKVcFDYYV3oqDPAhWFh+V2T3OlupjegVpRcrmU';
    $mail= $crypt->encryptIt('ngobese.nn@gmail.com',$key);


    $decriptemail = $crypt->decryptIt(str_replace('|' ,'/',$mail .'='),$key);

    return $mail.'<br>'.$decriptemail;
});*/






Route::get('/api/firsttrack',function (){
    if(Music::where('member_id', session()->get('id'))->exists()){
        return "true";
    }else{
        return "false";
    }
});

Route::post('FreePromo',function (Request $request){
    $code= $request->download_code;
    $muscId=0;
    if(Music::where('download_code', $code)->exists()) {
        $music = Music::where('download_code', $code)->first();
        $muscId=$music->id;
    }
    $pay = new Payments_logs();
    $pay->email = "info@bogiyo.com";
    $pay->pay_for = 'Free Promotion';
    $pay->amount = 0;
    $pay->member_id = session()->get('id');
    $pay->music_id = $muscId;
    $pay->save();

    $ads = new Ads();
    $ads->member_id = session()->get('id');
    $ads->music_id = $muscId;
    $ads->country = session()->get('country');
    $ads->save();

    $adsId = Ads::orderBy('id','desc')->first();
    $ads_state = new Ads_States();
    $ads_state->Impressions = 0;
    $ads_state->Hits = 0;
    $ads_state->PlayLists = 0;
    $ads_state->Comments = 0;
    $ads_state->Downloads = 0;
    $ads_state->Plays = 0;
    $ads_state->Followers = 0;
    $ads_state->Ads_id = 0;
    $ads_state->Ads_id = $adsId->id;
    $ads_state->save();

    return 'Ok';
});

Route::get('/api/setComponent/{id}', function ($id) {
    if (Member::where('username', $id)->exists()) {

        $member = Member::where('username', $id)->first();
        if (Ads::where('member_id', $member->id)->exists()) {

            $ad = Ads::Join('ads__states', 'ads.id', 'ads__states.Ads_id')->
            where('ads.member_id', $member->id)->first();

            Ads::Join('ads__states', 'ads.id', 'ads__states.Ads_id')->
            where('ads.member_id', $member->id)->update(['Hits' => $ad->Hits + 1]);
        }

        return 'lounge';

    } else if (Music::where('download_code', $id)->exists()) {
        $music = Music::where('download_code', $id)->first();
        if (Ads::where('music_id', $music->id)->exists()) {

            $ad = Ads::Join('ads__states', 'ads.id', 'ads__states.Ads_id')->
            where('ads.music_id', $music->id)->first();

            Ads::Join('ads__states', 'ads.id', 'ads__states.Ads_id')->
            where('ads.music_id', $music->id)->update(['Hits' => $ad->Hits + 1]);
        }
        return 'download';
    } else {
        return 'Invalid Component';
    }
});

Route::post('api/pruchaseMusic',function (Request $request){
    $music=Music::where('download_code',$request->downloadCode)->first();
    if(session()->get('id') && session()->get('FromPurchaseId')){
        $memberEarning = Earnings::where('member_id',session()->get('FromPurchaseId'))->first();
        Earnings::where('member_id',session()->get('FromPurchaseId'))->update(['purchases'=>$memberEarning->purchases + 1]);
        $earnings = new Earnings();
        $earnings->music_id=$music->id;
        $earnings->purchases=0;
        $earnings->member_id=session()->get('id');
        $earnings->save();
        Music::where('download_code',$request->downloadCode)->update(['downloads'=>$music->downloads + 1]);
        session()->forget('FromPurchaseId');

        $member = Member::where('id', session()->get('id'))->first();
        $pay = new Payments_logs();
        $pay->email = $member->email;
        $pay->pay_for = 'Purchase Music';
        $pay->amount = 10.00;
        $pay->member_id = session()->get('id');
        $pay->music_id = $music->id;
        $pay->save();

        return $music->track;

    }else if(session()->get('id')){
        $earnings = new Earnings();
        $earnings->music_id=$music->id;
        $earnings->purchases=0;
        $earnings->member_id=session()->get('id');
        $earnings->save();
        Music::where('download_code',$request->downloadCode)->update(['downloads'=>$music->downloads + 1]);

        $member = Member::where('id', session()->get('id'))->first();
        $pay = new Payments_logs();
        $pay->email = $member->email;
        $pay->pay_for = 'Purchase Music';
        $pay->amount = 10.00;
        $pay->member_id = session()->get('id');
        $pay->music_id = $music->id;
        $pay->save();

        return $music->track;
    }else{
        Music::where('download_code',$request->downloadCode)->update(['downloads'=>$music->downloads + 1]);

        $pay = new Payments_logs();
        $pay->email = 'info@bogiyo.com';
        $pay->pay_for = 'Purchase Music';
        $pay->amount = 10.00;
        $pay->member_id = 0;
        $pay->music_id = $music->id;
        $pay->save();

        return $music->track;
    }

});

Route::post('/Promote', function (Request $request) {
    $muscId=0;
    if(Music::where('download_code', $request->download_code)->exists()) {
        $music = Music::where('download_code', $request->download_code)->first();
        $muscId=$music->id;
    }
    $pay = new Payments_logs();
    $pay->email = $request->email;
    $pay->pay_for = 'Promotion';
    $pay->amount = 10.00;
    $pay->member_id = session()->get('id');
    $pay->music_id = $muscId;
    $pay->save();

    $ads = new Ads();
    $ads->member_id = session()->get('id');
    $ads->music_id = $muscId;
    $ads->country = session()->get('country');
    $ads->save();

    $adsId = Ads::orderBy('id','desc')->first();
    $ads_state = new Ads_States();
    $ads_state->Impressions = 0;
    $ads_state->Hits = 0;
    $ads_state->PlayLists = 0;
    $ads_state->Comments = 0;
    $ads_state->Downloads = 0;
    $ads_state->Plays = 0;
    $ads_state->Followers = 0;
    $ads_state->Ads_id = 0;
    $ads_state->Ads_id = $adsId->id;
    $ads_state->save();

    return 'Ok';

});


Route::post('/contactUs', function (Request $request) {
    $contact = new contactus();
    $contact->name = $request->name;
    $contact->email = $request->email;
    $contact->message = $request->message;
    $contact->save();
    return 'Ok';
});


Route::get('api/getSessions', function () {
    return [session()->get('name'), session()->get('id'), session()->get('username'), session()->get('email')];
});

Route::get('api/DestroySessions', function () {
    Login::where('username', session()->get('username'))->update(['active' => 0]);
    session()->flush();
    return "Ok";
});

Route::get('api/getUserImage/{id}', function ($id) {
    $user = Member::find($id);
    return $user->image;
});

Route::get('/api/setColor/',function (){
    if(session()->get('id') && session()->get('username')){
        $msg=Messages::where('to_member_id',session()->get('id'))->where('status',1)->count();
        $alert=Alert::where('to_member_id',session()->get('id'))->where('status',1)->count();
        return[
            'message'=>$msg,
            'alert'=>$alert,
        ];
    }
});



Route::get('/api/searchDataList', function () {
    $members = Member::where('username','!=','Unknown')->where('name','!=','unknown')->get();
    $music = Music::where('member_id','!=','17547')->get();
    $data = '';
    foreach ($members as $member) {
        $data .= $member->name . ',' . $member->username . ',';
    }
    foreach ($music as $track) {
        $data .= $track->track . ',';
    }
    return $data;
});

Route::get('/api/search/{search}/{num}', function ($search, $num) {
    $music = [];
    $lounge = [];

    if (Music::where('track', 'LIKE', "%$search%")->exists()) {
        $music = Music::Join('members', 'music.member_id', 'members.id')->
        where('music.track', 'LIKE', "%$search%")->where('music.member_id','!=','17547')->skip($num)->take(15)->get();
    }

    if (Member::where('username', 'LIKE', "%$search%")->where('username', 'LIKE', "%$search%")->exists()) {
        $lounge = Member::where('username', 'LIKE', "%$search%")->where('username', 'LIKE', "%$search%")->
        skip($num)->take(15)->get();
    }
    $Totalfollowers = [];
    foreach ($lounge as $member) {
        $Totalfollowers [] = ['id' => $member->id, 'total' => Follow::Where('member_id', $member->id)->count()];
    }

    return [
        'music' => $music,
        'lounge' => $lounge,
        'totalF' => $Totalfollowers
    ];
});

Route::get('error',function (){
   return view('web.error');
});

Route::get('/api/lyrics/{id}', function ($id) {
    if (Music::where('download_code', $id)->exists()) {
        return Music::where('download_code', $id)->first();
    } else {
        return 'Fail';
    }
});





Route::get('api/getMemberDetails', function () {
    if (session()->get('id') && session()->get('username')) {
        $followers = Follow::where('follower_id', '!=', 0)->where('member_id', session()->get('id'))->count();
        $following = Follow::where('follower_id', session()->get('id'))->count();
        $member = Member::join('geo_countries', 'members.country', 'geo_countries.country_name')->where('members.id', session()->get('id'))->first();
        $music = Music::where('member_id', session()->get('id'))->count();
        $geoLocation = geoLoaction::get();

        return [
            'followers' => $followers,
            'followings' => $following,
            'member' => $member,
            'music' => $music,
            'countries' => $geoLocation,

        ];
    }
});

Route::get('api/getLoungeMemberDetails/{id}', function ($id) {
    $member = Member::where('username', $id)->first();
    $followers = Follow::where('follower_id', '!=', 0)->where('member_id', $member->id)->count();
    $following = Follow::where('follower_id', $member->id)->count();
    $music = Music::where('member_id', $member->id)->count();
    $geoLocation = geoLoaction::get();

    return [
        'followers' => $followers,
        'followings' => $following,
        'member' => $member,
        'music' => $music,
        'countries' => $geoLocation,

    ];
});

Route::get('clear', function(){
   return session()->flush(); 
});

Route::get('getCountry',function(){
   return session()->get('country'); 
});

Route::get('/api/getLoungeDetails/{id}', function ($id) {
    //  $member = Member::where('username', $id)->first();
    $member = Member::join('geo_countries', 'members.country', 'geo_countries.country_name')
        ->where('members.username', $id)->first();
    $followers = Follow::where('follower_id', '!=', 0)->where('member_id', $member->id)->count();
    $following = Follow::where('follower_id', $member->id)->count();
    $music = Music::where('member_id', $member->id)->count();
    $geoLocation = geoLoaction::get();

    return [
        'followers' => $followers,
        'followings' => $following,
        'member' => $member,
        'music' => $music,
        'countries' => $geoLocation,

    ];
});

function getCountry(){
       if (session()->get('country')) {
        if(session()->get('country') == 'South Africa'){
             setcookie('country','South Africa');
         }
         if(session()->get('country') == 'Nigeria'){
             setcookie('country','Nigeria');
         }
         if(session()->get('country') == 'international'){
             setcookie('country','international');
         }
    } else {
         $botRegexPattern = "(googlebot\/|Googlebot\-Mobile|Googlebot\-Image|Google favicon|Mediapartners\-Google|bingbot|slurp|java|wget|curl|Commons\-HttpClient|Python\-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST\-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub\.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum\.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips\-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail\.RU_Bot|discobot|heritrix|findthatfile|europarchive\.org|NerdByNature\.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb\-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web\-archive\-net\.com\.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks\-robot|it2media\-domain\-crawler|ip\-web\-crawler\.com|siteexplorer\.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki\-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e\.net|GrapeshotCrawler|urlappendbot|brainobot|fr\-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf\.fr_bot|A6\-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive\.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j\-asr|Domain Re\-Animator Bot|AddThis|YisouSpider|BLEXBot|YandexBot|SurdotlyBot|AwarioRssBot|FeedlyBot|Barkrowler|Gluten Free Crawler|Cliqzbot)";
        if(!preg_match("/{$botRegexPattern}/", $_SERVER['HTTP_USER_AGENT'])){
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $ip_address = $_SERVER['HTTP_CLIENT_IP'];
        }

        if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            if (strpos($_SERVER['HTTP_X_FORWARDED_FOR'], ',') !== false) {
                $iplist = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
                foreach ($iplist as $ip) {
                    $ip_address = $ip;
                }
            } else {
                $ip_address = $_SERVER['HTTP_X_FORWARDED_FOR'];
            }
        }

        if (!empty($_SERVER['HTTP_X_FORWARDED'])) {
            $ip_address = $_SERVER['HTTP_X_FORWARDED'];
        } elseif (!empty($_SERVER['HTTP_X_CLUSTER_CLIENT_IP'])) {
            $ip_address = $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_FORWARDED_FOR'])) {
            $ip_address = $_SERVER['HTTP_FORWARDED_FOR'];
        } elseif (!empty($_SERVER['HTTP_FORWARDED'])) {
            $ip_address = $_SERVER['HTTP_FORWARDED'];
        } else {
            $ip_address = $_SERVER['REMOTE_ADDR'];
        }
        
       
        
        $geo = unserialize(file_get_contents("http://www.geoplugin.net/php.gp?ip=$ip_address"));
        if ($geo['geoplugin_city'] != "") {
            session()->put('city', $geo['geoplugin_city']);
        } else {

        }
        $country = $geo['geoplugin_countryCode'];
        if ($country === 'ZA') {
            session()->put('country', 'South Africa');
            setcookie('country','South Africa');
        } else if ($country === 'NG') {
            session()->put('country', 'Nigeria');
            setcookie('country','Nigeria');
        } else {
            session()->put('country', 'international');
            setcookie('country','international');
        }
     }
    }
}


Route::get('api/getPriceCurrency', function () {
    if (PriceCurrency::where('country', session()->get('country'))->exists()) {
        return PriceCurrency::where('country', session()->get('country'))->first();
    } else {
        return PriceCurrency::where('country', 'international')->first();
    }
});

Route::get('/aboutus',function (){
    getCountry();
    return view('web.aboutus');
});

Route::get('/search/{id}',function ($id){
    getCountry();
    if($id !== "") {
        return view('web.search', compact('id'));
    }
});


Route::get('/contactus',function (){
    getCountry();
    return view('web.contactus');
});

Route::get('/copyright',function (){
    getCountry();
    return view('web.copyright');
});

Route::get('/help',function (){
    getCountry();
    return view('web.help');
});

Route::get('/login',function (){
    getCountry();
    return view('web.login');
});


Route::get('/lyrics/{id}', function ($id){
    getCountry();
    if(Music::where('download_code',$id)->exists()) {
        $music = Music::where('download_code', $id)->first();
        return view('web.lyrics', compact('id', 'music'));
    }else{
        return view('web.error');
    }
});

Route::get('/d/{id}',function ($id){
    getCountry();
    if(Music::where('delete_code',$id)->exists()) {
        return view('web.delete',compact('id'));
    }else{
        return view('web.error');
    }
});

Route::get('/privacy',function (){
    getCountry();
    return view('web.privacy');
});

Route::get('/signup',function (){
    getCountry();
    return view('web.signup');
});

Route::get('/register',function (){
    getCountry();
    return redirect('/signup');
});


Route::get('/store',function (){
    getCountry();
    return view('web.store');
});

Route::get('/terms',function (){
   getCountry();
    return view('web.terms');
});

Route::get('/artist/promote',function (){
   getCountry();
    return view('web.promote.artist');
});


Route::get('/fan/promote',function (){
    getCountry();
    return view('web.promote.fan');
});

Route::get('/resetpassword',function (){
    getCountry();
    if(session()->get('username')){
        return view('web.error');
    }
    return view('web.resetpassword');
});

Route::get('/mostdownloads', function (){
    getCountry();
    return view('web.mostdownload');
});

Route::get('/{id}',function ($id){
    getCountry();
    if(Music::where('download_code',$id)->exists()) {
        $music = Music::where('download_code', $id)->first();
        $price='';
        if (PriceCurrency::where('country', session()->get('country'))->exists()) {
            $price=PriceCurrency::where('country', session()->get('country'))->first();
        } else {
            $price=PriceCurrency::where('country', 'international')->first();
        }
        return view('web.download',compact('id','music','price'));
    }else if(Member::where('username', $id)->exists()){
        if($id === session()->get('username')){
            return redirect('/profile/feeds');
        }
         $member=Member::where('username', $id)->first();
         return view('web.lounge',compact('member','id'));
    } else {
        return view('web.error');
    }
});



Route::get('/za/{id}',function ($id){
    return redirect('/'.$id);
});

Route::get('/ng/{id}',function ($id){

    return redirect('/'.$id);
});



Route::get('/', function () {
    getCountry();
    $tracks='';
    $music=Music::all();
    foreach ($music as $track){
        $tracks .= $track->track.',';
    }
    return view('welcome',compact('tracks'));
});

Route::get('/{vue_capture}', function () {
    getCountry();
    $tracks='';
    $music=Music::all();
    foreach ($music as $track){
        $tracks .= $track->track.',';
    }
    return view('welcome',compact('tracks'));
})->where('vue_capture', '[\/\w\.-]*');




Route::get('/{vue_capture}/{vue_capture2}', function () {
    getCountry();
    $tracks='';
    $music=Music::all();
    foreach ($music as $track){
        $tracks .= $track->track.',';
    }
    return view('welcome',compact('tracks'));
})->where('vue_capture', '[\/\w\.-]*');




