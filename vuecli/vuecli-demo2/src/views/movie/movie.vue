<template>
    <div class="container">
        <ul>

            <li v-on:click="goDetail(items.id)" v-for="(items,index) in dataList" :key="index+'dl'" class="movieitems">

                <!--<router-link to="'//电影/bg1/'+items.id">-->
                <img :src="items.images.small"/>
                <div class="detail">
                    <h3 class="title">{{items.title}}</h3>
                    <span><ul class="clearfix"><li>主演：</li><li v-for="(item,index) in items.casts" :key="index+'ic'">{{item.name}} &nbsp</li></ul></span>
                    <span><ul class="clearfix"><li>导演：</li><li v-for="(item,index) in items.directors" :key="index+'id'">{{item.name}} &nbsp</li></ul></span>
                    <span><ul class="clearfix"><li>分类：</li><li v-for="(item,index) in items.genres" :key="index+'ig'">{{item}} &nbsp</li></ul></span>
                    <div>
                        <ul>
                            <li>{{items.collect_count}}人已观看</li><br>
                            <li>评分：{{items.rating.average}}</li>
                        </ul>
                    </div>
                </div>
                <!--</router-link>-->
            </li>
        </ul>
        <div class="loading" v-show="!isFinish">
            <div class="load-content">
                <img src="@/assets/img/loading.gif" alt=""/>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        created(){
            this.$emit('routerEmit', 'movie');
            activeNav = 'movie';
            this.getData()
        },
        data(){
          return{
              dataList:[],
              isFinish:true,
              startIndex:0
          }
        },
        methods:{
            getData(){
                this.isFinish = false;
                axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters'+'?start='+this.startIndex+'&count=10')
                // axios.get('https://api.myjson.com/bins/nsb9g'+'?start='+this.startIndex+'&count=10')
                .then((response) =>{
                    this.dataList =this.dataList.concat(response.data.subjects);
                    this.isFinish = true;
                    // console.log(this.dataList);
                })
                .catch((error)=> {
                    console.log(error);
                });
            },
            goDetail(id){
                this.$router.push({name:'moviedetail',params:{movieId:id}})
            }
        },
        mounted(){
            window.onscroll = ()=> {
                let cHeight = document.documentElement.clientHeight;//可视高度
                let sHeight = document.documentElement.scrollHeight;//滚动高度
                let sTop = document.documentElement.scrollTop;//可滚动高度
                if(sTop + cHeight == sHeight){
                    if(this.isFinish){
                        this.startIndex+=10;
                        this.getData()
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .container li{
        /*border-bottom: 1px solid black;*/
        display: flex;
        flex-direction: row;
    }
    .container li img{
        width:40%;
        height: 179px;
        margin-left: .2rem;
    }
    .container .detail{
        /*width: 50%;*/
    }
    .clearfix:after{
        content:"";
        clear: both;
        display: block;
    }
    .detail li{
        float:left;
    }
    .movieitems{
        padding: .3rem 0;
        border-bottom: 1px solid rgba(0,0,0,.3);
    }
    .loading{
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color: rgba(0,0,0,.5);

    }
    .load-content{
        padding: 1rem;
        border-radius: .1rem;
        background-color: rgba(255,255,255,.5);
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
</style>