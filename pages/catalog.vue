<template>
  <div class="catalog-page">
    <div class="container">
      <div class="catalog-page__grid">
        <catalog-card class="catalog-page__grid__item" v-for="i in 24" :key="i"/>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

import CatalogCard from "~/src/components/Catalog/CatalogCard.vue";
</script>

<style scoped lang="scss">
.catalog-page {
  background: rgb(135 135 135 / 0.45);
  padding: 16px 0 32px;

  > .container { max-width: 1200px; margin: 0 auto; }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;

    &__item{
      min-width: 0;
    }
  }

  @media (min-width: 640px) {
    &__grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
  }

  @media (min-width: 1024px) {
    &__grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  }
}
</style>
