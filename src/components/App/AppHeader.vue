<template>
  <header class="app-header">
    <div class="container">
      <div class="logo">
        Kirsanov Shop
      </div>
      <!-- Бургер -->
      <div class="burger" @click="isOpen = !isOpen">
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </div>

      <!-- Навигация -->
      <nav :class="['nav', { open: isOpen }]">
        <NuxtLink to="/" class="nav-link" @click="closeMenu">Главная</NuxtLink>
        <NuxtLink to="/catalog" class="nav-link" @click="closeMenu">Каталог</NuxtLink>
        <NuxtLink to="/reviews" class="nav-link" @click="closeMenu">Отзывы</NuxtLink>
        <NuxtLink to="/how-to-order" class="nav-link" @click="closeMenu">Как заказать</NuxtLink>
        <NuxtLink to="/contacts" class="nav-link" @click="closeMenu">Контакты</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}
</script>

<style scoped lang="scss">
.app-header {
  position: fixed;
  height: 48px;
  width: 100%;
  top: 0;
  left: 0;
  background: #111;
  color: #fff;
  z-index: 1000;

  display: flex;
  align-items: center;

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-weight: 700;
    font-size: 18px;
  }

  /* БУРГЕР */
  .burger {
    display: none;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;

    span {
      width: 24px;
      background: #fff;
      transition: 0.3s;
      &:nth-child(1){
        height: 1px;
      }
      &:nth-child(2){
        height: 1.5px;
      }

      &:nth-child(3){
        height: 2px;
      }
    }

    span.open:nth-child(1) {
      transform: rotate(45deg) translate(4px, 4px);
      height: 2px;
    }

    span.open:nth-child(2) {
      opacity: 0;
    }

    span.open:nth-child(3) {
      transform: rotate(-45deg) translate(4px, -4px);
      height: 2px;
    }
  }

  /* НАВИГАЦИЯ */
  .nav {
    display: flex;
    gap: 16px;

    .nav-link {
      color: #fff;
      text-decoration: none;
      font-size: 14px;

      &.router-link-active {
        border-bottom: 2px solid #fff;
      }
    }
  }

  /* 📱 МОБИЛКА */
  @media (max-width: 768px) {
    .burger {
      display: flex;
    }

    .nav {
      position: fixed;
      top: 48px;
      left: 0;
      width: 100%;
      background: #222;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      padding: 24px 0;
      transform: translateX(100%);
      transition: 0.3s;

      &.open {
        transform: translateX(0);
      }
    }
  }
}
</style>