//入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Vuex from 'vuex'
Vue.use(Vuex)
import router from './router.js'
import app from './App.vue'
import VueResorce from 'vue-resource'
Vue.use(VueResorce)
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import { Header, Swipe, SwipeItem, Button, Badge,Switch} from 'mint-ui'
import {Lazyload} from 'mint-ui';
Vue.use(Lazyload);
Vue.component(Swipe.name, Swipe)
Vue.component(Badge.name, Badge)
Vue.component(Button.name, Button)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Header.name, Header)
Vue.component(Switch.name, Switch)
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
var car=JSON.parse(localStorage.getItem('car'||'[]'))
var store = new Vuex.Store({
    state: { //this.$store.stata.***
        car: [] //将购物车商品的数据用数组存储起来，在car数组中存储商品的对象
    },
    mutations: { //this.$store.commit('方法的名称'，按需传递唯一的参数)
        addTocar(state,somethinginfo){
            var flag=false
            state.car.some(item=>{
                if(item.id==somethinginfo.id){
                    item.count += somethinginfo.count
                    flag=true
                    return true
                }
            })
            if(!flag){
                state.car.push(somethinginfo)
            }
            localStorage.setItem('car', window.JSON.stringify(state.car))
        }
    },
    getters: {
        getallcount(state){
            var c=0;
            state.car.forEach(item=>{
                c+=item.count
            })
            return c
        }
    }
})
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router: router,
    store:store
})
