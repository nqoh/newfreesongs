<template>
       <div><h6>No uploads, under maintenance. apologies</h6></div>
  <!-- <div>
        <h6 v-if=" account_type == 'artist' " align="center">Grow your fanbase,
            <a href="/artist/promote">Promote</a>
            your music
        </h6>

        <h6 v-if=" account_type ==  'fan' " align="center">Make money with Bogiyo,
            <a href="/fan/promote">Start Now</a>
        </h6>

        <h6 v-if=" account_type ==  '' " align="center">Connect with music lovers,
           <a href="/signup">Signup Now</a>
        </h6>
    </div> --->
</template>

<script>
    export default {
        props:['account_type'],
        data () {
            return {}
        },

    }
</script>

<style scoped>
    h6 {
        color: #954b4b;
        font-weight: bold;
    }

    h6 a {
        text-decoration: underline;
    }
</style>
