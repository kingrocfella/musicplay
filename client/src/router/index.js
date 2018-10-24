import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/register'
import login from '@/components/login'
import songs from '@/components/songs'
import createsong from '@/components/createsong'
import viewSong from '@/components/viewsong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      component: register
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/songs',
      component: songs
    },
    {
      path: '/songs/create',
      component: createsong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: viewSong
    }
  ]
})
