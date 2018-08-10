<template>
  <div class="about">
      <h1>This is an about page</h1>
      <div>
          <h1>局部方法</h1>
          <button v-on:click="add(1)">加一</button>
          <button v-on:click="reduce">减一</button>
          {{num}}
      </div>
      <div>
          <h1>全局方法</h1>
          <button v-on:click="$store.commit('add',3)">加三</button>
          <button v-on:click="$store.commit('reduce')">减一</button>
          <button v-on:click="actionAdd">actions</button>
          {{count}}
      </div>
  </div>
</template>
<script>
    import {mapState ,mapMutations, mapGetters, mapActions} from 'vuex';
    // import state from '@/store'
    export default {
        data(){
            return{
                num:0
            }
        },
        // methods:{
        //     add(){
        //         this.num++;
        //     },
        //     reduce(){
        //         this.num--;
        //     }
        // },
        methods:{
            ...mapMutations(['add','reduce']),
            ...mapActions(['actionAdd'])
        },
        // computed:{
        //     sum(){
        //         return this.$store.state.count
        //     }
        // }
        // computed:mapState({
        //     sum1(state){
        //         return state.count;
        //     }
        // })
        computed:{
            ...mapState(['count']),
            ...mapGetters(['count'])
        }
        // beforeRouteEnter(to,from,next){
        //     console.log(to);
        //     console.log(from);
        //     next();
        // },
        // beforeRouteLeave(to,from,next){
        //     console.log(to);
        //     console.log(from);
        //     next();
        // }
    }
</script>