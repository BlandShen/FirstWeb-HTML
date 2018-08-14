<template>
    <div class="container">
        <v-touch @tap="swipetap" @swiperight="onSwipeRight" @swipeleft="onSwipeLeft" class="content" :style="styleobj"></v-touch>
    </div>
</template>
<script>
    import Vue from 'vue'
    import {mapGetters,mapMutations} from 'vuex';
    var VueTouch = require('vue-touch');
    Vue.use(VueTouch,{name:'v-touch'});
    export default {
        created(){

            this.$emit('routerEmit','picture');
            // this.imgid = this.$store.commit('getIndex');
            // console.log(this.$store.state.sindex);
        },
        data(){
            return{
                imgid:this.$store.state.sindex+1,
            }
        },
        methods:{
            onSwipeLeft(){
                this.imgid++;
                if(this.imgid == 8){
                    this.imgid = 1;
                }
            },
            onSwipeRight(){
                this.imgid--;
                if(this.imgid ==0){
                    this.imgid = 7;
                }
            },
            swipetap(){
                this.$router.go(-1);
            },
            ...mapMutations(['getIndex'])
        },
        computed:{
            // ...mapGetters(['getIndex']),
            styleobj(){
                console.log(this.imgid);
                return {background:`#000 url('./img/${this.imgid}.jpg') no-repeat center/contain`}
            }
        }
    }
</script>
<style scoped>
    .content{

        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: -1;
    }
</style>