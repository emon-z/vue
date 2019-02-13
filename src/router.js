import VueRouter from 'vue-router'
import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Shopcar from './components/tabbar/Shopcar.vue'
import Search from './components/tabbar/Search.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photos/photolist.vue'
import something from './components/shoplist/something.vue'
import somethinginfo from './components/shoplist/somethinginfo.vue'
import Godesc from './components/shoplist/godesc.vue'
import Gocomment from './components/shoplist/gocomment.vue'
var router = new VueRouter({
    routes: [
        { path: '/', redirect:'/home' },
        { path: '/home', component: Home },
        { path: '/member', component: Member },
        { path: '/shopcar', component: Shopcar },
        { path: '/search', component: Search },
        { path: '/home/news', component: newslist },
        { path: '/home/newsinfo/:id', component: newsinfo },
        { path: '/home/photolist', component: photolist },
        {path: '/home/something',component: something},
        {path: '/home/somethinginfo/:id',component: somethinginfo},
        { path: '/home/godesc/:id', component: Godesc},
        { path: '/home/gocomment/:id', component: Gocomment }

    ],
    linkActiveClass: 'mui-active'
    //覆盖默认路由高亮类
})
//暴露出去
export default router
