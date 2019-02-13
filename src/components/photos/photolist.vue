<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',item.id==0?'mui-active':'']"
            v-for="item in photolist"
            :key="item.id" @click="getphotoinfo(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <ul class="imglist">
      <li v-for="item in list" :key="item.url">
        <img v-lazy="item.url">
      </li>
    </ul>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  data() {
    return {
      photolist: [],
      list:[]//图片列表的数组
    };
  },
  created() {
    this.getphotolist()
    this.getphotoinfo(0)
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  methods: {
    getphotolist() {
      this.$http.get("/src/data/photo.json").then(result => {
        this.photolist = result.body.message;
      });
    },
    getphotoinfo(id){
      this.$http.get('/src/data/photos/photo'+id+'.json').then(result=>{
        this.list=result.body.message
      })
    }
  }
};
</script>
<style scoped>
* {
  touch-action: pan-y;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.imglist{
  margin: 0;
  padding: 0;
}
.imglist li{
  margin: 10px auto 10px;
  text-align: center;
  list-style: none;
  width: 100%;
}
.imglist img{
  width: 100%;
}
</style>
