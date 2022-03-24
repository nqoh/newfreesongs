<template>
    <div>

         <div align="center">
             <h3 align="center">Track Uploaded</h3>
         </div>
        <div  style="margin-left: 0%; margin-top: 10%">
        <div class="form-group col-xl-7 col-lg-7 col-md-6 col-sm-4">
            <label>Download Link :</label>
            <input type="text" :value="'bogiyo.com/'+download_link" id="download_link" class="form-control" style="float:left">
            <div class="input-group-append">
                <span class="input-group-text" id="DownloadLink" @click="downloadLink()">Copy</span>
            </div>
        </div>


        <div class="form-group col-xl-7 col-lg-7 col-md-6 col-sm-4">
            <label>Delete Link :</label>
            <input type="text" :value="'bogiyo.com/d/'+delete_link" id="delete_link" class="form-control" style="float:left">
            <div class="input-group-append">
                <span class="input-group-text" id="DeleteLink" @click="deleteLink()">Copy</span>
            </div>
        </div>
        </div>
        <div>
            <ul>
            <li><b>Share Download link on Social Networks</b></li>
               <div  style="width: 100%; margin-top: 0px;">
                            <a  :href="'https://www.facebook.com/sharer.php?u=http://bogiyo.com/'+download_link">
                                <img src="/thumbnails/fbshare.png" width="70" height="20" title="Share on facebook"> </a>

                            &nbsp; &nbsp;
                            <a  :href="'whatsapp://send?text=https://www.bogiyo.com/'+download_link">
                                <img src="/thumbnails/download.jpg" width="70" height="20" title="Share on WhatsApp"> </a>

                            &nbsp; &nbsp;
                            <a :href="'https://twitter.com/share?url=http%3A%2F%2Fbogiyo.com/'+download_link">
                                <img src="/thumbnails/twitter.png" width="70" height="20" title="Share on twitter"> </a>
                        </div><br>
            <li v-if="promo"><b>Promote this track for free</b></li>
            <button v-if="promo" @click="StartPromote()" id="btnPromo" class="btn_promote"><b>Promote Now</b></button>
            <li v-if="!promo"><b>Promote this track for only {{ priceCurrency.currency }} {{ priceCurrency.price.toFixed(2) }}</b></li>
             <button v-if="!promo" @click="Promote()" class="btn_promote"><b>Promote Now</b></button>
            </ul>
        </div>

    </div>
</template>

<script>
    import {buss} from '../../../../app'
    export default {

        data () {
            return {
                download_link: '',
                delete_link: '',
                track_id:'',
                promo: this.$session.get('FreePromo'),
                priceCurrency:[]
            }
        },
        created(){
            buss.$emit('setColor','')
        },
        beforeCreate(){

              $.get('/api/getPriceCurrency', (response) => {
                   this.priceCurrency = response
              });
              $.get('/api/broadcastEmail', (response)=>{});
              $.get('/api/trackSessions', (response) => {
                  if (response[0] !== null && response[1] !== null) {
                    this.download_link = response[0]
                    this.delete_link = response[1]
                    this.track_id =  response[2]
                } else {
                    this.$router.push('/profile/upload/music')
                }
            });
        },
        methods:{
            Promote(){
             this.$router.push('/profile/ads/promote/' + this.track_id)
            },
            StartPromote(){
              if(this.promo){

               document.getElementById('btnPromo').innerHTML = '<div align="center" style="margin: 0px 5px 0px 10px"  class="loader loader--style7" title="Please wait...">'+
                '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                'width="12px" height="15px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">'+
                '<rect x="0" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1"begin="0s" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="7" y="0" width="4" height="20" fill="#eed5b7">'+
                '<animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite" />'+
                '</rect><rect x="14" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite" /></rect></svg></div>'
                 var formdata = new FormData();
                 formdata.append('download_code',this.download_link);
                 $.ajaxSetup({
                 headers: {
                 'X-CSRF-Token': $('meta[name=_token]').attr('content')
                   }
                 });
                 var vm = this;
                 $.ajax({
                 url: "/FreePromo",
                 data: formdata,
                 type: 'POST',
                 contentType: false,
                 cache: false,
                 processData: false,
                 success: function (response) {
                 if (response == "Ok") {
                   document.getElementById('btnPromo').innerHTML = "Done ! Wait..."
                   vm.$session.remove('FreePromo');
                   vm.$router.push("/profile/ads/overview/")
                   }
                  }
                });
              }
             },
            downloadLink(){
                var copyText = document.getElementById("download_link");
                copyText.select();
                document.execCommand("copy");
                document.getElementById('DownloadLink').innerHTML="Copied!"
                setTimeout(function () {
                document.getElementById('DownloadLink').innerHTML="Copy"
                },2000)
            },
            deleteLink(){
                var copyText = document.getElementById("delete_link");
                copyText.select();
                document.execCommand("copy");
                document.getElementById('DeleteLink').innerHTML="Copied!"
                setTimeout(function () {
                    document.getElementById('DeleteLink').innerHTML="Copy"
                },2000)
            }
        },
        metaInfo: {
            title: 'Music Uploaded',
        }

    }
</script>

<style scoped>
    .form-control {
        float: left;
        border-right: none;
    }
    h3{
        color: #954b4b;
    }
    .input-group-append {
        cursor: pointer;
        outline: none;
        border:none;
    }

   .btn_promote {
        padding: 8px;
        width: 200px;
        border-radius: 20px;
        outline: none;
        font-size: 20px;
        color: #eed5b7;
        background-color: #d19275;
    }
    .input-group-text {
        background-color: #954b4b;
        font-weight: bold;
        color: white;
        outline: none;
        border: none;

    }
</style>
