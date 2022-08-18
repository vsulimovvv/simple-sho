<template>
  <div class="container">
    <h1 class="text-center text-4xl my-[20%]">PAGE NOT FOUND</h1>
    <router-link
      :to="{ name: 'shop' }"
      class="
        block
        text-center
        py-3
        px-8
        bg-dark
        text-white
        rounded-lg
        mx-auto
        w-[200px]
        duration-200
        hover:bg-accent
      "
    >
      Back to Shop
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style>
h1 {
}
</style>