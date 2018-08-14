<template>
    <div class="container">
            <ul>
                <li v-for="(items,index) in dataList" :key="index+'dl'" @click="goDetail">
                    <img :src="items.bg"/>
                </li>
            </ul>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        created(){
            this.$emit('routerEmit', 'music');
            this.getData();
        },
        data(){
            return{
                dataList:[]
            }
        },
        methods:{
            getData(){
                axios.get('./data/musiclist.json')
                    .then((response)=>{
                        // console.log(response.data);
                        this.dataList = response.data.albums;
                    })
                    .catch((error)=>{
                        console.log("error");
                    })
            },
            goDetail(){
                this.$router.push('/musicdetail');
            }
        }
    }
</script>

<style scoped>
    .container li{
        display: inline-block;
        width: 50%;
    }
    .container li img{
        width: 100%;
    }
</style>