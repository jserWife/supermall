<template>
  <div class="recomd">
    <div class="recomdCont" v-for="(item, i) in recommends" :key="i">
      <a :href="item.link">
        <img :src="item.image" />
        <span>{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Recommend",
  data() {
    return {
      imga: [],
    };
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.recomd {
  display: flex;
  justify-content: space-around;
  padding: 12px 0 16px 0;
  border-bottom: 6px solid rgb(238, 235, 235);
}
.recomd div a img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.recomdCont span {
  display: block;
  text-align: center;
}
a {
  font-size: 12px;
}
</style>
