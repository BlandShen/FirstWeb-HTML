import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/movie/movie.vue'
import Music from './views/music/music.vue'
import Book from './views/book/book.vue'
import Picture from './views/picture/picture.vue'
// import Header from '@/components/Header.vue'
import Musicdetail from './views/music/musicDetail'
import Moviedetail from './views/movie/movieDetail'
import Picturedetail from './views/picture/pictureDetail'
Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          name: 'movie',
          component: Movie,
      },
      {
          path: '/music',
          name: 'music',
          component: Music,
      },
      {
          path: '/book',
          name: 'book',
          component: Book,
      },
      {
          path: '/picture',
          name: 'picture',
          component: Picture,
      },
      {
          path: '/musicdetail',
          name: 'musicdetail',
          component: Musicdetail
      },
      {
          path: '/movieDetail',
          name: 'moviedetail',
          component: Moviedetail
      },
      {
          path: '/pictureDetail',
          name: 'picturedetail',
          component: Picturedetail
      }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
