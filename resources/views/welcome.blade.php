<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet"  href="/css/app.css">
    <meta name="_token" content="{{csrf_token()}}" />
    <link rel="stylesheet" href="/css/style.css" />
    <link rel="stylesheet" href="/css/animate.min.css" />
    <link rel="stylesheet" href="/css/awesomplete.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <meta name="google" content="sitelinkssearchbox" />
    <meta name="google" content="pagereadaloud" />
    <meta name="msvalidate.01" content="7EBD43D478FBFCE29F1F747CC42C6F61" />
    
    <script src="{{asset('/js/awesomplete.js')}}"></script>
    <script type="text/javascript" src="https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>
   
<meta property="og:type" content="website">
<meta property="og:url" content="https://bogiyo.com/">
<meta property="og:title" content="Bogiyo | Trending">
<meta property="og:description" content="Upload your Music Online for Free with Bogiyo and Share it with your friends on social networks, Home for Music Lovers.">
<meta property="og:image" content="https://bogiyo.com/thumbnails/bogiFB.jpg">
<meta property="fb:app_id" content="265391744215464">
<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://bogiyo.com/">
<meta property="twitter:title" content="Bogiyo | Trending">
<meta property="twitter:description" content="Upload your Music Online for Free with Bogiyo and Share it with your friends on social networks, Home for Music Lovers.">
<meta property="twitter:image" content="https://bogiyo.com/thumbnails/bogiFB.jpg">
 
<title>Bogiyo | Trending</title>

<meta name="description" content="Upload your Music Online for Free with Bogiyo and
	Share it with your friends on social networks, Home For Music Lovers">

<meta name="theme-color" content="#b05f3c">

<meta name="google", content="Home For Music Lovers" />
<meta name="keywords", content="pandamp3,mp3 download panda, no pain no again mp3, download kiss me song, dangote lyrics, 
  mavinsrecord,instrumental fx,groovemp3,amapiano mp3 download,dj zinhle umlilo remix,manqonqo ngibambe,manqonqo new songs,
  bekezela mp3 download,<?php echo $tracks; ?>Bogiyo mp3, bogiyo, Download, free, Mzansi, Umculo, Hip hop, underground, post music, Maskandi, Gospel,
                    africa,mp3 olova, kwaito, SA, South Africa, latest, new, recent, house, igqomu, music,
                    share music, upload"/>
   <meta name='author', content='Home For Music Lovers'/>  
  <link rel="shortcut icon"  href="{!! asset('thumbnails/favicon.ico')  !!}">   
</head><!--





 .d88888b.  888      .d88888b.  888     888     d8888 888b     d888 8888888b.   .d8888b.  
d88P" "Y88b 888     d88P" "Y88b 888     888    d88888 8888b   d8888 888   Y88b d88P  Y88b 
888     888 888     888     888 888     888   d88P888 88888b.d88888 888    888      .d88P 
888     888 888     888     888 Y88b   d88P  d88P 888 888Y88888P888 888   d88P     8888"  
888     888 888     888     888  Y88b d88P  d88P  888 888 Y888P 888 8888888P"       "Y8b. 
888     888 888     888     888   Y88o88P  d88P   888 888  Y8P  888 888        888    888 
Y88b. .d88P 888     Y88b. .d88P    Y888P  d8888888888 888   "   888 888        Y88b  d88P 
 "Y88888P"  88888888 "Y88888P"      Y8P  d88P     888 888       888 888         "Y8888P"  
                                                                                          
    
                                                                                          
                                                                                          
                                                                               
-->
<style>
    @keyframes lds-ripple {
    0% {
        top: 96px;
        left: 96px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 18px;
        left: 18px;
        width: 156px;
        height: 156px;
        opacity: 0;
    }
}
@-webkit-keyframes lds-ripple {
    0% {
        top: 96px;
        left: 96px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 18px;
        left: 18px;
        width: 156px;
        height: 156px;
        opacity: 0;
    }
}
.lds-ripple {
    position: relative;
}
.lds-ripple div {
    box-sizing: content-box;
    position: absolute;
    border-width: 4px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    -webkit-animation: lds-ripple 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    animation: lds-ripple 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(1) {
    border-color: #b05f3c;
}
.lds-ripple div:nth-child(2) {
    border-color: #eed5b7;
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
}
.lds-ripple {
    width: 200px !important;
    height: 200px !important;
    -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
    transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
}
.ng-scope{
    margin-top: 20%;
}
</style>
<script>
    window.addEventListener('load', function() {
       try{
           Function("()=>{}");
       }catch(exception){
           window.location='https://m.bogiyo.com'
       }
    }
    );

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-53925410-1', 'auto');
    ga('send', 'pageview');
</script>
<body>
@csrf
<div align="center" id="loader" class="lds-css ng-scope">
<div style="width:100%;height:100%" class="lds-ripple">
<div></div><div></div></div>
</div>
<div id="app">
    <app-home></app-home>
    <span id='login'></span>
</div>
<script src="{{asset('/public/js/app.js')}}"></script>
</body>
</html>
