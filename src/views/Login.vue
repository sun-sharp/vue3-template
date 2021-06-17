<template>
  <div class="login">
    <p>{{ title }}</p>
    <template v-for="(item, index) in mapData" :key="index">
      <p>{{ item.name }}</p>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";

import { mapText } from "@/api";

export default defineComponent({
  name: "Login",
  setup: () => {
    const title = "";
    const mapData: any = ref([]);

    const getmapText = () => {
      mapText().then(({ data }) => {
        mapData.value = data.data;
      });
    };

    // onBeforeMount
    onBeforeMount(() => {
      getmapText();
    });

    return { title, mapData };
  }
});
</script>

<style lang="scss" scoped>
.login {
  text-align: center;
  color: #2c503b;
}
</style>
