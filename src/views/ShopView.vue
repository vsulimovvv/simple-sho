<template>
  <section class="shop py-14">
    <div class="container">
      <h1 class="text-4xl text-center mb-[60px]">Vue Shop</h1>

      <ul class="grid grid-cols-2 gap-8 gap-y-11">
        <li v-for="item in shopList" :key="item.id">
          <Item :item="item" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Item from "@/components/AppItem";
export default {
  name: "ShopView",
  components: {
    Item,
  },
  data() {
    return {
      shopList: null,
    };
  },
  created() {
    this.shopList = this.$store.getters.getShopList;
  },
};
</script>

<style lang="scss" scoped>
</style>