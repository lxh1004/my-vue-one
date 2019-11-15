<template>
    <div class="m-home">
         <header>
             <router-link v-for="(item,index) in navlist" :key="index" :to="item.path">{{item.title}}</router-link>
         </header>
         <router-view class="m-home-main"></router-view>
    </div>
</template>

<script>
export default {
   data(){
       return {
           navlist:[
               {
                   path:"/index/book",
                   title:"书包"
               },
               {
                   path:"/index/sift",
                   title:"精选"
               },
               {
                   path:"/index/sort",
                   title:"排行"
               },
               {
                   path:"/index/type",
                   title:"分类"
               }
           ]
       }
   }
}
</script>

<style>

</style>
