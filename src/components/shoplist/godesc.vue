<template>
    <div class="container">
       <video controls="controls" style="" preload="none" webkit-playsinline="true" playsinline="" src="https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/6977be5e133598920189689857/v.f20.mp4?dockingId=6ff7fc9a-8f8c-46b9-811e-2e1f9aef81e0&amp;storageSource=3"></video>
       <img v-for="item in listid.pro_img" :key="item.id" :src="item.src" alt="">
    </div>
</template>
<script>
export default {
    data() {
        return {
            id:this.$route.params.id,
            listid:[],
            list:[]
        }
    },
    created() {
        this.getproinfo()
    },
    methods: {
         getproinfo(){
        this.$http.get('/src/data/goods/phonelist2.json').then(result=>{
            this.list=result.body.message
            this.listid=this.list[this.id]
        })
    }
    }
}
</script>
<style scoped>
.container video{
    width: 100%;
    height: 100%;
    background: #000;
}
.container img{
    width: 100%;;
}
</style>
