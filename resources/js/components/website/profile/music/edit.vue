<template>
    <div>
        <div class="lyrics" >
           <p align="center" style="margin-top: 10%" v-if=" music.lyrics == 'No lyrics' ">Track have no lyrics</p>
            <p align="center" v-else style="padding: 5px"><pre>{{music.lyrics}}</pre></p>
        </div>
        <div class="row">

            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="form-group">
                    <label fo="lyrics">Enter Lyrics: </label>
                    <textarea v-model="lyrics" class="form-control message" id="lyrics"></textarea>
                </div>
                <button class="btn" @click="UpdateLyrics()">Update Lyrics</button>
            </div>


            <div style="padding-top: 30px" class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <a :href="'/' + music.download_code "><img :src="music.album_art" onerror="this.src='/thumbnails/olova.png';"></a>
                <div class="icon_and_label">
                    <div class="icon"></div>
                    <small>{{ music.track.substr(0,27) }}</small>
                </div>
                <br>
                <div class="icon_and_label">
                    <div class="size"></div>
                    <small> {{ (music.size / 1000000).toFixed(2) }} Mb | {{ music.duration }} Min
                    </small>
                </div>
                <br>
                <div class="icon_and_label">
                    <div class="by"></div>
                    <small><b>By :</b>
                        <a :href="'/' + music.username ">{{ music.name }}
                        </a>
                    </small>
                </div>

                <p>
                    <div style="float: left">
                    <span class="cover"><b>Change album art </b></span>
                    <input type="file" capture="user"  accept="image/jpeg , image/jpg , image/png , image/gif" title="Change album art" id="file" @change="changeCover()">
                    </div>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="cover" @click="RemoveCover()"><b>Remove album art </b></span>

                <br><br>

                <button class="btn" @click="deleteTrack(music.id)">Delete this track</button>

                </p>
                <span style="color:red" id="status">
                    {{error}}
                </span>


            </div>
        </div>
    </div>

</template>

<script>
    function _(x) {return document.getElementById(x)}
    import {buss} from '../../../../app'
    export default {

        data () {
            return {
                error:'',
                music:'',
                lyrics:'',
            }
        },

        created(){
            buss.$emit('Closeloading','')
            this.setMusic();
            buss.$emit('setColor','')
        },
        methods: {
            deleteTrack(id){
                $.get('/api/DeleteTrack/'+id,(response)=>{
                    if(response === 'Ok'){
                        this.$router.push('/profile/free/music')
                    }
                })
            },
            
            UpdateLyrics(){
              if(this.lyrics !== ""){
                  var formData = new FormData();
                  formData.append('lyrics', this.lyrics);
                  formData.append('id', this.music.download_code);

                  $.ajaxSetup({
                      headers: {
                          'X-CSRF-Token': $('meta[name=_token]').attr('content')
                      }
                  });

                  var vm = this
                  $.ajax({
                      url: "/updateLyrics",
                      data: formData,
                      type: 'POST',
                      contentType: false,
                      cache: false,
                      processData: false,
                      success: function (response) {
                          if (response === "Ok") {
                              vm.lyrics="",
                              vm.setMusic();
                          }
                      }
                  });
              }
            },

            setMusic(){
                $.get('/api/getEditMusic/' + this.$route.params.id, (response) => {
                    this.music = response
                })
            },

            RemoveCover(){
                var formData = new FormData();
                formData.append('id', this.music.download_code);
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-Token': $('meta[name=_token]').attr('content')
                    }
                });

                var vm = this
                $.ajax({
                    url: "/RemoveCover",
                    data: formData,
                    type: 'POST',
                    contentType: false,
                    cache: false,
                    processData: false,
                    success: function (response) {
                        if (response === "Ok") {
                            vm.setMusic();
                        }
                    }
                });
            },
            changeCover(){
                var vm = this
                var file = _('file').files[0]
                if (file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png" || file.type === "image/gif") {
                    if (_("file").value !== "") {

                        var formdata = new FormData();
                        formdata.append("file", file)
                        formdata.append('music_name',vm.music.track);
                        formdata.append('_token', $('meta[name=_token]').attr('content'));

                        var ajax = new XMLHttpRequest();
                        ajax.upload.addEventListener("progress", function (event) {
                            var percent = (event.loaded / event.total) * 100;
                            _("status").style.color = "green"
                            vm.error = 'Please wait... ' + Math.round(percent) + "%";
                            if (percent === 100) {
                                vm.error = "Please wait... 100%";
                            }
                        }, false);

                        ajax.addEventListener("load", function (event) {
                            if (event.target.responseText !== 'Select image before click upload' || event.target.responseText !== "We only accept png,jpeg and gif format") {
                                vm.error = "";
                                _("status").style.color = "red";
                                vm.setMusic()
                            } else {
                                vm.error = event.target.responseText;
                                _("status").style.color = "red"
                            }
                        }, false);

                        ajax.addEventListener("error", function (event) {
                            vm.error = "Upload Failed";
                            _("status").style.color = "red";
                        }, false);

                        ajax.addEventListener("abort", function (event) {
                            vm.error = "Upload Aborted";
                            _("status").style.color = "red";
                        }, false);

                        ajax.open("POST", "/change_artCover");
                        ajax.send(formdata);
                    } else {
                        vm.error = "We only accept png,jpeg and gif format"
                        _("status").style.color = "red";
                    }


                }
            }
        },

        metaInfo(){
            return {
                title: 'Edit ' + this.music.track,
            }
        }
    }
</script>

<style scoped>
    #file{
        width:140px;
        height: 15px;
        margin-left: -135px;
        position: absolute;
        opacity: 0;
        cursor: pointer;
        z-index: 400;
    }
    #file:hover .cover{
        text-decoration: underline;
    }
    .cover{
        color: #954b4b;
        cursor: pointer;
    }
    .cover:hover{
        text-decoration: underline;
    }
    img {
        width: 80px;
        float: left
    }

    .icon_and_label {
        display: inline-block;
        padding-top: 6px
    }


    small {
        font-size: 11px;
        padding-top: 6px;
    }

    p {
        margin: -3px 0px 0px 0px;
    }

    h1 a {
        text-decoration: underline;
        font-style: italic;
        color: #954b4b;
    }

    .lyrics::-webkit-scrollbar {
        width: 6px;
        background-color: transparent;
    }

    .lyrics::-webkit-scrollbar-thumb {
        background-color: rgb(149, 75, 75);
    }

    .lyrics::-webkit-scrollbar-track {
        /*    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
        background-color: transparent;
    }
    .lyrics{
        height: 280px;
        border: 1px solid #954b4b;
        overflow: auto
    }
</style>
