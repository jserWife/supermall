<template>
  <div>
    <h3>本周流行</h3>
    <div class="recomd">
      <div class="recomdCont" v-for="(item, j) in recommends" :key="j">
        <a :href="item.link">
          <img :src="item.image" />
          <span>{{title}}</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Popular",
  data() {
      return {
          title:'换新女装'
      }
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
h3 {
  text-align: center;
  line-height: 50px;
  font-weight: normal;
  display: block;
  width: 100%;
}
.recomd {
  display: flex;
  justify-content: space-around;
  padding: 12px 0 16px 0;
  flex-wrap: wrap;
}
.recomd div a img {
  width: 65px;
  height:65px;
  border-radius: 50%;
  margin-bottom: 4px;

}
.recomdCont span {
  display: block;
  text-align: center;
}
.recomd .recomdCont a {
  font-size: 12px;
}

</style>
