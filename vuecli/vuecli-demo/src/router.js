import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Connect from './views/Connect.vue'
import ConnectCom1 from '@/components/ConnectCom1.vue'
import ConnectCom2 from '@/components/ConnectCom2.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      },
      {
          path: '/connect',
          name: 'connect',
          component: Connect,
          children:[
              {
                  path: 'test1',
                  name: 'test1',
                  component: ConnectCom1
              },
              {
                  path: 'test2/:name/:age',
                  name: 'test2',
                  component: ConnectCom2
              },
              {
                  path:'backtest2/:name/:age',
                  redirect: 'test2/:name/:age'
              }
          ]
      },
      {
          path: '/backhome',
          // name: 'backhome',
          redirect:"/"
      },
      {
          path:'/aliashome',
          component:Home,
          alias:"/homealias"
      }
  ]
})
