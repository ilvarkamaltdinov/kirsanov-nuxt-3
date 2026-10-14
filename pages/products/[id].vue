<template>
  <div class="product-page">
    <div class="container product-page__container">
      <NuxtLink to="/catalog" class="product-page__back">← Вернуться в каталог</NuxtLink>
      <article class="product-page__card">
        <img class="product-page__image" :src="product.image" :alt="product.title" width="984" height="984">
        <div class="product-page__content">
          <p class="product-page__type">{{ product.type }}</p>
          <h1>{{ product.title }}</h1>
          <p class="product-page__model">{{ product.model }}</p>
          <p class="product-page__price">{{ formatPrice(product.price) }}</p>
          <h2>Размеры</h2>
          <ul class="product-page__sizes" aria-label="Размеры">
            <li v-for="size in product.sizes" :key="size">{{ size }}</li>
          </ul>
          <h2>О товаре</h2>
          <p class="product-page__description">{{ product.description }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { catalogProducts, formatPrice } from '~/src/data/catalog'

definePageMeta({
  validate: route => catalogProducts.some(product => product.id === route.params.id),
})

const route = useRoute()
const product = computed(() => catalogProducts.find(product => product.id === route.params.id)!)

useSeoMeta({
  title: () => `${product.value.title} — Kirsanov Shop`,
  description: () => product.value.description,
})
</script>

<style scoped lang="scss">
.product-page {
  padding: 24px 0 40px;
  color: #171717;

  &__container { max-width: 1200px; margin: 0 auto; }

  &__back {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    margin-bottom: 16px;
    color: #fff;
    font-size: 14px;
    text-decoration: none;
  }

  &__card {
    display: grid;
    overflow: hidden;
    border-radius: 20px;
    background: #fff;
  }

  &__image {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    object-fit: contain;
    background: #e9e9e9;
  }

  &__content { padding: 24px; }
  &__type { margin-bottom: 10px; color: #686868; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; }
  h1 { font-size: clamp(24px, 3vw, 36px); line-height: 1.2; }
  &__model { margin-top: 12px; color: #686868; font-size: 14px; }
  &__price { margin: 24px 0; font-family: system-ui, sans-serif; font-size: 30px; font-weight: 700; }
  h2 { margin-bottom: 12px; font-size: 15px; font-weight: 600; }

  &__sizes {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 28px;
    list-style: none;

    li {
      display: grid;
      place-items: center;
      width: 40px;
      height: 40px;
      border: 1px solid #dedede;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
    }
  }

  &__description { color: #555; font-size: 15px; line-height: 1.7; }
  a:focus-visible { outline: 2px solid #fff; outline-offset: 4px; }

  @media (min-width: 768px) {
    &__card { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: start; }
    &__content { padding: 40px; }
  }
}
</style>
