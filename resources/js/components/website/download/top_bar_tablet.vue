<template>
       <div><h3>No uploads, under maintenance. apologies</h3></div>
  <!--  <div>
        <h3 v-if=" account_type == 'artist' " align="center">Grow your fanbase,
            <a href="/artist/promote">Promote</a>
            your music
        </h3>

        <h3 v-if=" account_type ==  'fan' " align="center">Make money with Bogiyo,
            <a href="/fan/promote">Start Now </a>
        </h3>

        <h3 v-if=" account_type ==  '' " align="center">Connect with music lovers,
           <a  href="/fan/promote" style="cursor: pointer;text-decoration: underline">Signup Now </a>
        </h3>
    </div> -->
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
    h3 {
        color: #954b4b;
        font-weight: bold;
    }

    h3 a {
        text-decoration: underline;
    }

    h1 a {
        text-decoration: underline;
        font-style: italic;
        color: #954b4b;
    }

</style>
