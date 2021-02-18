<template>
  <div class="tarBarItme" @click="itmeClick">
    <div v-if="!isActive"><slot name="itme-icon"></slot></div>
    <div v-else><slot name="itme-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="itme-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabBarItme",
  props: {
    link: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isActive() {
        // console.log(this.$route,"-----",this.link);//this.link拿到父组件的link属性值(this.$route是谁活跃拿到谁，path是下面的方法)
      return this.$route.path.indexOf(this.link) !== -1;
    },
    activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    itmeClick() {
        // console.log(5);
        // replace替换掉，返回不去
         this.$router.replace(this.link)
    },
  },
};
</script>
<style scoped>
</style>
