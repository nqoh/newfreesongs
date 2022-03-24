<template>
    <div style="background: #eed5b7;height: 766px; padding:0px" class="alert">
        <div class="top_label alert  col-xl-12 col-md-12 col-lg-12"><h5 align="center">Lyrics</h5>
        </div>
        <div class="lyrics">
            <p align="center"><pre>{{ lyrics }}</pre></p>
        </div>
    </div>
</template>

<script>
    import {buss} from '../../../app'
    export default {
        props:['id'],
        data () {
            return {
                lyrics:''
            }
        },

        created(){
            $.get('/api/getEditMusic/' + this.id, (response) => {
                if(response) {
                    this.lyrics = response.lyrics
                }
            });

            buss.$on('lyrics',(vl)=>{
               this.lyrics = vl
           })
        }

    }
</script>

<style scoped>
    .lyrics{
        height: 710px;
        overflow: auto;
        margin-top: 45px;
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
</style>

