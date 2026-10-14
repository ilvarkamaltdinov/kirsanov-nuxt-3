<template>
  <app-header/>
  <div class="wrapper">
    <NuxtPage/>
  </div>
  <AppFooter/>
</template>
<script setup lang="ts">

import AppHeader from "~/src/components/App/AppHeader.vue";
import AppFooter from "~/src/components/App/AppFooter.vue";
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
}

body {
  background: #333;
}

.wrapper {
  display: grid;
  min-height: 100vh;
  min-height: 100svh;
  padding-top: 48px;
  overflow: hidden;
  background: url("/images/noisy.png");
  background-attachment: fixed;

  // Обе страницы занимают одну ячейку и движутся одновременно.
  > * {
    grid-area: 1 / 1;
    min-width: 0;
  }
}

.page-slide-forward-enter-active,
.page-slide-forward-leave-active,
.page-slide-backward-enter-active,
.page-slide-backward-leave-active {
  transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

.page-slide-forward-leave-active,
.page-slide-backward-leave-active {
  pointer-events: none;
}

.page-slide-forward-enter-from,
.page-slide-backward-leave-to {
  transform: translate3d(100%, 0, 0);
}

.page-slide-forward-leave-to,
.page-slide-backward-enter-from {
  transform: translate3d(-100%, 0, 0);
}

@media (prefers-reduced-motion: reduce) {
  .page-slide-forward-enter-active,
  .page-slide-forward-leave-active,
  .page-slide-backward-enter-active,
  .page-slide-backward-leave-active {
    transition: none;
    transform: none;
    will-change: auto;
  }
}
.container{
  padding: 0 16px;
  width: 100%;
}

.h2-title {
  color: #fff;
  font-size: 18px;
}

.title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
