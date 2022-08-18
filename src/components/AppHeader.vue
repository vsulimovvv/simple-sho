<template>
  <header class="header py-5 text-dark text-lg leading-[1]">
    <div class="container">
      <nav class="flex justify-between items-center">
        <router-link to="/" class="logo">VueShop</router-link>

        <ul class="flex">
          <li>
            <router-link
              to="/"
              class="link block py-2 px-6 hover:text-accent transition"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'shop' }"
              class="link block py-2 px-6 hover:text-accent transition"
            >
              Shop
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
  
<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped lang="scss">
.header {
  box-shadow: 0 3px 10px rgb(0 0 0 / 10%);
}

.link.router-link-exact-active {
  color: #007bff;
}
</style>
