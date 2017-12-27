import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/Home'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home-page',
    component: Home
  },
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  }
  ]
})
