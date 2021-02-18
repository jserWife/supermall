<template>
  <div>
    <navBar class="Shopping"><div slot="center">购物车</div></navBar>
    <backTop @click.native="scrollBtn" v-show="condition"></backTop>
    <scroll class="scl" ref="scroll" :probeType="3" @scroll="scrbtn">
      <rotation :banners="banners"></rotation>
      <recommend :recommends="banners"></recommend>
      <popular :recommends="banners"></popular>
      <tabControl
        :title="title"
        class="tabCont"
        @tabClick="tabClick"
        ref="Suction"
      ></tabControl>
      <homeDetails :homeList="typeList[type]"></homeDetails>
    </scroll>
  </div>
</template>
<script>
import NavBar from "../../components/common/navBar/NavBar";
import Rotation from "../home/homrRecommend/Rotation";
import Recommend from "../home/homrRecommend/Recommend";
import Popular from "../home/homrRecommend/Popular";
import HomeDetails from "../home/homrRecommend/HomeDetails";
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/common/backTop/BackTop";

import TabControl from "../../components/content/tabControl/TabControl";
import { getHomeata } from "../home/home";
import { homeList } from "../../commom/data";
export default {
  name: "Home",
  data() {
    return {
      // 申明类型
      type: "pop",
      banners: [],
      keywords: [],
      title: ["流行", "新款", "精选"],
      condition: false,
      typeList: {
        pop: homeList[0],
        news: homeList[1],
        sel: homeList[2],
      },
    };
  },
  // beforeMount() {
  //   console.log(2);
  // },
  mounted() {
    // this.aaa = this.$refs.Suction.$el.offsetTop;
  },
  // beforeUpdate() {
  //   console.log(4);
  // },
  // updated() {
  //   console.log(5);
  // },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.type = "pop";
          break;
        case 1:
          this.type = "news";
          break;
        case 2:
          this.type = "sel";
          break;
      }
    },
    scrollBtn() {
      // 回到顶部 this.$refs.scroll拿到组件，组件里找scroll，调用scrollTo方法*（x,y,毫秒）方法一
      // this.$refs.scroll.scroll.scrollTo(0,0,500)
      // 封装的思想（拿到组件调用组件的scrollTop方法）
      console.log(this.$refs.scroll);
      this.$refs.scroll.scrollTo(0, 0);
    },
    scrbtn(scrollTo) {
      this.condition = -scrollTo.y > 800;
    },
  },
  components: {
    NavBar,
    Rotation,
    Recommend,
    TabControl,
    Popular,
    HomeDetails,
    Scroll,
    BackTop,
  },
  created() {
    getHomeata()
      .then((res) => {
        // console.log(res.data.data.banner.list,"res.data.data.banner.list");
        // 赋值
        this.banners = res.data.data.banner.list;
        this.dKeywords = res.data.data.dKeyword.list;
        this.keywords = res.data.data.keywords.list;
        this.recommends = res.data.data.recommend.list;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
.carousel {
  width: 100%;
  height: 200px;
}
.Shopping {
  position: fixed;
  width: 100%;
  z-index: 100;
  color: #fff;
  background: #fc8b9e;
}
.tabCont {
  position: sticky;
  top: 40px;
}
.scl {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 50px;
}
.fixeed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}
</style>
