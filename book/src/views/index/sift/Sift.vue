<template>
    <div class="m-sift">
        <div class='m-hot'>
          <div class="swiper-container">
             <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in All.imglist" :key="item.id">
                     <img :src="item.cover" />
                </div>
             </div>
          </div>
        </div>
        <div class="m-list">
          <span v-for="item in this.All.navigation" :key="item.id">{{item.title}}</span>
        </div>
        <div class="m-super">
             <h4>{{this.All. recommend.title}}</h4>
             <div class="m-super-item" v-for="item in this.All. recommend.novelList" :key="item.id">
                 <dl>
                     <dt>
                         <img v-lazy="item.cover" alt="">
                     </dt>
                     <dd>
                        <h3>{{item.title}}</h3>
                        <p>
                            <span v-for="(v,i) in item.tagList" :key="i">{{v}}|</span>
                        </p>
                     </dd>
                 </dl>
             </div>
        </div>
        <!-- 男生喜欢 -->
        <!-- <div class="m-man">
             <h4>男生爱看</h4>
             <div>
                 <span>都市</span>
                 <span>玄幻</span>
                 <span>精选</span>
                 <span>历史</span>
             </div>
        </div> -->
    </div>
</template>

<script>
import  axios from 'axios'
import  swiper from 'swiper'
import  'swiper/css/swiper.css'
export default {
   mounted() {
       this.$store.dispatch('getList')
   },
   updated() {
        new swiper(".swiper-container",{
           loop:true,
           autoplay:true
       })
   },
   computed: {
       All(){
           let list= this.$store.state.list
           let imglist =[],navigation=[],recommend={},tabRead=[],novelList={};
           list.forEach(item=>{
               if(item.type =='hotRead'){
                 imglist=item.novelList
               }else if(item.type=='navigation'){
                 navigation =item.novelList
               }else if(item.type=='recommend'){
                 recommend =item
               }else if(item.type=='tabRead'){
                   tabRead.push(item)
               }else if(item.type=='topicRead'){
                    novelList =item
               }
           })
           return {
               imglist,
               navigation,
               recommend,
               tabRead,
               novelList
           }
           
       }
   },
}
</script>

<style>

</style>
