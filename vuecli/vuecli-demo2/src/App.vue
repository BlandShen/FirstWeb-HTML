<template>
  <div id="app">
      <div>
          <head1 :navTitle="propsTitle"></head1>
          <router-view @routerEmit='changeRouter'/>
      </div>
    <!--<div id="nav" v-bind:class="$route.params.active">-->
        <!--<head1 :navTitle="propsTitle"></head1>-->
        <!--<div class="footer">-->
            <!--<div>-->
                <!--<router-link to="//电影/bg1">电影</router-link>-->
            <!--</div>-->
            <!--<div>-->
                <!--<router-link to="/music/音乐/bg2">音乐</router-link>-->
            <!--</div>-->
            <!--<div>-->
                <!--<router-link to="/book/书籍/bg3">书籍</router-link>-->
            <!--</div>-->
            <!--<div>-->
                <!--<router-link to="/picture/图片/bg4">图片</router-link>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
    <!--<router-view/>-->
  </div>
</template>
<script>
    import head1 from "./components/Header.vue"
    export default {
        data(){
            return{
                propsTitle:"music"
            }
        },
        components:{
            head1
        },
        methods:{
            changeRouter(title){
                this.propsTitle=title
            }
        }

    }
</script>
<style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 1rem;
    }
    .container{
        margin: 1rem 0;
    }
    /*.footer,.header{*/
        /*width: 100%;*/
        /*color: #fff;*/
    /*}*/
    /*.header{*/
        /*height: 1rem;*/
        /*position: fixed;*/
        /*top: 0;*/
    /*}*/
    /*#nav .footer div{*/
        /*color: #ccc;*/
    /*}*/
    /*.router-link-active{*/
        /*color: #fff;*/
    /*}*/
    /*.bg1 .footer,.bg1 .header{*/
        /*background-color: rgb(33,150,243);*/
    /*}*/
    /*.bg2 .footer,.bg2 .header{*/
        /*background-color: rgb(0,150,136);*/
    /*}*/
    /*.bg3 .footer,.bg3 .header{*/
        /*background-color: rgb(121,85,72);*/
    /*}*/
    /*.bg4 .footer,.bg4 .header{*/
        /*background-color: rgb(63,81,181);*/
    /*}*/
    /*.footer{*/
        /*height: 1rem;*/
        /*position: fixed;*/
        /*bottom: 0;*/
        /*display: flex;*/
        /*flex-direction: row;*/
        /*line-height: 1rem;*/
    /*}*/
    /*.footer div{*/
        /*width: 25%;*/
    /*}*/

</style>
