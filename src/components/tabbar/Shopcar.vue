<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img
              src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/763/23/3810/69901/5b997c0bE935c19c5/ce91ae1a89c113c7.jpg!q80.dpg.webp"
              alt
            >
            <div class="info">
              <h1>Apple iPhone XR (A2108) 64GB 黑色 移动联通电信4G手机 双卡双待</h1>
              <p>
                <span class="price">￥5600</span>
                <shopcarbuy></shopcarbuy>
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
       <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img
              src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/763/23/3810/69901/5b997c0bE935c19c5/ce91ae1a89c113c7.jpg!q80.dpg.webp"
              alt
            >
            <div class="info">
              <h1>Apple iPhone XR (A2108) 64GB 黑色 移动联通电信4G手机 双卡双待</h1>
              <p>
                <span class="price">￥5600</span>
                <shopcarbuy></shopcarbuy>
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner jiesuan">
            <div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品0件，总价0</p>
            </div>
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.shopcar-container {
  background: #eee;
  overflow: hidden;
}
.mui-card-content-inner h1 {
  font-size: 16px;
  margin-left: 5px;
}
.jiesuan{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.mui-card-content-inner img {
  width: 50px;
  height: 50px;
}
.mui-card-content-inner {
  display: flex;
  align-items: center;
}
.shopcar-container p {
  display: flex;
  vertical-align: middle;
}
.price {
  margin-right: 5px;
  color: red;
}
.shopcar-container a {
  margin-left: 5px;
}
</style>
<script>
import shopcarbuy from "../subcomponent/shopcarbuy.vue";
export default {
  components: {
    shopcarbuy
  },
  data() {
    return {
      list: []
    };
  },
 
  methods: {
   
  }
};
</script>

