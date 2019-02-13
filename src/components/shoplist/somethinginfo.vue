<template>
  <div class="container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <lunbo :url="listid.img" :isfull="false"></lunbo>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{listid.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{listid.market_price}}</del>&nbsp;&nbsp;&nbsp;销售价：
            <span style="color:red">￥{{listid.sell_price}}</span>
          </p>
          <p class="buy">
            <span class="number">购买数量:</span>
            <buynumber @getcount="getnumbox" :max="listid.kucun"></buynumber>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addshop">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{listid.huohao}}</p>
          <p>库存情况: &nbsp;{{listid.kucun}}</p>
          <p>上架时间: &nbsp;{{listid.add_time}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="Godesc(id)">商品介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="Gocomment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import buynumber from "../subcomponent/buynumber.vue";
import swiper from "../subcomponent/swiper.vue";
export default {
  data() {
    return {
      listid: [],
      list: [],
      id: this.$route.params.id,
      count: 1
    };
  },
  created() {
    this.getlunbo();
  },
  components: {
    lunbo: swiper,
    buynumber
  },
  methods: {
    getlunbo() {
      this.$http.get("/src/data/goods/phonelist2.json").then(result => {
        this.list = result.body.message;
        this.listid = this.list[this.id];
      });
    },
    Godesc(id) {
      this.$router.push({ path: "/home/godesc/" + id });
    },
    Gocomment(id) {
      this.$router.push({ path: "/home/gocomment/" + id });
    },
    addshop() {
      Toast({
        message: "加入购物车成功",
        duration: 1000
      });
      var somethinginfo = {
        id: this.id,
        price: this.listid.sell_price,
        count: this.count,
        selected: false
      };
      this.$store.commit('addTocar',somethinginfo)
    },
    getnumbox(count) {
      this.count = count;
      // console.log("父组件的值" + this.count);
    }
  }
};
</script>
<style scoped>
.container {
  background: #eee;
  position: relative;
  overflow: hidden;
}
.buy {
  display: flex;
  flex-direction: row;
}
.mui-card-footer {
  display: block;
}
.mui-card-footer button {
  margin: 15px 0 15px;
}
.number {
  line-height: 39px;
  margin-right: 8px;
}
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: red;
  position: absolute;
  z-index: 999;
  left: 152px;
  top: 410px;
}
</style>
