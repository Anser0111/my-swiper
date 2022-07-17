<template>
    <swiper>
        <swiper-item v-for="(item, index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" />
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../components/swiper";
export default {
    props: {
        banners: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    data() {
        return {};
    },
    components: {
        Swiper,
        SwiperItem,
    },
    methods: {},
};
</script>

<style scoped></style>
