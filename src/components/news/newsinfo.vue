<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newsinfo.add_time}}</span>
      <span>点击：{{newsinfo.click}}次</span>
    </p>
    <hr>
    <div class="content">
      <p>搜狐科技/杨锦</p>
      <p>
        1月24日举行的“ 华为5G发布会暨MWC2019预沟通会” 上，除了全球首颗5G基站核心芯片“ 天罡” 之外，
        华为还发布了全球首个单芯片多模终端芯片Balong 5000， 以及基于该芯片的首款5G商用终端华为5G CPE Pro
      </p>
      <p>
        现场， 华为消费者BG CEO余承东展示了全球第一款采用Balong 5000 的5G 商用终端CPE， 他表示，
        这是目前世界上速度最快的5G CPE， 并在现场进行实地演示， 5 G网络速度达到了3 .2 Gbps。
      </p>
      <p>
        <img
          src="//5b0988e595225.cdn.sohucs.com/images/20190124/98e7ede77e5d45a3b521f31ff1755b54.jpeg"
        >
      </p>
      <p>
        Balong 5000 在全球率先支持SA（ 5 G独立组网） 和NSA（ 5 G非独立组网， 即5G网络架构在LTE上） 组网方式， 拥有体积小、
        集成度高等特点， 能够在单芯片内实现2G、 3 G、 4 G和5G多种网络制式， 有效降低多模间数据交换产生的时延和功耗。
      </p>
      <p>
        此外， Balong 5000 率先实现5G峰值下载速率， 在Sub - 6 GHz（ 低频频段， 5 G的主用频段）频段实现4 .6 Gbps,
        在毫米波（ 高频频段， 5 G的扩展频段） 频段达6 .5 Gbps， 是4G LTE可体验速率的10倍。
      </p>
      <p><img src = "//5b0988e595225.cdn.sohucs.com/images/20190124/e272bd041cae468bbc2cb1a70f2c689a.jpeg"/></p>
      <p>搭载Balong 5000 的华为5G CPE Pro可支持4G和5G双模， 在5G网络下可以实现3秒下载1GB的高清视频， 适用于家庭、 中小企业等宽带接入。</p>
      <p>随着5G网络的到来， 智能家居有望迎来爆发， 使用Wi - Fi 6 新技术的华为5G CPE Pro， 速率高达4 .8 Gbps， 是首款支持华为HiLink协议的5G CPE。</p>
      <p>华为5G产品线总裁杨超斌表示， 华为率先突破5G规模商用的关键技术， 率先开始全球规模商用， 开始5G全球规模部署。</p>
      <p>值得一提的是， 基于Balong 5000 的华为5G手机将在今年的巴塞罗那MWC展会上发布，据余承东透露，这款手机将采用可折叠屏设计，将是全球首款搭载5G网络的可折叠屏商用手机。</p>
    </div>
    <comments></comments>
  </div>
</template>
<script>
import comment from "../subcomponent/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  created() {
    this.getnewsinfo();
  },
  methods: {
    getnewsinfo() {
      this.$http.get("/src/data/newslist.json").then(result => {
        this.newsinfo = result.body.message[this.id - 1];
      });
    }
  },
  components: {
    comments: comment
  }
};
</script>
<style scoped>
.newsinfo-container {
  padding: 0 4px;
}
.newsinfo-container .title {
  font-size: 16px;
  text-align: center;
  margin: 15px 0 15px;
  color: grey;
}
.newsinfo-container .subtitle {
  font-size: 13px;
  color: #226aff;
  display: flex;
  justify-content: space-around;
}
.newsinfo-container .content {
  padding: 10px 5px;
  font-size: 14px;
  text-indent: 1em;
}
.newsinfo-container .content img {
  width: 100%;
  height: 100%;
}
</style>

