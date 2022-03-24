<template>
  <div v-if="show" style="background-color: rgb(238, 213, 183); height: 57px; ">
        <p align="center" style="color:red; margin: 0px; ">{{error}}</p>



        <div class="control col-12" style="float: left;">
            <span id="m_ctime">0:00</span>
            <div style="float: left; padding: 8px 0px 0px 0px" class="col-8">
                <input type="range" class="range col-12" style="padding: 0px" value="0" min="0" max="100" id="m_seekbar">
            </div>
            <span id="m_dtime">0:00</span>
        </div>

        <div class="col-xl-10 col-lg-10 col-md-12" style="padding: 0px; margin: 0px;">
            <div style="width: 50px; margin-left:0px; float: left">
                <div id="m_ply" @click="m_ply"><img src="/thumbnails/play-button-1.png" id="m_play_pause"></div>
            </div>
            <div style="width: 50px; margin-left: -10px;  float: left">
                <img src="/thumbnails/stop-1.png" id="m_stop">
            </div>

            <p align="center" style=" float:left; margin-left:6%;color:rgb(209,149,117); font-size: 15px;">
                <b  style="background: rgb(238, 213, 183);">{{plays}} Plays</b>
            </p>

            <button style="margin-left: 5%" type="button" class="close" @click="ClosePlayer()" aria-label="Close">
                <span aria-hidden="true" style="color:#b05f3c; cursor: pointer">&times;</span>
            </button>

            <div style="width: auto;   float:right; margin-right: 11%">
                <div id="m_mute" style="float: left;cursor: pointer">
                    <img src="/thumbnails/spk1.png" id="m_volum"></div>
                <div id="vol_div">
                    <input type="range" value="50" min="0" max="100" id="m_volume_slider">
                </div>
            </div>
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
      //  props: ['music'],
        data () {
            return {
                plays:0,
                purchased:false,
                error:'',
                show:true,
                music:[],
            }
        },

        created(){
            buss.$on('MobilePlayer', (data) => {
                this.music = data;
                if(this.music.price === 0 || this.purchased === true) {
                    this.loadtrack(this.music.track);
                    this.error='';
                }else{
                    audio.pause();
                    audio.currentTime = 0;
                    _('m_seekbar').value=0;
                    _("m_play_pause").src = "/thumbnails/play-button-1.png";
                    _("speaker1").src = "/thumbnails/spk1.gif";
                    _("speake2").src = "/thumbnails/spk1.gif";
                }
            });

            buss.$on('LoardTrack',()=>{
                this.error='';
                this.purchased = true;
                this.music.price = 0;
                this.loadtrack(this.music.track);
            });

            buss.$on('player',(data)=>{
                this.music = data;
                this.getPlays();
            });

            this.getPlays();
        },
        methods: {

            ClosePlayer(){
                audio.pause();
                this.show = false;
            },

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
                    _('m_play_pause').src = "/thumbnails/pause-1.png";
                    audio.play();
                    this.addPlays()
                }
                audio.volume = _('m_volume_slider').value / 100;

                _('m_volume_slider').addEventListener('change', function () {
                    audio.volume = _('m_volume_slider').value / 100;
                    if (_('m_volume_slider').value <= 0) {
                        _('m_volum').src = "/thumbnails/mute.png";
                        audio.muted = true;
                    } else if (_('m_volume_slider').value <= 30 && _('m_volume_slider').value > 1) {
                        _('m_volum').src = "/thumbnails/spk.png";
                        audio.muted = false;
                    } else if (_('m_volume_slider').value >= 31 && _('m_volume_slider').value < 65) {
                        _('m_volum').src = "/thumbnails/spk1.png";
                        audio.muted = false;
                    } else if (_('m_volume_slider').value >= 65 && _('m_volume_slider').value < 100) {
                        _('m_volum').src = "/thumbnails/spk2.png";
                        audio.muted = false;
                    }
                });
                _('m_mute').addEventListener('click', function () {
                    if (audio.muted) {
                        audio.muted = false;
                        if (_('m_volume_slider').value <= 0) {
                            _('m_volum').src = "/thumbnails/mute.png";
                        } else if (_('m_volume_slider').value <= 30 && _('m_volume_slider').value > 1) {
                            _('m_volum').src = "/thumbnails/spk.png";
                        } else if (_('m_volume_slider').value >= 31 && _('m_volume_slider').value < 65) {
                            _('m_volum').src = "/thumbnails/spk1.png"
                        } else if (_('m_volume_slider').value >= 65 && _('m_volume_slider').value < 100) {
                            _('m_volum').src = "/thumbnails/spk2.png";
                        }
                    } else {
                        audio.muted = true;
                        _("speaker1").src = "/thumbnails/spk1.gif";
                        _("speake2").src = "/thumbnails/spk1.gif";
                        _('m_volum').src = "/thumbnails/mute.png";
                    }
                });

                _('m_seekbar').addEventListener("change", function () {
                    audio.currentTime = audio.duration * (_('m_seekbar').value / 100);
                });

                _('m_stop').addEventListener('click', function () {
                    audio.pause();
                    audio.currentTime = 0;
                    _('m_seekbar').value=0;
                    _("m_play_pause").src = "/thumbnails/play-button-1.png";
                    _("speaker1").src = "/thumbnails/spk1.gif";
                    _("speake2").src = "/thumbnails/spk1.gif";
                });

                audio.addEventListener('timeupdate', function () {
                    if (audio.currentTime > 0){
                        _('m_seekbar').value = audio.currentTime * (100 / audio.duration);
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
                        _("m_ctime").innerHTML = curnmin + ":" + cursec;
                        _("m_dtime").innerHTML = durmin + ":" + dursec;
                        if (audio.paused) {
                            _("m_play_pause").src = "/thumbnails/play-button-1.png";
                            _("speaker1").src = "/thumbnails/spk1.gif";
                            _("speake2").src = "/thumbnails/spk1.gif";
                        }
                        if (audio.m_muted) {
                            _("speaker1").src = "/thumbnails/spk1.gif";
                            _("speake2").src = "/thumbnails/spk1.gif";
                            _('m_volum').src = "/thumbnails/mute.png";
                        }
                    }
                }, false);



                //  this.iniMp3();
            },

            m_ply(){
                if(this.music.price === 0 || this.purchased === true) {
                    if (audio.paused) {
                        _("speaker1").src = "/thumbnails/spk.gif";
                        _("speake2").src = "/thumbnails/spk.gif";
                        _('m_play_pause').src = "/thumbnails/pause-1.png";
                        audio.play()
                        this.addPlays()
                    } else {
                        _("m_play_pause").src = "/thumbnails/play-button-1.png";
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
    .close{
        border: 1px solid #b05f3c;
        border-radius: 100%;
    }

    img {
        max-width: 90px
    }

    #mp3_player {
        margin-top: 20px;
        padding: 0px;
    }

    #m_volum {
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

    #m_dtime {
        float: right;
        color: rgb(238, 213, 183);
        margin-top: -3px;
        margin-right: 5px;
    }

    #m_ctime {
        margin-left: 5px;
        width: 30px;
        color: rgb(238, 213, 183);
        float: left;
        margin-top: -3px
    }

    #m_seekbar {
        margin-left: 7%;
    }

    #m_volume_slider {
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

    #m_play_pause {
        width: 30px;
        margin-top: 2px;
        cursor: pointer;
    }

    #m_stop {
        width: 25px;
        margin-top: 6px;
        cursor: pointer;
    }


</style>
