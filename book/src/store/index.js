import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from "axios"
export default new Vuex.Store({
  state: {
    list:[],
    sortList:[],
    mybook:[]

  },
  mutations: {
      setState(state,payload){
         state[payload.key] =payload.value
      }
  },
  actions: {
    //获取精选
    getList({commit}){
      axios.get("/api/list").then(res=>{
         if(res.data.code === 200){
          commit({type:'setState',key:'list',value:res.data.data.data})
         }
      })
    },
   //获取排行
    getSort({commit}){
      axios.get("/api/sort").then(res=>{
        commit({type:'setState',key:'sortList',value:res.data.data.rankData})
      })
    },
    //获取书包的数据
    getBook({commit}){
      axios.get("/api/book").then(res=>{

        commit({type:'setState',key:'mybook',value:res.data.data})
    })
    }
  },
  modules: {
  }
})
