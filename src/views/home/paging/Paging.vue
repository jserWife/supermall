<template>
  <div class="pag">
    <pagingNav @click="anvClick" class="titleNav"></pagingNav>
    <scroll class="scl" ref="scroll" :probeType="3">
      <particular></particular>
      <parameters ref="parameters"></parameters>
      <comment ref="comment"></comment>
      <recommend ref="recommend"></recommend>
    </scroll>
    <bottomNav class="BottomNav"></bottomNav>
  </div>
</template>
<script>
import PagingNav from "../paging/PagingNav";
import Particular from "../paging/Particular";
import Parameters from "../paging/Parameters";
import Comment from "../paging/Comment";
import Recommend from "../paging/Recommend";
import Scroll from "../../../components/common/scroll/Scroll";
import BottomNav from "../paging/BottomNav";
export default {
  name: "Paging",
  data() {
    return {
      moveY: [],
    };
  },

  components: {
    PagingNav,
    Particular,
    Scroll,
    Parameters,
    Comment,
    Recommend,
    BottomNav
  },
  methods: {
    anvClick(index) {
      console.log(this.moveY[index], "this.moveY[index]");
      this.$refs.scroll.scrollTo(0, -this.moveY[index]);
      return false;
    },
  },
  mounted() {
    this.moveY.push(0);
    this.moveY.push(this.$refs.parameters.$el.offsetTop);
    this.moveY.push(this.$refs.comment.$el.offsetTop);
    this.moveY.push(this.$refs.recommend.$el.offsetTop);
    console.log(this.moveY);
  },
};
</script>
<style scoped>
.pag {
  height: 2600px;
  position: relative;
  z-index: 1;
  background: #fff;
}
.scl {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 0;
}
.titleNav{
  position: relative;
  z-index: 100;
  background: #fff;
}
.BottomNav{
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
  box-shadow: 0 -2px 2px hsla(0, 0%, 67%, 0.197);
}
</style>

