<template>
  <div class="Rotation">
    <v-carousel
      height="150"
      cycle
      :show-arrows="false"
      hide-delimiters
    >
      <v-carousel-item v-for="(item, i) in banners" :key="i" :src="item.image">
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  name: "Rotation",
  props:{
      banners:{
          type:Array,
          default(){
              return []
          }
      }
  }

};
</script>
<style scoped>
.Rotation{
  /* padding-top: 40px; */
}
</style>
