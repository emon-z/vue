<template>
  <div>
    <!-- 轮播图 -->
    <swiper :url="url" :isfull="true"></swiper>
    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/news">
          <img src="http://fafuzhu.com/images/m-nav2.png" alt>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="http://fafuzhu.com/images/m-nav3.png" alt>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/something">
            <img src="http://fafuzhu.com/images/m-nav4.png" alt="">          
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
            <img src="http://fafuzhu.com/images/m-nav1.png" alt="">          
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
            <img src="http://fafuzhu.com/images/m-nav4.png" alt="">          
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
            <img src="http://fafuzhu.com/images/m-nav5.png" alt="">          
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import swiper from '../subcomponent/swiper.vue'
export default {
  data() {
    return {
      url: []
    };
  },
  created() {
    this.getlunbotu();
  },
  components:{
    swiper
  },
  methods: {
    getlunbotu() {
      this.$http.get("/src/data/data.json").then(result => {
        if (result.body.status == 200) {
          this.url = result.body.images;
        } else {
          alert("获取信息失败");
        }
      });
    }
  }
};
</script>

<style>
.mui-grid-view.mui-grid-9 {
  background: #ffffff !important;
  border: none !important;
}
.mui-grid-view.mui-grid-9 img {
  width: 40px;
  height:40px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0 !important;
}
.mui-media-body{
    font-size: 13px !important;
}
</style>
