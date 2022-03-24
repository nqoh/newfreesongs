<template>
    <!-- @detected-condition fires when the connectivity status of the device changes -->
    <offline @detected-condition="handleConnectivityChange"></offline>
</template>

<script>
    import offline from 'v-offline';

    export default {
        components: {
            offline
        },

        methods: {
            handleConnectivityChange(status) {
               // console.log(status);
                if(status ===  true){
                    alert('you are onlineeee')
                }

                if(status === false){
                    alert("your are offlineds")
                }
            }
        }
    }
</script>
