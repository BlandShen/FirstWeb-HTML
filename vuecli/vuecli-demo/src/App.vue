<template>
  <div id="app">
      <div>
          <button v-on:click="home">首页</button>
          <button v-on:click="forward">向前</button>
          <button v-on:click="back">后退</button>
      </div>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/connect">Connect</router-link> |
        <router-link to="/backhome">Backhome</router-link> |
        <router-link to="/aliashome"> Aliashome</router-link>
    </div>
      <div class="router-trans">
          <transition name="fade">
              <router-view/>
          </transition>

      </div>
  </div>
</template>
<script>
    export default {
        methods:{
            home(){
                this.$router.push("/");
            },
            forward(){
                this.$router.go(1);
            },
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style>
    body{
        overflow-x: hidden;
    }
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
    .router-trans{
        position: relative;
    }
    .fade-enter{
        width: 100%;
        transform: translateX(-100%);
    }
    .fade-enter-active{
        transition:all 1s ease;
    }
    .fade-enter-to{
        position: absolute;
        top:0;
        width:100%;
        transform: translateX(0);
    }
    .fade-leave{

        width: 100%;
        transform: translateX(0);
    }
    .fade-leave-active{
        transition: all 1s ease;
    }
    .fade-leave-to{
        position: absolute;
        top:0;
        width: 100%;
        transform: translateX(100%);
    }

</style>
