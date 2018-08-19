<template>
    <div class="container">
        <div class="head">
            <div class="left">
                <h3>{{detailData.title}}</h3>
                <span>{{detailData.original_title}}</span>
                <span><ul class="clearfix"><li v-for="(item,index) in detailData.genres" :key="index+'gs'">{{item}} &nbsp</li></ul></span>
                <span><ul class="clearfix"><li v-for="(item,index) in detailData.countries" :key="index+'cs'">{{item}} &nbsp</li></ul></span>
                <span>{{detailData.year}}年在中国大陆上映</span>
            </div>
            <div class="right">
                <img :src="detailData.images.small"/>
            </div>
        </div>
        <div class="content">
            <div class="grade">
                <div>{{detailData.rating.average}}</div>
                <div>
                    <span>{{detailData.collect_count}}人已看&nbsp&nbsp</span>
                    <span>{{detailData.comments_count}}人评论</span>
                </div>
                <div>
                    <span>{{detailData.wish_count}}人想看</span>
                </div>
            </div>
            <p>{{detailData.summary}}</p>
        </div>
        <div class="acters">
            <div v-for="(items,index) in detailData.directors" :key="index+'ds'">
                <img :src="items.avatars.large"/>
                <span>{{items.name}}</span>
                <span>&nbsp导演</span>
            </div>
            <div v-for="(items,index) in detailData.casts" :key="index+'cas'">
                <img :src="items.avatars.large"/>
                <span>{{items.name}}</span>
                <span>&nbsp主演</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        created() {
            this.getData();
        },
        data(){
            return{
                detailData:{}
            }
        },
        methods:{
            getData(){
                axios.get(API_PROXY+'https://api.douban.com/v2/movie/subject/'+this.$route.params.movieId).then((res)=>{
                    this.detailData = res.data;
                }).catch((res)=>{
                    console.log("error!")
                })
            }
        }
    }
</script>
<style scoped>
    .container{
        background-color: rgba(0,0,0,.08);
    }
    .clearfix:after{
        content:"";
        display: block;

    }
    .head{
        display: flex;
        flex-direction: row;
        background-color: mediumpurple;
    }
    .left{
        flex-grow: 2;
    }
    .left li{
        margin-left: .1rem;
        float: left;
    }
    .right{
        flex-grow: 1;
    }
    .right img{
        height: 179px;
        /*width:90%;*/
    }
    .content{
        background-color: #fff;
    }
    .grade{
        display: flex;
        flex-direction: row;
        margin: .2rem .1rem 0 .1rem;
    }
    .grade div{
        flex-grow: 1;
    }
    .content p{
        margin: .2rem .2rem;
    }
    .acters{
        margin: .2rem 0;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .acters div{
        width: 57px;
        margin:.1rem;
    }
    .acters div img{
        height: 80px;
        /*width: 90%;*/
    }
</style>