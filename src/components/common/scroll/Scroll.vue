<template>
  <div class="wrp">
    <div class="cont">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll, { PullUpLoad } from "better-scroll";
export default {
  name: "Scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    }
  },
    data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // 创建new BScroll
    this.scroll = new BScroll(".wrp", {
      movable: true,
      zoom: true,
      pullUpLoad: true,
      click:true,
      probeType:this.probeType
    });
    // // 监听滚东位置
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('scroll',position)
    })
    console.log(23);
    // // 滚动的初始定位
     this.scroll.scrollTo(0, 0);
  },
  methods: {
    scrollTo(x,y,time=500){
      console.log(x,y,time);
      this.scroll.scrollTo(x,y,time)
    }
  },
};
</script>
<style scoped>
</style>
