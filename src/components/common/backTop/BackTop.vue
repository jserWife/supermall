<template>
    <div>
      <h1 class="back"><i class="bi bi-arrow-up-circle"></i></h1>
    </div>
</template>
<script>
import 'bootstrap-icons/font/bootstrap-icons.css'
export default {
    name:'BackTop'
}
</script>
<style scoped>
.back{
   position: fixed;
    bottom: 60px;
    right: 10px;
    color:#fc8b9e;
    z-index: 10;
}
</style>
