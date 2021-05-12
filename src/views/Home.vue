<template>
  <div class="home">
    {{ $API.YearOrdersPercent }}
    <el-input v-model="input" placeholder="请输入内容"></el-input>
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
    return {
      input: ref("")
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
