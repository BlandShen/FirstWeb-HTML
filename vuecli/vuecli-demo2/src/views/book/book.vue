<template>
    <div class="container">
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
    </div>
</template>
<script>
    require('vue-swipe/dist/vue-swipe.css');
    import {Swipe ,SwipeItem } from 'vue-swipe';
    export default {
        created() {
            this.$emit("routerEmit", "book");
            activeNav = "book";
            // this.getData();
        },
        // data(){
        //     return {
        //         startIndex:0,
        //         dataList:[]
        //     }
        // },
        methods:{
            // getData(){
            //     axios.get(API_PROXY+'https://api.douban.com/v2/book'+'?start='+this.startIndex+'&count=10')
            //         .then((res)=>{
            //             // this.dataList = res.data.
            //             console.log(res);
            //         })
            //         .catch((error)=>{
            //             console.log(error);
            //         })
            // }
        },
        components:{
            swipe: Swipe,
            'swipe-item' :SwipeItem,
        },
    }
</script>

<style scoped>
/*@import "";*/
.my-swipe {
    height: 150px;
    color: #fff;
    font-size: 30px;
    text-align: center;
}

.slide1 {
    background: url("../../assets/img/1.jpg") no-repeat center/cover;
    color: #fff;
}

.slide2 {
    background: url("../../assets/img/2.jpeg") no-repeat center/cover;
    color: #000;
}

.slide3 {
    background: url("../../assets/img/3.jpeg") no-repeat center/cover;
    color: #fff;
}
</style>