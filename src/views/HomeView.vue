<template>
  <div class="home">
    <div class="container">
      <div class="home-content">
        <h1 class="text-4xl mb-[60px]">Vue Shop</h1>
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
          >Go to Shop</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.home-content {
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url("@/assets/img/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  color: #fff;
  z-index: 1;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: -1;
  }
}
</style>
