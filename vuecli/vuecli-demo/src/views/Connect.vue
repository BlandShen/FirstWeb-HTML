<template>
    <div>
        <h1>联系我们</h1>
        <router-link :to="{name:'test1',params:{name:'lisi',age:20}}">test1</router-link> |
        <router-link to="/connect/test2/zhangsan/30">test2</router-link> |
        <router-link to="/connect/backtest2/zhangsan/30">backtest2</router-link>
        <router-view></router-view>
    </div>

</template>

<script>




</script>

<style scoped>



</style>