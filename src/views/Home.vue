<template>
  <div class="home">
    <el-input
      v-model="input"
      placeholder="请输入内容"
      @change="handleSelect"
    ></el-input>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld
  },
  setup() {
    const input = ref("");
    const handleSelect = () => {
      console.log(input.value);
    };
    return {
      input,
      handleSelect
    };
  }
});
</script>

<style lang="scss" scoped>
.home {
  margin-top: 60px;
  text-align: center;
  color: #2c3e50;
}
</style>
