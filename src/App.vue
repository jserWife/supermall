<template>
  <div id="app">
    <!-- keep-alive解决路由跳转后数据销毁，重新创建回到顶部 -->
    <keep-alive exclude="Paging">
      <router-view></router-view>
    </keep-alive>
    <mintabbar></mintabbar>
  </div>
</template>

<script>
// 导入组件
import Mintabbar from "../src/components/common/Mintabbar";
export default {
  name: "App",
  components: {
    Mintabbar,
  },
};
</script>

<style>
/* 引入css */
@import "../src/assets/css/beas.css";

.tabBar {
  display: flex;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 2px hsla(0, 0%, 67%, 0.197);
}
.tarBarItme {
  flex: 1;
  text-align: center;
}
.tarBarItme img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
}
.itneText {
  font-size: 14px;
}
.itmeImgActive img {
  background: red;
}
</style>
