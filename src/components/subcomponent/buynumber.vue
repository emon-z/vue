<template>
  <div class="container">
    <span>
      <button @click="reduce">-</button>
    </span>
    <input v-model="val" ref="numbox">
    <span>
      <button @click="add">+</button>
    </span>
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
  watch: {
    val() {
      this.$emit("getcount", parseInt(this.val));
    }
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
.container {
  display: flex;
  border: 1px solid #ccc;
  vertical-align: middle;
  justify-content: space-between;
  height: 39px;
  width: 130px;
}
.container input {
  width: 50px;
  height: 39px;
  text-align: center;
  border: 0;
}
.container button {
  background: #cccccc;
  border-radius: 0;
  font-size: 18px;
  font-weight: 600;
  width: 40px;
  height: 39px;
}
</style>

