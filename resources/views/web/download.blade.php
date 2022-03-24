<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="msvalidate.01" content="7EBD43D478FBFCE29F1F747CC42C6F61" />
    <meta name="_token" content="{{csrf_token()}}" />
    <meta name="theme-color" content="#b05f3c">
    <meta name='viewport' content='width=device-width, initial-scale=1' />
     @if($music->price == '1')
        <meta property='og:title' content='Purchase  {{$music->track }}' />
        
        <title>Bogiyo |  Purchase {{$music->track}}</title>
        
        <meta name='Description' content='Purchase  {{$music->track}} for only {{ $price->currency }}
            {{ number_format($price->price,"2") }} read lyrics, follow artists, add to playlist and share your favorite music
            with Bogiyo, Home for Music Lovers.' />
            
            <meta property="og:description" content='Purchase  {{$music->track}} for only {{ $price->currency }}
            {{ number_format($price->price,"2") }} read lyrics, follow artists, add to playlist and share your favorite music
            with Bogiyo, Home for Music Lovers.' />
     @else
        <title>Bogiyo | Download {{$music->track}}</title>
        
        <meta property='og:title' content='Download  {{$music->track }}' />
        
        <meta name='Description'  content='Download  {{$music->track}} for free,
          read lyrics, follow artists, add to playlist and share your favorite music
            with Bogiyo, Home for Music Lovers.' />
            
            <meta property="og:description" content='Download  {{$music->track}} for free,
          read lyrics, follow artists, add to playlist and share your favorite music
            with Bogiyo, Home for Music Lovers.' />
            
     @endif

     @if($music->album_art =='/album_art/olova logo.png')
      <meta property='og:image' content="https://bogiyo.com/thumbnails/bogiFB.jpg" />
     @else
     <meta property='og:image' content="https://bogiyo.com{{ $music->album_art }}" />
     @endif
     
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <meta name="google" content="sitelinkssearchbox" />
    <meta name="google" content="pagereadaloud" />
    <link rel="canonical" href='https://bogiyo.com/{{$music->download_code}}'>
    
    <meta property='og:type' content='image/jpg' />

    <meta property='og:url' content='https://bogiyo.com/{{$music->download_code}}' />

    <meta property='og:site_name' content='Bogiyo.com' />

    <meta property='fb:app_id' content='265391744215464' />

    <meta name='twitter:site'  content='https://bogiyo.com/{{$music->download_code}}' />
  
   <script type="text/javascript" src="https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>
   
    <meta name='twitter:image:src' content="http://bogiyo.com/album_art/
    {{ substr($music->track,0,strlen($music->track) - 3) }} 'jpg'" />

    <meta name='twitter:creator' content="@bogiyo.com" />

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
    <app-download id="{{ $id }}"></app-download>
    <span id="login"></span>
    <app-footer></app-footer>
</div>
<script src="{{asset('/public/js/app.js')}}"></script>
</body>
</html>
