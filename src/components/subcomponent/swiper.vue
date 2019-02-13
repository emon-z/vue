<template>
    <div>
        <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in url" :key="item.id">
        <img :src="item.src" alt :class={full:isfull}>
      </mt-swipe-item>
    </mt-swipe>
    </div>
</template>
<script>
export default {
    props:['url','isfull']
}
</script>
<style scoped>
.mint-swipe {
  height: 200px;
}
/* .mint-swipe-item:nth-child(1){
    
} */
.mint-swipe-item{
    text-align: center;
}
.mint-swipe-item img {
  /* width: 100%; */
  height: 100%;
}
.full{
    width: 100%;
}
</style>
