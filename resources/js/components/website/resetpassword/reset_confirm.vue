<template>
    <div>
        <img :src="image" class="card-img" style="width: 70px; float: left; margin-right:5px">
       <div>
         <p style="margin: 0px">{{name}} {{surname}}</p>
        <input type="radio" checked="checked" value="email">Reset via Email
        <br><button class="btn" @click="confirm()" id='btn'>Continue</button>
       </div>
        <div class="d-none d-xl-block  d-lg-block  col-md-12" ref="desktop" ></div>
    </div>
</template>

<script>
function _(x) {return document.getElementById(x)}
    import {buss} from '../../../app'
    export default {
         props:['email','name','image','surname','title'],
        data () {
            return {title:'title'}
        },
        methods:{
            confirm(){
                 _('btn').innerHTML = '<div align="center" style="margin: 0px 5px 0px 10px"  class="loader loader--style7" title="Please wait...">'+
                '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                'width="12px" height="15px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">'+
                '<rect x="0" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1"begin="0s" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="7" y="0" width="4" height="20" fill="#eed5b7">'+
                '<animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite" />'+
                '</rect><rect x="14" y="0" width="4" height="20" fill="#eed5b7"><animate attributeName="opacity" attributeType="XML"'+
                'values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite" /></rect></svg></div>';
                
                $.get('/api/ResetConfirmed/'+this.email, (response)=>{
                    if(response === 'Ok'){
                        if(this.$refs.desktop.clientWidth > 1) {
                             _('btn').innerHTML = "Continue"
                            buss.$emit('result','');
                        }else{
                            buss.$emit('MobileResult','Reset Password');
                             _('btn').innerHTML = "Continue"
                        }
                    }
                })

            }
        },

    }
</script>

<style>

</style>
