export const  funcMixins = {


    methods: {
        WidowSize() {
            if (this.$refs.desktop.clientWidth > 1 && this.responsive !== 'desktop') {
                this.responsive = "desktop"
                $.get('/api/setResultSession/6',()=>{

                })
            }

            if (this.$refs.mobile.clientWidth > 1 && this.responsive !== 'mobile') {
                this.responsive = "mobile"
                $.get('/api/setResultSession/5',()=>{

                })
            }
        }
    },

    mounted(){
        this.WidowSize();
        window.addEventListener('resize', this.WidowSize)
    }





}