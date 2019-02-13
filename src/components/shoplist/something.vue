<template>
  <div class="shoplist-container">
    <div class="shoplist-item" v-for="item in list" :key="item.id" @click="transto(item.id)">
      <img
        :src="item.img_url"
        alt
        srcset
      >
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="cell">
          <span>热卖中</span>
          <span>剩{{item.kucun}}件</span>
        </p>
      </div>
    </div>
    <mt-button v-if="flag" type="danger" size="normal" plain class="something_bth" @click="more">加载更多</mt-button>
    <mt-badge v-if="!flag" size="small" color="#ccc">已经到底啦!</mt-badge>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:[],
      flag:true
    }
  },
  created() {
    this.getphonelist()
  },
  methods: {
    getphonelist(){
      this.$http.get('/src/data/goods/phonelist1.json').then(result=>{
        this.list=result.body.message
      })
    },
  more(){
     this.$http.get('/src/data/goods/phonelist2.json').then(result=>{
        this.list=result.body.message
        this.flag=!this.flag
     })
},
transto(id){
    this.$router.push({path:'/home/somethinginfo/'+id})
}
}
}
</script>
<style scoped>
.shoplist-container {
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.shoplist-container .shoplist-item {
  border: 1px solid #cccccc;
  display: flex;
  min-height: 293px;
  flex-direction: column;
  justify-content: space-between;
  padding: 2px;
  width: 48%;
  margin: 5px 0;
}
.shoplist-item img {
  width: 100%;
  box-shadow: 0 0 10px #cccccc;
}
.title {
  padding: 0 5px;
  text-indent: 1em;
  font-size: 14px;
}
.info {
  background: #eee;
}
.info p {
  margin: 0;
  padding: 5px;
}
.price .now {
  margin-left: 10px;
  color: red;
}
.price .old {
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 20px;
}
.cell {
  display: flex;
  justify-content: space-around;
}
.mint-button--danger.is-plain {
  width: 150px !important;
  margin: 10px auto;
}
.mint-badge.is-size-small{
  margin: 10px auto;
}
</style>
