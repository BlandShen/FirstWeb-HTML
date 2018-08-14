<template>
    <div class="container">
        <!--<v-touch @tap="swipetap" @swiperight="onSwipeRight" @swipeleft="onSwipeLeft">aaaaaaaa</v-touch>-->
        <ul>
            <li v-for="(items,index) in dataList" :key="index+'dl'" @click="jump(index)">
                <img :src="items.src" alt=""/>
            </li>
        </ul>

    </div>
</template>
<script>
    import Vue from 'vue'
    import {mapMutations} from 'vuex';
    var VueTouch = require('vue-touch');
    Vue.use(VueTouch,{name:'v-touch'});
    export default {
        created(){
            this.$emit('routerEmit', 'picture');
            this.getData()
        },
        data(){
            return{
                dataList:[]
            }
        },
        methods:{
            getData(){
                axios('./data/photodata.json')
                    .then((response)=>{
                        this.dataList = response.data.photoData;
                    })
                    .catch((error)=>{
                        console.log(error);
                    })
            },
            jump(num){
                this.$store.commit('change',num)
                this.$router.push({name:'picturedetail'});
            },
            ...mapMutations(['change']),

            // onSwipeLeft(){
            //     console.log("left");
            // },
            // onSwipeRight(){
            //     console.log("right");
            // },
            // swipetap(){
            //     console.log("tap");
            //
            // }
        }
    }
</script>
<style scoped>
    ul li{
        float: left;
        width:50%;
        height: 100px;
    }
    img{
        width: 100%;
        height: 100%;
    }
    *{
        margin:0;
        padding:0;
    }
</style>