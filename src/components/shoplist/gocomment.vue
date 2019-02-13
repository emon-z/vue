<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容" maxlength="120" v-model="inner"></textarea>
    <mt-button type="primary" size="large" class="button" @click="add">发表评论</mt-button>
    <div class="comment">
      <div class="cmt-item" v-for="(item,i) in comments" :key="item.user">
        <div class="cmt-title">{{i+1}}楼 用户：{{item.username}} 发表于：{{item.add_time}}</div>
        <div class="cmt-body">{{item.content}}</div>
      </div>
    </div>
    <!-- <mt-button type="danger" size="large" plain>加载更多</mt-button> -->
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id:this.$route.params.id,
      comments: [],
      inner: ""
    };
  },
  created() {
    this.getcommentlist();
  },
  methods: {
    getcommentlist() {
      this.$http.get("/src/data/goods/phonelist2.json").then(result => {
        if (result.body.status == 200) {
          this.comments = result.body.message[this.id].comment;
          this.comments = this.comments.concat(
            JSON.parse(localStorage.getItem("cmts1") || "[]")
          );
        } else {
          console.log("获取评论信息失败！");
        }
      });
    },
    add() {
      if (this.inner == "") {
        Toast({
          message: "评论不能为空",
          position: "middle",
          duration: 1000
        });
      } else {
        var newdata = {
          username: "孤芒",
          add_time: "2019-01-23",
          content: this.inner
        };
        var list = JSON.parse(localStorage.getItem("cmts1") || "[]");
        var newlist = [];
        newlist.push(newdata);
        list = list.concat(newlist);
        localStorage.setItem("cmts1", window.JSON.stringify(list));
        this.comments = this.comments.concat(newlist);
        this.inner = "";
      }
    }
  }
};
// var list=JSON.parse(localStorage.getItem('cmts')||'[]')
//       console.log(list)
//       list.push(commet)
//       localStorage.setItem('cmts',JSON.stringify(list))
//       this.userinfo=this.comment=''
//       this.$emit('func')
</script>
<style scoped>
.cmt-container .button {
  margin-bottom: 30px;
}
.cmt-container h3 {
  font-size: 16px;
}
.cmt-container textarea {
  font-size: 14px;
  height: 85px;
  margin: 0;
}
.cmt-item .cmt-title {
  font-size: 14px;
  background: #cccccc;
  border-bottom: 1px #cccccc solid;
}
.cmt-item .cmt-body {
  font-size: 14px;
  margin-top: 5px;
  font-weight: 600;
  text-indent: 1em;
}
.mint-button--large {
  width: 150px !important;
  margin: 10px auto;
}
</style>