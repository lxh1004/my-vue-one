<template>
    <div class="m-sift">
       <div class="m-sift-item" v-for="(item,index) in sortList" :key="index">
            <h4>{{item.title}}</h4>
            <div class="m-sift-item-list" v-for="(v,i) in item.novelList" :key="i">
              <dl>
                  <dt>
                    <img v-lazy="v.cover" alt="" @click="handel(v.bookId,index)">
                  </dt>
                  <dd>
                      <h3>{{v.title}}</h3>
                      <p><span v-for="(ite,ind) in v.tagList" :key="ind">{{ite}} <i>|</i></span></p>
                      <p>{{v.description}}</p>
                  </dd>
              </dl>
            </div>
            <div class="m-sift-bottom">
               <p>{{item.bottom.title}}</p>
            </div>
       </div>


    </div>
</template>

<script>
export default {
  mounted() {
      this.$store.dispatch('getSort')
  },
  computed: {
    sortList(){
      return this.$store.state.sortList
    }
  },
  methods:{
    handel(id,index){
     this.$router.push({
       path:"/detail",
       query:{
         id,
         index
       }
     })
    }
  }
}
</script>

<style>

</style>
