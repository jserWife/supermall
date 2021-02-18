<template>
  <tabbar class="tabBar" activeColor="red">   
    <tabBarItme link="/home">
      <div slot="itme-icon">
        <img src="@/assets/imgs/tarbar/house-door.svg" alt="" />
      </div>
      <div slot="itme-icon-active" >
        <img src="@/assets/imgs/tarbar/house-door-fill.svg" alt="" />
      </div>
      <div slot="itme-text">
        <div class="itneText">首页</div>
      </div>
    </tabBarItme>
    <tabBarItme link="/category">
      <div slot="itme-icon">
        <img src="@/assets/imgs/tarbar/sim.svg" alt="" />
      </div>
      <div slot="itme-icon-active">
        <img src="@/assets/imgs/tarbar/sim-fill.svg" alt="" />
      </div>
      <div slot="itme-text">
        <div class="itneText">分类</div>
      </div>
    </tabBarItme>
    <tabBarItme link="/cart">
      <div slot="itme-icon">
        <img src="@/assets/imgs/tarbar/cart.svg" alt="" />
      </div>
      <div slot="itme-icon-active">
        <img src="@/assets/imgs/tarbar/cart-fill.svg" alt="" />
      </div>
      <div slot="itme-text">
        <div class="itneText">购物车</div>
      </div>
    </tabBarItme>
    <tabBarItme link="/mine">
      <div slot="itme-icon">
        <img src="@/assets/imgs/tarbar/person.svg" alt="" />
      </div>
      <div slot="itme-icon-active">
        <img src="@/assets/imgs/tarbar/person-fill.svg" alt="" />
      </div>
      <div slot="itme-text">
        <div class="itneText">我的</div>
      </div>
    </tabBarItme>
  </tabbar>
</template>
<script>
import Tabbar from "../../components/common/tabbar/Tabbar";
import TabBarItme from "../../components/common/tabbar/TabBarItme";
export default {
  name: "Mintabbar",
  components: {
    Tabbar,
    TabBarItme,
  },
};
</script>
<style scoped>
</style>
