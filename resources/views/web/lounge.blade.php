<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="msvalidate.01" content="7EBD43D478FBFCE29F1F747CC42C6F61" />
    <meta name="_token" content="{{csrf_token()}}" />

    <meta name='viewport' content='width=device-width, initial-scale=1' />

    <meta property='og:image' content='https://bogiyo.com{{ $member->image }}' />

    <meta property='og:title' content='{{ $member->name }} Lounge' />
 
    <title> Bogiyo |  {{ $member->name }} </title>

    <meta name='Description' content='{{ $member->bio }}' />
    
    <meta property="og:description" content='{{ $member->bio }}' />
    
    <meta property='og:url' content='https://bogiyo.com/{{ $member->username }}' />

    <meta property='og:site_name' content='Bogiyo.com' />

    <meta property='fb:app_id' content='265391744215464' />

    <meta name='twitter:site'  content='https://bogiyo.com/{{ $member->username }}' />

    <meta name='twitter:image:src' content="{{ $member->image }}" />

    <meta name='twitter:creator' content="@Bogiyo.com" />
    
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <meta name="google" content="sitelinkssearchbox" />
    <meta name="google" content="pagereadaloud" />
    <link rel="canonical" href='https://bogiyo.com/{{ $member->username }}'>
    
    <meta name="theme-color" content="#b05f3c">
    <meta name="description" content='{{ $member->bio }}'>

    <link rel="stylesheet"  href="/css/animate.min.css" />
    <link rel="stylesheet"  href="/css/app.css" />
    <link rel="stylesheet" href="/css/style.css" />
    <link rel="stylesheet" href="/css/awesomplete.css" />
    <link rel="shortcut icon"  href="{!! asset('thumbnails/favicon.ico')  !!}">
    <script src="{{asset('/js/awesomplete.js')}}"></script>
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
<script>
 window.addEventListener('load', function() {
       try{
           Function("()=>{}");
       }catch(exception){
           window.location='https://m.bogiyo.com/<?php echo $id; ?>'
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
<div id="app">
    <app-headerx></app-headerx>
    <app-lounge id="{{ $id }}"></app-lounge>
    <span id="login"></span>
    <app-footer></app-footer>
</div>
<script src="{{asset('/public/js/app.js')}}"></script>
</body>
</html>
