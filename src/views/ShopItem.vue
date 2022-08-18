<template>
  <div class="container">
    <div class="product">
      <div class="product__wrapper grid grid-cols-2 gap-7">
        <carousel :settings="settings">
          <slide v-for="(slide, index) in item.gallery" :key="index">
            <img :src="slide.img" :alt="slide.title" />
          </slide>

          <template #addons>
            <pagination />
          </template>
        </carousel>

        <div class="text-center">
          <h1 class="text-3xl font-semibold text-center mb-6">
            {{ item.title }}
          </h1>
          <p class="text-xl mb-6">{{ item.descr }}</p>
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
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "ShopItem",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      item: null,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        wrapAround: true,
        autoplay: 3000,
      },
    };
  },

  created() {
    let id = +this.$route.params.id;
    this.item = this.$store.getters.getItem(id);
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 767.98px) {
  .product {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .product__wrapper {
    grid-template-columns: 1fr !important;
  }
  .carousel {
    margin-bottom: 70px;
    height: 200px;
  }
}
.carousel {
  height: 350px;
}

@media screen and (max-width: 767.98px) {
  .carousel {
    margin-bottom: 70px;
    height: 300px;

    &__viewport {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &__slide {
      width: 100%;
      height: 100%;
    }
  }
}
@media screen and (max-width: 480.98px) {
  .carousel {
    height: 200px;
  }
}

.carousel__pagination {
  margin-top: 40px;
}
.carousel__pagination-button {
  background-color: #848fac !important;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transition: 200ms ease;

  &--active {
    background-color: #0e1734 !important;
    width: 15px;
    height: 15px;
  }
}
</style>