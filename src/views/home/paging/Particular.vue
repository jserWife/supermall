<template>
  <div class="particu">
    <img :src="Obj.img" />
    <div>
      <div class="particuText">{{ Obj.introduction }}</div>
      <div class="Price">
        <span>￥{{ Obj.Price }}</span>
        <span>库存{{ Obj.Collection }}件</span>
      </div>
    </div>
    <h2>内容忽略</h2>
  </div>
</template>
<script>
export default {
  name: "Particular",
  data() {
    return {
      Obj: null,
    };
  },
  created() {
    // console.log(this.$route.query, "dddd");
    this.Obj = this.$route.query;
  },
};
</script>
<style scoped>
.particu{
  height: 660px;
}
.particu img {
  width: 100%;
  height: 260px;
}
.particuText {
  font-size: 14px;
  margin: 4px 10px;
}
.Price span:nth-child(1) {
  color: red;
  margin: 4px 10px;
}
.Price span:nth-child(2) {
  color: #aaa;
  font-size: 12px;
}
h2{
  text-align: center;
}
</style>
