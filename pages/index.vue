<template>
  <div class="app-main-page">
    <div class="container">
      <div class="app-main-page__slider slider">
        <div class="slider__slide">
          <img class="slider__slide__img" src="/images/b.jpg" alt="men">
          <div class="slider__slide__content">
            Мужское
          </div>
        </div>
        <div class="slider__slide">
          <img class="slider__slide__img" src="/images/g.jpg" alt="women">
          <div class="slider__slide__content">
            Женское
          </div>
        </div>
      </div>
      <div class="app-main-page__brands brands">
        <div class="title-wrapper">
          <h2 class="h2-title brands__title">Бренды</h2>
          <controllers-arrows :classes="['brands__arrow--prev','brands__arrow--next']"/>
        </div>
        <Swiper
            class="brands__slider"
            :modules="[Navigation, A11y]"
            :slides-per-view="2"
            :space-between="4"
            :breakpoints="{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }"
            :navigation="{
          prevEl: '.brands__arrow--prev',
          nextEl: '.brands__arrow--next',
          addIcons: false,
        }"
            :a11y="{
          prevSlideMessage: 'Предыдущий бренд',
          nextSlideMessage: 'Следующий бренд',
        }"
            grab-cursor
        >
          <SwiperSlide
              v-for="brand in brands"
              :key="brand.image"
              class="brands__slider__slide"
          >
            <img
                class="brands__slider__slide__img"
                :src="`/images/brands/${brand.image}`"
                :alt="brand.name"
                loading="lazy"
            >
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="app-main-page__catalog catalog">
        <div class="title-wrapper">
          <h2 class="h2-title catalog__title">Новые поступления</h2>
          <controllers-arrows :classes="['catalog__arrow--prev','catalog__arrow--next']"/>
        </div>
        <CatalogSlider/>
      </div>
      <div class="app-main-page__catalog catalog">
        <div class="title-wrapper">
          <h2 class="h2-title catalog__title">Популярные товары</h2>
          <controllers-arrows :classes="['catalog__arrow--prev','catalog__arrow--next']"/>
        </div>
        <CatalogSlider/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Navigation, A11y} from 'swiper/modules'
import 'swiper/css'
import ControllersArrows from "~/src/components/Controllers/ControllersArrows.vue";
import CatalogSlider from "~/src/components/Catalog/CatalogSlider.vue";

const brands = [
  {name: 'Adidas Originals', image: 'adidas-originals.svg'},
  {name: 'New Balance', image: 'new-balance.svg'},
  {name: 'Nike', image: 'nike.svg'},
  {name: 'Stone Island', image: 'stone-island.svg'},
  {name: 'The North Face', image: 'the-north-face.svg'},
]
</script>

<style scoped lang="scss">
.app-main-page {
  .slider {
    display: flex;
    gap: 4px;
    width: calc(100% + 32px);
    margin-left: -16px;

    &__slide {
      width: calc(50% - 2px);
      background: #222;
      color: #fff;
      height: 320px;
      padding: 16px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      position: relative;
      font-size: 24px;

      &__img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
      }

      &__content {
        position: relative;
        z-index: 2;
        padding: 8px;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.64);
        font-size: 14px;
      }
    }
  }

  .brands {
    margin-top: 24px;

    &__slider {
      margin-top: 16px;

      &__slide {
        border-radius: 4px;
        height: 180px;
        background: #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        box-sizing: border-box;

        &__img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }

  .catalog {
    margin-top: 24px;
  }
}
</style>
