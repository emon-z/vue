<template>
<div>
    <div class="container">
    <span>-</span>
    <input v-model="val" ref="numbox">
    <span>+</span>
  </div>
</div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      val: 1
    };
  },
  methods: {
    add() {
      if (this.val < this.max) {
        this.val = this.val + 1;
      }else{
          Toast({
              message:"最多只能购买"+this.max+"件商品"
          })
      }
    },
    reduce() {
      this.val = this.val - 1;
    }
  },
  props: ["max"]
};
</script>
<style scoped>
.container span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #eee;
    background: grey;
    color: black;
    border-radius: 20%;
    text-align: center;
}
.container input {
    width: 40px;
    height: 20px;
    text-align: center;
    border: 1px solid grey;
}
</style>

