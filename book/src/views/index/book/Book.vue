<template>
  <div class="m-book">
    <div v-if="mybook.length > 0" class="m-book1">
      <div class="m-book-head">
        <p>
          你正在阅读<b>{{ mybook.length }}</b
          >本书
        </p>
        <div class="m-book-right">
          <span v-show="flag" @click="handelCancel">取消</span>
          <span v-if="flag" @click="handelAll">删除</span>
          <span v-else @click="handelEdit" :className="flag?'':'active'">编辑</span>
        </div>
      </div>
      <div class="m-book-item">
        <dl v-for="(item, index) in mybook" :key="item.bookId">
          <dt>
            <img :src="item.cover" alt="" />
          </dt>
          <dd>
            <h3>{{ item.title }}</h3>
            <p>
              <span @click="handelSub(index)">删除</span>
            </p>
          </dd>
        </dl>
      </div>
    </div>
    <div v-else>
      书包内暂无东西
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return {
      flag:false
    }
  },

  computed: {
    mybook() {
      return this.$store.state.mybook;
    }
  },
  mounted() {
    this.$store.dispatch("getBook");
  },
  methods:{
      handelSub(index){
          let mybook =this.$store.state.mybook
          mybook.splice(index,1)
          
      },
      handelEdit(){
        this.flag=true
      },
      handelCancel(){
        this.flag=false
      },
      handelAll(){
          this.$store.commit({type:'setState',key:'mybook',value:[]})
      }
  },
  updated() {
      axios({
          url:"/api/update",
          data:{
              myBokNew:this.mybook
          },
          method:'post'
      }).then(res=>{
          
      })
  },
};
</script>

<style></style>
