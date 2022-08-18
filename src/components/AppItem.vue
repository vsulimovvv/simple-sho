<template>
  <router-link :to="/shop/ + item.id" class="card text-center">
    <img class="block h-auto w-full mb-4" :src="item.img" :alt="item.title" />
    <h3 class="text-2xl duration-200 md:text-xl">{{ item.title }}</h3>
  </router-link>
</template>

<script>
export default {
  name: "AppItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>