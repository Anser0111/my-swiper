<template>
    <div id="app">
        <div id="home">
            <home-swiper :banners="banners" />
        </div>
    </div>
</template>

<script>
import HomeSwiper from "./views/HomeSwiper";

import { getHomeMultidata } from "./network/home.js";

export default {
    components: {
        HomeSwiper,
    },
    data() {
        return {
            // result: null,
            banners: [],
        };
    },
    created() {
        // 1.请求多个数据
        this.getHomeMultidata();
    },
    methods: {
        /**
         *  网络请求相关的方法
         */
        getHomeMultidata() {
            getHomeMultidata().then((res) => {
                this.banners = res;
            });
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

#home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
}
</style>
