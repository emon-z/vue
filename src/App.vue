<template>
  <div class="app-container">
    <!-- 顶部 Header区域 -->
    <mt-header fixed title="芒果商城"></mt-header>
    <!-- 中间的 路由 router区域 -->
    <transition>
    <router-view></router-view>
    </transition>
    <!-- 底部tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-itemzs" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-itemzs" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-itemzs" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">{{$store.getters.getallcount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-itemzs" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
<style>
.app-container {
  padding-top: 40px;
  /* overflow-x: hidden; */
  padding-bottom: 57px;
}
.mint-header{
  background-color: skyblue;
  color: black;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%); 
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%); 
  position: absolute;
}
.v-enter-active,.v-leave-active{
  transition: all 0.8s ease;
}
.mui-bar-tab .mui-tab-itemzs.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-itemzs {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-itemzs .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
}
.mui-bar-tab .mui-tab-itemzs .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

