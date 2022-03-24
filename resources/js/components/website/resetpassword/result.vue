<template>
    <div align="center" style="align-content: center">
        <span style="display: none" data-dismiss="modal"></span>
        <h2 title="center">Thanks! check your email for a link to reset your password</h2>
    </div>
</template>

<script>
    export default {

        data () {
            return {}
        },
        mounted(){
            setTimeout(function () {
                    $("[data-dismiss=modal]").trigger({ type: "click" });
                    $('#signup').removeClass('zoomOutUp')
                }
                ,2000)
        }
    }
</script>

<style scoped>
    div{
        width: 100%;
        align-content: center;
        margin: 0px auto;
    }
    h2{
        color:#954b4b;
        margin: 0px auto;
    }
</style>
