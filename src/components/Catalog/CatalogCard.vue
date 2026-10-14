<template>
  <article class="catalog-item">
    <div class="catalog-item__media">
      <NuxtLink :to="productUrl" class="catalog-item__image-link" :aria-label="`Подробнее о товаре: ${product.title}`">
        <img
            class="catalog-item__image"
            :src="product.image"
            :alt="product.title"
            width="984"
            height="984"
            loading="lazy"
            draggable="false"
        >
      </NuxtLink>
      <ul class="catalog-item__sizes" aria-label="Размеры">
        <li v-for="size in product.sizes" :key="size" class="catalog-item__size">{{ size }}</li>
      </ul>
    </div>

    <div class="catalog-item__content">
      <p class="catalog-item__type">{{ product.type }}</p>
      <h2 class="catalog-item__name" :title="product.title">
        <NuxtLink :to="productUrl">{{ product.title }}</NuxtLink>
      </h2>
      <p class="catalog-item__model">{{ product.model }}</p>
      <p class="catalog-item__price">{{ formatPrice(product.price) }}</p>
      <NuxtLink :to="productUrl" class="catalog-item__details" :aria-label="`Подробнее о товаре: ${product.title}`">
        <span>Подробнее</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { demoProduct, formatPrice, type CatalogProduct } from '~/src/data/catalog'

const props = withDefaults(defineProps<{ product?: CatalogProduct }>(), {
  product: () => demoProduct,
})

const productUrl = computed(() => `/products/${props.product.id}`)
</script>

<style scoped lang="scss">
.catalog-item {
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  background: #fff;
  color: #171717;
  transition: box-shadow 200ms ease, border-color 200ms ease;

  &__media {
    position: relative;
    overflow: hidden;
    background: #e9e9e9;
  }

  &__image-link { display: block; }

  &__image {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    object-fit: contain;
    transition: transform 300ms ease;
  }

  &__sizes {
    position: absolute;
    top: 12px;
    left: 12px;
    right: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    list-style: none;
    pointer-events: none;
  }

  &__size {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid rgb(0 0 0 / 8%);
    border-radius: 6px;
    background: rgb(255 255 255 / 94%);
    font-size: 10px;
    font-weight: 700;
    box-shadow: 0 2px 6px rgb(0 0 0 / 5%);
  }

  &__content {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    padding: 14px;
  }

  &__type {
    margin-bottom: 6px;
    color: #686868;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  &__name {
    display: -webkit-box;
    min-height: 2.8em;
    overflow: hidden;
    overflow-wrap: anywhere;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.4;

    a { color: inherit; text-decoration: none; }
  }

  &__model {
    margin-top: 5px;
    color: #686868;
    font-size: 12px;
    line-height: 1.5;
    overflow-wrap: anywhere;
  }

  &__price {
    margin-top: auto;
    padding-top: 18px;
    font-family: system-ui, sans-serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.04em;
  }

  &__details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    width: 100%;
    min-height: 44px;
    margin-top: 12px;
    padding: 10px 12px;
    border-radius: 9px;
    background: #171717;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    transition: background 200ms ease;

    svg { flex-shrink: 0; }
  }

  a:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: -3px;
  }

  @media (hover: hover) {
    &:hover {
      border-color: #c9c9c9;
      box-shadow: 0 8px 24px rgb(0 0 0 / 10%);
    }

    &__image-link:hover img { transform: scale(1.035); }
    &__details:hover { background: #383838; }
  }

  @media (min-width: 640px) {
    &__content { padding: 18px; }
    &__name { font-size: 17px; }
    &__details { font-size: 14px; }
  }

  @media (prefers-reduced-motion: reduce) {
    &, &__image, &__details { transition: none; }
    &__image-link:hover img { transform: none; }
  }
}
</style>
