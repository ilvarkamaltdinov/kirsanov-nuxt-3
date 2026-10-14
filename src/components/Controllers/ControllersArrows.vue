<template>
  <div class="controllers-arrows">
    <button
        class="controllers-arrows__arrow controllers-arrows__arrow--prev"
        :class="classes[0]"
        type="button"
        aria-label="Предыдущий бренд"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14 6L8 12L14 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/>
      </svg>
    </button>
    <button
        class="controllers-arrows__arrow controllers-arrows__arrow--next"
        :class="classes[1]"
        type="button"
        aria-label="Следующий бренд"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M10 6L16 12L10 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>


<script setup lang="ts">
  import type { PropType } from 'vue'

  defineProps({
    classes: {
      type: Array as PropType<string[]>,
      default: () => ['prev', 'next'],
    }
  })
</script>

<style scoped lang="scss">
.controllers-arrows {
  display: flex;
  gap: 4px;
  &__arrow {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 2px;
    background: #222;
    color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: background 0.2s, opacity 0.2s;

    &:hover:not(:disabled) {
      background: #444;
    }

    &:focus-visible {
      outline: 2px solid #222;
      outline-offset: 3px;
    }

    &:disabled {
      opacity: 0.35;
      cursor: default;
    }

    &.swiper-button-lock {
      display: none;
    }
  }
}
</style>
