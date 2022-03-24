<template>
    <div >
        <div id="mp3_player" class="col-12" >
            <img src="/thumbnails/spk1.gif" id="speaker1" style="float: left" class="card-img embed-responsive">
            <canvas class="col-xl-8 col-lg-8 col-md-6" id="analyser"></canvas>
            <div class="control col-xl-8 col-lg-7 col-md-6" style="float: left;">
                <span id="ctime">0:00</span>
                <div style="float: left; padding: 8px 0px 0px 0px" class="col-xl-8 col-lg-8 col-md-6">
                    <input type="range" class="range col-12" style="padding: 0px" value="0" min="0" max="100" id="seekbar">
                </div>
                <span id="dtime">0:00</span>
            </div>
            <img src="/thumbnails/spk1.gif" id="speake2" class="card-img embed-responsive">

            <div class="col-xl-10 col-lg-10 col-md-12" style="padding: 0px; margin: 0px;">
                <div style="width: 50px; margin-left:0px; float: left">
                    <div id="ply" @click="ply"><img src="/thumbnails/play-button-1.png" id="play_pause"></div>
                </div>
                <div style="width: 50px; margin-left: -10px;  float: left">
                    <img src="/thumbnails/stop-1.png" id="stop">
                </div>

                <div style="width: auto;   float:right; margin-right: 11%">
                    <div id="mute" style="float: left;cursor: pointer">
                        <img src="/thumbnails/spk1.png" id="volum"></div>
                    <div id="vol_div">
                        <input type="range" value="50" min="0" max="100" id="volume_slider">
                    </div>
                </div>
            </div>
            <p align="center" style=" clear:both;color:rgb(209,149,117); font-size: 15px;  "><b id="plys">{{plays}} Plays</b>
            </p>
            <p align="center" style="color:red; margin: 0px; ">{{error}}</p>
        </div>
    </div>
</template>

<script>
    function _(x) {
        return document.getElementById(x)
    }
    var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_x, bar_width, bar_height;
    var audio = new Audio();
    import {buss} from '../../../app'
    export default {
        props: ['music'],
        data () {
            return {
                plays:0,
                purchased:false,
                error:''
            }
        },
        mounted(){
            if(this.music.price === 0 || this.purchased === true) {
                this.loadtrack(this.music.track);
                this.error='';
            }
        },
        watch:{
            music : function (val) {
                buss.$emit('MobilePlayer',val)
                if(val.price === 0 ) {
                    this.loadtrack(val.track);
                    this.error='';
                } else {
                    audio.pause();
                    audio.currentTime = 0;
                    _('seekbar').value=0;
                    _("play_pause").src = "/thumbnails/play-button-1.png";
                    _("speaker1").src = "/thumbnails/spk1.gif";
                    _("speake2").src = "/thumbnails/spk1.gif";
                }
            }
        },
        created(){
            buss.$on('player',(data)=>{
                this.music = data;
                this.getPlays();
            })
            
            buss.$emit('MobilePlayer',this.music)

            buss.$on('LoardTrack',()=>{
                this.error='';
                this.purchased = true
                this.music.price = 0
                this.loadtrack(this.music.track);
            });

            this.getPlays();
        },
        methods: {
            getPlays(){
                $.get('/api/getPlays/'+this.music.id, (response)=>{
                    this.plays = response;
                })
            },


            addPlays(){
              $.get('/api/addPlays/'+this.music.id, (response)=>{
                  this.getPlays();
              })
            },

            loadtrack(track){
                if(audio.paused){
                    audio.src = "/musicfile/" + track;
                    audio.currentTime = 0
                } else {
                    audio.pause();
                    audio.currentTime = 0;
                    audio.src = "/musicfile/" + track;
                    _("speaker1").src = "/thumbnails/spk.gif";
                    _("speake2").src = "/thumbnails/spk.gif";
                    _('play_pause').src = "/thumbnails/pause-1.png";
                    audio.play();
                    this.addPlays()
                }
                audio.volume = _('volume_slider').value / 100;

                _('volume_slider').addEventListener('change', function () {
                    audio.volume = _('volume_slider').value / 100;
                    if (_('volume_slider').value <= 0) {
                        _('volum').src = "/thumbnails/mute.png";
                        audio.muted = true;
                    } else if (_('volume_slider').value <= 30 && _('volume_slider').value > 1) {
                        _('volum').src = "/thumbnails/spk.png";
                        audio.muted = false;
                    } else if (_('volume_slider').value >= 31 && _('volume_slider').value < 65) {
                        _('volum').src = "/thumbnails/spk1.png";
                        audio.muted = false;
                    } else if (_('volume_slider').value >= 65 && _('volume_slider').value < 100) {
                        _('volum').src = "/thumbnails/spk2.png";
                        audio.muted = false;
                    }
                });
                _('mute').addEventListener('click', function () {
                    if (audio.muted) {
                        audio.muted = false;
                        if (_('volume_slider').value <= 0) {
                            _('volum').src = "/thumbnails/mute.png";
                        } else if (_('volume_slider').value <= 30 && _('volume_slider').value > 1) {
                            _('volum').src = "/thumbnails/spk.png";
                        } else if (_('volume_slider').value >= 31 && _('volume_slider').value < 65) {
                            _('volum').src = "/thumbnails/spk1.png"
                        } else if (_('volume_slider').value >= 65 && _('volume_slider').value < 100) {
                            _('volum').src = "/thumbnails/spk2.png";
                        }
                    } else {
                        audio.muted = true;
                        _("speaker1").src = "/thumbnails/spk1.gif";
                        _("speake2").src = "/thumbnails/spk1.gif";
                        _('volum').src = "/thumbnails/mute.png";
                    }
                });

                _('seekbar').addEventListener("change", function () {
                    audio.currentTime = audio.duration * (_('seekbar').value / 100);
                });

                _('stop').addEventListener('click', function () {
                    audio.pause();
                    audio.currentTime = 0;
                    _('seekbar').value=0;
                    _("play_pause").src = "/thumbnails/play-button-1.png";
                    _("speaker1").src = "/thumbnails/spk1.gif";
                    _("speake2").src = "/thumbnails/spk1.gif";
                });

                audio.addEventListener('timeupdate', function () {
                    if (audio.currentTime > 0){
                    _('seekbar').value = audio.currentTime * (100 / audio.duration);
                    var curnmin = Math.floor(audio.currentTime / 60);
                    var cursec = Math.floor(audio.currentTime - curnmin * 60);
                    var durmin = Math.floor(audio.duration / 60);
                    var dursec = Math.floor(audio.duration - durmin * 60);
                    if (cursec < 10) {
                        cursec = "0" + cursec
                    }
                    if (dursec < 10) {
                        dursec = "0" + dursec
                    }
                    _("ctime").innerHTML = curnmin + ":" + cursec;
                    _("dtime").innerHTML = durmin + ":" + dursec;
                    if (audio.paused) {
                        _("play_pause").src = "/thumbnails/play-button-1.png";
                        _("speaker1").src = "/thumbnails/spk1.gif";
                        _("speake2").src = "/thumbnails/spk1.gif";
                    }
                    if (audio.muted) {
                        _("speaker1").src = "/thumbnails/spk1.gif";
                        _("speake2").src = "/thumbnails/spk1.gif";
                        _('volum').src = "/thumbnails/mute.png";
                    }
                }
                }, false);

                //  this.iniMp3();
            },

            ply(){
                if(this.music.price === 0 || this.purchased === true) {
                    if (audio.paused) {
                        _("speaker1").src = "/thumbnails/spk.gif";
                        _("speake2").src = "/thumbnails/spk.gif";
                        _('play_pause').src = "/thumbnails/pause-1.png";
                        audio.play()
                        this.addPlays()
                    } else {
                        _("play_pause").src = "/thumbnails/play-button-1.png";
                        _("speaker1").src = "/thumbnails/spk1.gif";
                        _("speake2").src = "/thumbnails/spk1.gif";
                        audio.pause();
                    }
                }else{
                    this.error='Purchase this track before you click play';
                }
            },

            iniMp3(){
                context = new AudioContext();
                analyser = context.createAnalyser();
                canvas = document.getElementById("analyser");
                ctx = canvas.getContext('2d');
                source = context.createMediaElementSource(audio);
                source.connect(analyser);
                analyser.connect(context.destination);
                this.framelooper();
            },

            framelooper() {
                window.requestAnimationFrame(this.framelooper);
                fbc_array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(fbc_array);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = '#b05f3c';
                bars = 100;
                for (var i = 0; i < bars; i++) {
                    bar_x = i * 3;
                    bar_width = 2;
                    bar_height = -(fbc_array[i] / 2);
                    ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
                }
            }


        }
    }
</script>

<style scoped>
    img {
        max-width: 90px
    }

    #mp3_player {
        margin-top: 20px;
        padding: 0px;
    }

    #volum {
        z-index: 10;
        width: 25px;
        margin-top: 2px;
    }

    #vol_div {
        float: right;
        width: 68px;
    }

    #vol_div > input[type='range'] {
        -webkit-appearance: none !important;
        padding: 0px;
        background: rgb(209, 149, 117);
        height: 5px;
        outline: none;
        cursor: pointer;
    }

    .control > div > input[type='range'] {
        -webkit-appearance: none !important;
        margin: 0px;
        padding: 0px;
        background: rgb(238, 213, 183);
        height: 5px;
        outline: none;
        cursor: pointer;
    }

    input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none !important;
        background: #b05f3c;
        height: 11px;
        width: 11px;
        border-radius: 100%;
        cursor: pointer;
    }

    input[type='range']::-moz-range-thumb {
        -webkit-appearance: none !important;
        background: orange;
        height: 11px;
        width: 11px;
        border-radius: 100%;
        cursor: pointer;
    }

    input[type='range']::-ms-thumb {
        -webkit-appearance: none !important;
        background: orange;
        height: 11px;
        width: 11px;
        border-radius: 100%;
        cursor: pointer;
    }

    #dtime {
        float: right;
        color: rgb(238, 213, 183);
        margin-top: -3px;
        margin-right: 5px;
    }

    #ctime {
        margin-left: 5px;
        width: 30px;
        color: rgb(238, 213, 183);
        float: left;
        margin-top: -3px
    }

    #seekbar {
        margin-left: 7%;
    }

    #volume_slider {
        height: 4px;
        margin-right: 20px;
        width: 68px;
    }

    .control {
        height: 20px;
        background-color: rgb(209, 149, 117);
        float: left;
        margin-top: 2px;
        padding: 0px;
    }

    .range {
        float: left;
        margin-left: 5px;
    }

    canvas {
        padding: 0px;
        height: 45px;
        float: left;
        width: 385px;
    }

    #speake2 {
        float: left;
        margin-top: -9%;
    }

    #play_pause {
        width: 30px;
        margin-top: 2px;
        cursor: pointer;
    }

    #stop {
        width: 25px;
        margin-top: 6px;
        cursor: pointer;
    }


</style>
