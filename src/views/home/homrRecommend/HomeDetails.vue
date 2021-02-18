<template>
  <div class="Details">
    <div
      class="HomeDetails"
      v-for="(itme, i) in homeList"
      :key="i"
      @click="btnItme(i)"
    >
      <a href="javascript:;" class="HomeDetailsItme">
        <img :src="itme.img" alt="" />
        <div class="HomeText">{{ itme.introduction }}</div>
        <div class="HomeCont">
          <span>￥{{ itme.Price }}</span>
          <span>❤{{ itme.Collection }}</span>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "HomeDetails",
  props: {
    homeList: {
      type: Array,
    },
  },
  methods: {
    btnItme(a) {
      this.$router.push({
        path: "/paging",
        query: this.homeList[a],
      });
    },
  },

  // beforeUpdate() {
  //   console.log(this.homeList,"this.homeList");
  // },
};
</script>
<style scoped>
.Details {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
}
.HomeDetails {
  margin-bottom: 10px;
}
.HomeDetailsItme img {
  width: 146px;
  height: 160px;
  border-radius: 6px;
}
.HomeText {
  font-size: 12px;
  color: rgb(104, 103, 103);
  width: 146px;
  padding: 0 6px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.HomeCont {
  display: inline-block;
}
.HomeCont span:nth-child(1) {
  color: red;
  font-size: 14px;
  margin: 6px;
}
.HomeCont span:nth-child(2) {
  font-size: 12px;
}
</style>
