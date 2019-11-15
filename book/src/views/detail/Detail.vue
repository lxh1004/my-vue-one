<template>
    <div class="m-detail">
       <div class="m-detail-item">
             <h2>{{detail.title}}</h2>
             <div class="m-detail-center">
               <dl>
                   <dt>
                       <img v-lazy="detail.cover" alt="">
                   </dt>
                   <dd>
                       <p>作者:{{detail.author}}</p>
                       <p>来源:shzww.com</p>
                       <p>作者:<span v-for="(v,i) in detail.tagList" :key="i">{{v}}</span></p>
                       <p>{{detail.status}}</p>
                   </dd>
               </dl>
             </div>
             <div class="m-detail-bottom">
                 <span v-if="detail.is_in">已加入书包</span>
                 <span v-else @click="handelAdd()">加入书包</span>
                 <span>开始阅读</span>
                 <span>离线下载</span>
             </div>
       </div>
    </div>
</template>

<script>
import  axios from 'axios'
import { constants } from 'fs';
export default {
   data(){
       return {
          detail:{}
       }
   },
   computed: {
       mybook(){
           return this.$store.state.mybook
       }
   },
   methods:{
       handelAdd(){    
         let book =this.detail
             book.count =1
             //向仓库存
              this.$store.commit({type:'setState',key:'mybook',value:book})
             //    //向后端存
            axios({
                url:'/api/add',
                data:{
                    mybook:book
                },
                method: "post"
            }).then(res=>{
                    book.is_in=true
            })

       }
   },
   mounted() {
     let {id,index} =this.$route.query
      axios({
          url:"/api/detail",
          params:{
              id,
              index
          }
      }).then(res=>{
          if(res.data.code===200){
              this.detail=res.data.data
          }
      })
   },
 
}
</script>

<style>

</style>
