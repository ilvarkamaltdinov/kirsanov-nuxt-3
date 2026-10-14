<template>
  <Swiper
      class="catalog-slider"
      :modules="[Navigation]"
      :slides-per-view="1.2"
      :space-between="4"
      :breakpoints="{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }"
      :navigation="{
        prevEl: '.catalog__arrow--prev',
        nextEl: '.catalog__arrow--next',
        addIcons: false,
      }"
      grab-cursor
  >
    <SwiperSlide
        v-for="slide in slides"
        :key="slide.img"
        class="catalog-slider__slide"
    >
      <img
          class="catalog-slider__image"
          :src="`/images/catalog/${slide.img}.jpg`"
          :alt="`Товар из новых поступлений ${slide.img}`"
          width="1280"
          height="1280"
          loading="lazy"
          draggable="false"
      >
      <div class="catalog-slider__title" :title="slide.title">
        {{ slide.title }}
      </div>
      <div class="catalog-slider__type">
        {{ slide.type }}
      </div>
      <div class="catalog-slider__model">
        {{ slide.model }}
      </div>
      <div class="catalog-slider__price">
        {{ slide.price }} ₽
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Navigation} from 'swiper/modules'
import 'swiper/css'

const slides = [
  {
    img: '1',
    title: 'Короткий тайтл',
    type: 'Футболка',
    model: 'super pro Max 2000',
    price: '50',
  },
  {
    img: '2',
    title: 'Длинный длинный длинный тайтл',
    type: 'Футболка',
    model: 'super pro Max 2000',
    price: '50 000',
  },
  {
    img: '3',
    title: 'ОЧЕНЬ ОЧЕНЬ ОЧЕНЬ Длинный длинный длинный тайтл',
    type: 'Футболка',
    model: 'super pro Max 2000',
    price: '3 500',
  },
  {
    img: '4',
    title: 'Короткий тайтл',
    type: 'Футболка',
    model: 'super pro Max 2000',
    price: '100 000',
  }
]
</script>

<style scoped lang="scss">
.catalog-slider {
  margin-top: 16px;

  &__slide {
    height: auto;
    overflow: hidden;
    border-radius: 4px;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  &__title {
    width: 100%;
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    padding: 0 16px;
  }

  &__type {
    text-align: center;
    font-size: 14px;
    color: #666;
  }

  &__model {
    text-align: center;
    font-size: 14px;
    color: #666;
  }


  &__price {
    font-family: system-ui, sans-serif;
    font-weight: bold;
  }

  &__image {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    object-fit: contain;
  }
}
</style>
