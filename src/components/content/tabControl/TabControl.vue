<template>
  <div class="control">
    <div v-for="(item,index,j) in title" :key="j" :class="{active: index === cont}" @click="btnItme(index)">
      <span class="controlText">{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  data() {
     return {
         cont:0
     }
 },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods:{
    btnItme(index){
       this.cont=index;
      this.$emit('tabClick',index)
    }
  }
};
</script>
<style scoped>
.control{
    display: flex;
    justify-content: space-around;
    background: #fff;
}
.controlText{
    font-size: 16px;
    height: 40px;
    line-height: 40px;
}
.active span{
    color: rgb(245, 106, 129);
    border-bottom: 3px solid rgb(245, 106, 129);
    padding-bottom: 5px;
}
</style>
