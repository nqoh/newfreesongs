<template>
    <div class="container-fluid" style="padding:5px">
        <hr>
        <div class="sub-container">
            <h1 align=center> Delete Track </h1>
        </div>
        <hr>
        <div class="sub-container">
            <div class="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12" style="padding: 0px;">
                <a :href="'/' + music.download_code "><img :src="music.album_art" onerror="this.src='/thumbnails/olova.png';"></a>
                <div class="icon_and_label">
                    <div class="icon"></div>
                    <small>{{ music.track.substr(0,27) }}</small>
                </div>
                <br>
                <div class="icon_and_label box2">
                    <div class="size"></div>
                    <small> {{ (music.size / 1000000).toFixed(2) }} Mb | {{ music.duration }} Min
                    </small>
                </div>
                <br>
                <div class="icon_and_label box2">
                    <div class="by"></div>
                    <small><b>By :</b>

                        <span v-if=" music.username == 'Unknown'  ">{{ music.name }}</span>

                        <a  v-else :href="'/' + music.username ">
                            <span @click="getLounge(music.username)">{{ music.name }}</span>
                        </a>
                    </small>
                </div><br>
                <button @click="Delete(music.delete_code)"  class="btn" >Delete</button>
            </div>
        </div>
        <hr>

    </div>
</template>

<script>

    export default {
            props:['id'],
        data () {
            return {
                music:'',
            }
        },
        created(){
            $.get('/api/getDeleteMusic/' +this.id, (response) => {
                if(response !== 'fail') {
                    this.music = response[0]
                }else{
                    window.location='/error';
                }
            });
        },

        methods:{
            Delete(id){
                $.get('/api/DeleteMusic/'+id , (response)=>{
                    if(response === 'deleted'){
                        window.location= '/';
                    }else{
                        window.location= '/error';
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .box2{
        margin-top: 20px;
    }
    img {
        width: 120px;
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


    h1 a {
        text-decoration: underline;
        font-style: italic;
        color: #954b4b;
    }
</style>
