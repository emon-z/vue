<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in data" :key="item.title">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
              <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
                <span>{{item.add_time}}</span>
                <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    data() {
        return {
            data:[]
        }
    },
    created() {
        this.getnewslist()
    },
    methods: {
        getnewslist() {
        this.$http.get("/src/data/newslist.json").then(result=>{
            if(result.body.status==0){
            console.log(result.body)
            this.data=result.body.message
            }else{
            console.log("获取新闻列表错误")
            }
        })
    }
    }
};
</script>
<style  scoped>
    .mui-table-view li h1{
       font-size: 13px;
    }
    .mui-table-view .mui-ellipsis{
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
</style>

