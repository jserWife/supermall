<template>
  <div>  
      <navBar>
        <div slot="left" @click="ReturnBtn">
          <i class="bi bi-chevron-left"></i>
        </div>
        <div slot="center" class="PagingNav">
          <span
            @click="aa(index)"
            :class="{ active: index == num }"
            v-for="(item, index) in title"
            :key="index"
            >{{ item }}</span
          >
        </div>
      </navBar>
  </div>
</template>
<script>
import navBar from "../../../components/common/navBar/NavBar";
 
export default {
  name: "Paging",
  data() {
    return {
      id: null,
      title: ["商品", "参数", "评论", "推荐"],
      num: 0,
     
    };
  },
  components: {
    navBar,
    
  },
  created() {
    // this.id=this.$router.params.id
    this.id = 222;
  },
  methods: {
    ReturnBtn() {
      this.$router.back();
    },

    aa(index){
      this.num=index
      console.log(2222);
       this.$emit('click',index) // OK
    }
    
  },
};
</script>
<style scoped>
.PagingNav {
  display: flex;
  justify-content: space-between;
}
.PagingNav span {
  font-size: 14px;
  flex: 1;
}
i {
  font-size: 22px;
  padding: 10px 20px;
  line-height: 29px;
}
.active {
  color: red;
}
</style>

