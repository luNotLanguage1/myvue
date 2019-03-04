import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'index',
          component: function () { 
            return import('@src/views/index/index.vue')
          },
          children:[
            {
              path:'/',
              component:function(){
                return import('@src/views/index/ad.vue')
              }
            }
            
          ]
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: function () { 
        return import('@src/views/About.vue')
      }
    }
  ]
})
