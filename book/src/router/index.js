import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
   {
     path:"/",
     redirect:"/index"
   },
   {
     path:"/index",
     component:()=>import("../views/index/Index.vue"),
     redirect:"/index/sift",
     children:[
       {
         path:"/index/book",
         component:()=>import("../views/index/book/Book.vue")
       },
       {
        path:"/index/sift",
        component:()=>import("../views/index/sift/Sift.vue")
      },
      {
        path:"/index/sort",
        component:()=>import("../views/index/sort/Sort.vue")
      },
      {
        path:"/index/type",
        component:()=>import("../views/index/type/Type.vue")
      }
     ]
   },
   {
     path:"/detail",
     component:()=>import("../views/detail/Detail.vue")
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
