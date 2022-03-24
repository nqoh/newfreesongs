<template>
    <div class="container-fluid">
        <p style="display:none" v-show="false">
       pandamp3,mp3 download panda, no pain no again mp3, download kiss me song, dangote lyrics, 
  mavinsrecord,instrumental fx,groovemp3,amapiano mp3 download,dj zinhle umlilo remix,manqonqo ngibambe,manqonqo new songs,
  bekezela mp3 download,amapiano mp3 download,
ganda ganda remix mp3 download,
mr style makhwapheni fakaza,
dj lusiman wamnandi uqoh mp3 download,
dj ace nothing but the beat download,
mr style makhwapheni,
eyadini free mp3 download,
dj jerry sa songs download
walk away download mp3,
eyadini music video download,
nokulunga gods army mp3,
celebrate mp3,
nginike inhliziyo yakho mp3 download,
big shaq man's not hot mp3 free download,
king of my heart mp3 download,
inhliziyo yami ibuhlungu house song,
odwa songs,
ubusuku nemini mp3 download fakaza,
chustar songs,
one in a million mp3 download,
pretty hurt mp3 download,
50 cent mp3 downloads
eminem no apologies mp3 download,
45 slow jam house mp3 download,
ngeke balunge lyrics,
empire of the sun walking on a dream lyrics,
khetha omthandayo,
zothiemind,
oh my gosh mp3 download,
majotha new album 2019,
zulu poems,
j cole who dat lyrics,
download ibhanoyi,
broken promises 1 download,
download sarafina songs,
think twice mp3,
maumela mahuwa lufuno mp3 download,
magic download mp3,
uthando lwakho mp3,
maskandi ofundile mp3 download,
maraza gwan,
diamond by rihanna mp3 download audio,
ngelo v songs mp3 download,
skhanda beats download,
download manqonqo,
mp3 beat,
download qgom,
gugulethu lyrics,
manqonqo imali,
majotha new songs 2019 download,
maskandi 2019 songs download,
mazwale new album 2019,
dason songs,
umlilo dj zinhle mp3 download,
deborah mp3,
vulindlela lyrics,
ibambe song download,
dj sanco koko,
amantombazane download,
i don't care mp3,
gugulethu download,
mazwale all songs,
umlilo by dj zinhle mp3 download,
thatha inhliziyo yami mp3 download,
kwaze kwamnandi entathakusa mp3 download,
dj ace sa 2019,
coldplay mp3,
amantombazane mp3 download,
mayorkun che che,
ngibambe ngesandla lyrics,
think twice song mp3 download,
no stress mp3 download,
nasty c ft runtown said mp3,
matorokisi remix,
dj ps,
dj ace sa,
maraza gwan download,
vulindlela mp3,
dj ps mp3 download,
meskay songs download,
dangote lyrics,
twerking songs mp3 download,
umlilo download,
dza tshigubu mp3 download,
lady zamar collide mp3 download,
aka the world is yours mp3 download skull,
gqom download,
gucci gang song free download,
king monada mix 2018 mp3 download,
dj ace sa slow jam datafilehost,
kasi mp3 upload,
zabalaza lyrics,
mbzet instrumentals,
ngelo v new album 2017 download,
penny on mars nobody's perfect mp3 download,
dj ace sa slow jams datafilehost,
majotha 2019,
zulu poets,
shine bright like a diamond english song download,
amadlozi ayangijulukisa download mp3,
secret love mp3 download,
wena ulilanga mp3 download,
akiliz ammara download mp3,
manqonqo pictures,
maskandi songs download,
dj ace slow jam mix download,
losing control song download,
so amazing mp3 download,
pro tee jerusalema remix,
ngelo v albums,
sbucardo woza mp3 download,
uthando mp3 download,
african trap beats download,
download omunye,
king monada mp3,
ganda ganda lyrics,
lean on me mp3 download,
mr style songs,
kasimp3 upload,
dj ace 2019,
shaka zulu song mp3 download,
macala lyrics,
ibhanoyi lyrics,
hotmp3 download,
naijapals mp3 free download,
izangoma songs download,
download lira,
attention mp3 download,
majotha 2018 download,
burna boy dangote mp3 download,
prince kaybee gugulethu mp3 download,
inzima lendlela book download,
kizz daniel ft davido one ticket mp3 download,
dubai dubai mp3,
inkanyamba songs,
joy in my heart,
sarafina songs mp3,
kasi mp3 2018,
download mbzet instrumental beat,
diamond platnumz african beauty download,
yizo yizo songs download mp3,
big shaq songs free download,
        </p>
        <div class="row" >
      <!--      <span>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</span>-->
            <div class="d-none d-xl-block  d-lg-block  col-md-12" ref="desktop" style="padding:5px 5px 0px 5px;">
                <app-desktop></app-desktop>
            </div>

            <div class="d-none d-xl-none d-lg-none d-md-none d-md-block col-sm-12" style="padding:5px 5px 0px 5px;" ref="tablet">
                <app-tablet></app-tablet>
            </div>

            <div  class="d-none d-xl-none d-lg-none d-md-none d-block col-sm-12" style="padding:5px 5px 0px 5px;"  ref="mobile" >
                <app-mobile></app-mobile>
            </div>
        </div>

    </div>
</template>

<script>
    import desktop from'./desktop/trending.vue'
    import tablet  from './website/home/tablet_trending.vue'
    import mobile  from './website/home/mobile_trending.vue'
    import {buss}  from '../app'

    export default {
       components:{
         appTablet:tablet,
         appMobile:mobile,
         appDesktop:desktop,
       },
        data () {
            return {responsive:''}
        },

        methods:{
           WidowSize() {
               if(this.$refs.desktop.clientWidth > 1 && this.responsive !=='desktop'){
                   buss.$emit('Desktop','Hello Desktop')
                   this.responsive="desktop"
               }
               if(this.$refs.tablet.clientWidth > 1 && this.responsive !=='tablet'){
                   buss.$emit('Tablet','Hello Tablet')
                   this.responsive="tablet"
               }
               if(this.$refs.mobile.clientWidth > 1 && this.responsive !=='mobile'){
                   buss.$emit('Mobile','Hello Mobile')
                   this.responsive="mobile"
               }
            }
        },

        mounted(){
            this.WidowSize();
            window.addEventListener('resize',this.WidowSize)
        }

    }
</script>

<style>

</style>
