import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sindex:0
    },
    mutations: {
        change(state,num){
            state.sindex = num;
            console.log(state.sindex+1);
        },
        // getIndex(state){
        //     return state.sindex;
        // }
    }
    ,
    actions: {

    },
    getters:{
        // getIndex(state){
        //     return state.sindex;
        // }
    }

})
