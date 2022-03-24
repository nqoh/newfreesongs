<template>
    
    <div><h1>No uploads, under maintenance. apologies</h1></div>
    <!---
    <div>

         <div align="center"  >
          <div class="custom-control custom-radio custom-control-inline">
            <input type="radio"  v-model="FreePaidMusic"   class="custom-control-input" id="free" name="music" value="free" checked>
            <label class="custom-control-label" for="free">Free Download</label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" v-model="FreePaidMusic" class="custom-control-input" id="paid" name="music" value="paid">
            <label class="custom-control-label" for="paid">Paid Download</label>
          </div>
        </div>
           
<div style="margin-left: 5%">

        <div>
            <span v-if="show"><span style="color:red" >*</span>Your need a minimum of (1,000) free downloads to Qaulify for Paid Downloads<br v-if="show"></span>
            <b style="float: left"><div class="upload_icon"></div>&nbsp;&nbsp;Upload <span style="color:red" >*</span></b>
            <span  id="status"></span>
        </div>

        <div class="file-upload">
            <label  for="upload" class="file-upload__label">Select Track</label>
            <input  id="upload" class="file-upload__input" type="file" capture="user" accept="audio/mp3 , audio/wav , audio/mpeg , audio/x-ms-wma" @change="file_selected()">
        </div>

        <div class="lyrics_box col-xl-7 col-lg-7 col-md-6 col-sm-12">
            <div class="lrycs_icon"></div><b >&nbsp;&nbsp;Lyrics (Optional): </b><br>
            <textarea   class="col-xl-7 col-lg-7 col-md-6 col-sm-12" name="lyrics" v-model="lyrics" ></textarea>
        </div>

        <div class="genre_box">
            <div class="genre_icon" style="margin-left: 0px;float:left"></div>&nbsp;&nbsp;<label><b>Genre</b><span style="color:red" >*</span>&nbsp;&nbsp;<span  id="genres"></span></label><br>
            <input type="text"  class="text-field" id='genre' v-model="genre" style="width:150px">
        </div>
        <router-link  to="/terms"><a>T&C's</a></router-link><br style="line-height: 0.5" >
        <button class="btn" @click="Upload()" id="btnUpload" style="float: left" >Upload</button><br>
        <router-link to='/store' v-if="show" style="margin-left: 11%; font-size: 15px; font-weight: bold">Learn More About Our Online Store</router-link>

        <div id="progressBar" class="col-xl-7 col-lg-7 col-md-6 col-sm-12" >
            <p align="center" id="barStatus">0%</p>
            <div id="bar"></div>
        </div>

         <p id="uploadStatus" ></p>

         <br>
        <div>
            <span style="color:red" >*</span> Upload, Generate link and Share on Social Networks<br>
            <span style="color:red">*</span> To report an error Click 'Contact Us' below
        </div>
</div>
    </div>  --->
</template>

<script>
    function _(x) {
        return document.getElementById(x)
    }
    import {buss} from '../../../../app'
    export default {

        data () {
            return {
                file:'',
                lyrics:'',
                genre:'',
                price:0.00,
                FreePaidMusic:'',
                show:false ,
                userId: this.$session.get('id')
            }
        },
        created(){
            buss.$emit('setColor','');

            $.get('/api/firsttrack',(response) => {
               this.$session.start()
               if(response == 'true'){
                  this.$session.set('FreePromo',false)
                }else{
                  this.$session.set('FreePromo',true)
                 }
             });
        },
        watch:{
            FreePaidMusic(val){
               if(val === 'paid'){
                   this.price = 10.00
                   this.show=true
                   _("status").innerHTML=""
                   _("upload").value = "";
               }else{
                   this.price = 0.00
                   this.show=false
                   _("status").innerHTML=""
                   _("upload").value = "";
               }
            }
        },
        mounted(){
          _('free').checked=true
        },
        methods:{
            file_selected(){
            var  file_name = _('upload').files[0].name, file_size = _('upload').files[0].size,
                    file_type = _('upload').files[0].type;

                if (file_type !== "audio/mp3" && file_type !== "audio/x-ms-wma" && file_type !== "audio/wav" && file_type !=="audio/mpeg"){
                    _("status").style.color="red"
                    _("status").innerHTML = "Your track must be a mp3,wav,wma format";
                    _('upload').value='';
                    return false
                }

                if (file_size > 110000000) {
                    _("status").style.color="red"
                    _("status").innerHTML = "Your track is too large";
                    return false
                }

                _("status").style.color= "#954b4b"
                _('status').innerHTML="Please Wait..."

                $.get('/api/TrackExit/'+file_name, (response) => {
                    if(response !== "Ok") {
                        _('status').innerHTML = response
                        _("status").style.color = "red",
                        _("upload").value = "";
                        return false
                    }

                })

                if(this.show){
                  $.get('/api/QualifyPaidDownloads', (response)=>{
                      if(response !== "Ok"){
                          _("status").innerHTML = response
                          _("status").style.color = "red",
                          _("upload").value = "";
                          return false
                      }else {
                          _("status").style.color = "black"
                          _('status').innerHTML = file_name
                          this.file=file_name
                      }
                    });
                }

                _("status").innerHTML = file_name
                _("status").style.color = "black"
                this.file=file_name
            },

            Upload(){
                var vm = this
                if ( _("upload").value   !==  "") {
                    if(this.genre == ""){
                        _("genres").innerHTML = "Enter genre";
                        _("genres").style.color = "red";
                        return false;
                    }

                    if(this.genre.length <  3){
                        _("genres").innerHTML = "Invalid genre";
                        _("genres").style.color = "red";
                        return false;
                    }

                    _("progressBar").style.display="block";
                    _("btnUpload").style.display="none";
                    var formdata = new FormData();
                    formdata.append("file", _("upload").files[0]);
                    formdata.append('price', this.price);
                    formdata.append("lyrics", this.lyrics);
                    formdata.append('genre', this.genre);
                    formdata.append('id',this.userId)
                    formdata.append('_token',$('meta[name=_token]').attr('content'));
                    var ajax = new XMLHttpRequest();

                    //Handle inprogress
                    ajax.upload.addEventListener("progress", function (event) {
                        var percent = (event.loaded / event.total) * 100;
                        _("progressBar").style.display="block";
                        _('barStatus').innerHTML=Math.round(percent)+"%";
                        _("bar").style.width=Math.round(percent)+"%";
                        if(percent === 100){
                            _("uploadStatus").innerHTML ="<span style='color: #b05f3c;font-size: 16px'>Please wait...</span>";
                        }
                    }, false);
                    //completeHandler
                    ajax.addEventListener("load", function (event) {
                        if(event.target.responseText === 'Ok') {
                            _("status").innerHTML = "";
                            _('uploadStatus').innerHTML=""
                            _("uploadStatus").style.display="none";
                            _("upload").value = "";
                            _('barStatus').innerHTML=0+'%';
                            _("btnUpload").style.display="block";
                            _("progressBar").style.display="none";
                            vm.$router.push('/profile/uploaded/music')
                        }else{
                            _("status").innerHTML = event.target.responseText;
                            _("status").style.color = "red"
                            _("upload").value = "";
                            _('barStatus').innerHTML=0+'%'
                            _("btnUpload").style.display="block";
                            _("progressBar").style.display="none";
                            _("uploadStatus").style.display="none";
                            _('uploadStatus').innerHTML=""

                        }
                    }, false);
                    //errorHandle
                    ajax.addEventListener("error", function (event) {
                        _("status").innerHTML = "Upload Failed";
                        _("status").style.color = "red"
                        _("upload").value = "";
                        _("btnUpload").style.display="block";
                        _("progressBar").style.display="none";
                        _("uploadStatus").style.display="none";
                        _('uploadStatus').innerHTML=""
                    }, false);
                    //abortHandle
                    ajax.addEventListener("abort", function (event) {
                        _("status").innerHTML = "Upload Aborted";
                        _("status").style.color = "red"
                        _("upload").value = "";
                        _("btnUpload").style.display="block";
                        _("progressBar").style.display="none";
                        _("uploadStatus").style.display="none";
                        _('uploadStatus').innerHTML=""
                    }, false);
                    ajax.open("POST", "/uploading");
                    ajax.send(formdata);
                }else {
                    _("status").style.color = "red"
                    _("status").innerHTML="Please select your Song before Upload";
                }
            },


        },

        metaInfo: {
            title: 'Upload Music',
        }

    }
</script>

<style scoped>
    #uploadStatus{margin:0px}
    #btnUpload{
        font-weight: bold;
    }
    #progressBar{
        height: 20px;
        background-color:  #d19275;
        border-radius: 5px;
        display: none;

    }
    #barStatus{
        position: absolute;
        margin: -3px 0px 0px 40%;
        color:white;

    }
    #bar{
        width:0%;
        height: 100%;
        background-color: #b05f3c;
        border-radius: 5px;
        align-content: center;
    }
.lyrics_box{
    margin-top: 1em;
}
.genre_box{
    margin-left: 0em;
}
  textarea{
        margin-bottom:10px;
        height: 5em;
        min-height: 5em;
        max-height: 5em;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        margin-top: 0.5em;
        outline:none;
        color: #555;
        background-color: white;
        border: 1px solid #954b4b;
        border-radius: 8px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    }
  .text-field{
      margin-top: -2px;
      width: 15em;
      height: 20px;
      margin-bottom:10px;
      font-size: 16px;
      line-height: 1.42857143;
      outline:none;
      padding-right: 32px;
      padding-left: 12px;
      background-image: none;
      border: 1px solid rgb(149, 75, 75);
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
      -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
      -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
      transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  }
 #status{
     margin-left:35px;
     font-family:Verdana, Geneva, sans-serif;

 }
    .file-upload {
        position: relative;
        display: inline-block;
        margin-top: 5px;
    }

    .file-upload__label {
        display: block;
        padding: 1em 2em;
        color: #fff;
        background: rgb(149, 75, 75);
        border-radius: .4em;
        transition: background .3s;
    }
    .file-upload__label:hover {
        cursor: pointer;
        background: #d19275;
    }

    .file-upload__input {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        font-size: 1;
        width:0;
        height: 100%;
        opacity: 0;
        outline: none;
    }

.btnUpload span{
    font-weight: bold;
    color:rgb(149, 75, 75);
    margin-left: 13%;
}
    p {
        padding: 0px;
        margin: 0px;
    }

   .custom-control-label {
        font-weight: bold;
        font-size: 18px;
        color: rgb(149, 75, 75);
    }
 .navs{
    margin-left: 15%;
 }
    .upload_icon{
        width:22px;
        height:26px;
        float:left;
        background-image:url(/thumbnails/icons.png);
        background-repeat:no-repeat;
        background-position:-10px -230px;
        margin:-3px
    }
 .lrycs_icon{
     width:22px;
     height:27px;
     float:left;
     background-image:url(/thumbnails/icons.png);
     background-repeat:no-repeat;
     background-position:-11px -190px;
     margin:-3px;
 }
.genre_icon{
    width:25px;
    height:26px;
    float:left;
    background-image:url(/thumbnails/icons.png);
    background-repeat:no-repeat;
    margin:-5px;
    margin-left:15px;
    background-position:-11px -83px;
}
</style>
