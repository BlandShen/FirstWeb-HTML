<template>
    <div class="container">
        <aplayer v-if="isIf" controls preload="metadata"
                 :music="dataList[0]"
                 :list="dataList"
                 :showLrc="true"
        />
    </div>
</template>
<script>
    import Aplayer from 'vue-aplayer'
    import axios from 'axios'
    export default {
        created(){
          this.getData()
        },
        components: {
            Aplayer
        },
        data(){
          return {
              isIf:false,
              dataList:[]
          }
        },
        methods:{
            getData(){
                axios.get("./data/musicdata.json")
                    .then((response)=>{
                        this.dataList = response.data.musicData;

                        for(var i=0;i<response.data.musicData.length;i++){
                            this.dataList[i].lrc = location.origin +"/"+ this.dataList[i].lrc;
                        }
                        this.isIf = true;
                    })
                    .catch((error)=>{
                        console.log("error");
                    })
            }
        }
        // props:{
        //     // music:this.dataList[0],
        //     // list:this.dataList,
        //     // theme:"",
        //     showLrc: true,
        //     shuffle: true,
        // }



    }
</script>
<style scoped>
</style>