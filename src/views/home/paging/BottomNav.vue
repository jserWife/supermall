<template>
  <div class="BottomNav">
    <div class="store">
      <div><i class="bi bi-chat-text active"></i><span class="text">客服</span></div>
      <div><i class="bi bi-shop-window"></i><span>店铺</span></div>
      <div><i class="bi bi-star"></i><span>收藏</span></div>
    </div>
    <div class="ShoppingCart"><span>加入购物车</span></div>
    <div class="Purchase"><span>购买</span></div>
  </div>
</template>
<script>
export default {
  name: "BottomNav",
};
</script>
<style scoped>
.BottomNav {
  display: flex;
  justify-content: space-between;
}
.store {
  width: 150px;
  display: flex;
  justify-content: space-between;
}
.store div {
  width: 50px;
  height: 49px;
  line-height: 49px;
  flex: 1;
  text-align: center;
}
.ShoppingCart {
  display: inline-block;
}
.ShoppingCart {
  line-height: 49px;
  background: rgb(245, 245, 10);
  font-size: 16px;
}
.ShoppingCart span {
  margin: 0 6px;
}
.Purchase {
  flex: 1;
  text-align: center;
  line-height: 49px;
  background: rgb(245, 154, 169);
  color: #fff;
}
.active{
    color: rgb(245, 154, 169);
}
</style>
