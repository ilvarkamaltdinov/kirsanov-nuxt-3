<template>
  <footer class="app-footer">
    <div class="container app-footer__container">
      <div class="app-footer__content">
        <section class="app-footer__section" aria-labelledby="footer-socials-title">
          <h2 id="footer-socials-title" class="app-footer__title">Мы в соцсетях</h2>
          <ul class="app-footer__socials">
            <li v-for="social in socials" :key="social.name">
              <a
                  v-if="social.href"
                  :href="social.href"
                  class="app-footer__social"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`${social.name} — открыть в новой вкладке`"
              >
                <img :src="social.image" alt="" width="32" height="32">
                <span>{{ social.name }}</span>
              </a>
              <span v-else class="app-footer__social app-footer__social--unavailable" :title="`Ссылка на ${social.name} пока не указана`">
                <img :src="social.image" alt="" width="32" height="32">
                <span>{{ social.name }}</span>
              </span>
            </li>
          </ul>
        </section>

        <section class="app-footer__section" aria-labelledby="footer-contacts-title">
          <h2 id="footer-contacts-title" class="app-footer__title">Контакты</h2>
          <address class="app-footer__details">
            <a v-if="phone" :href="`tel:${phone.replace(/[^\d+]/g, '')}`" class="app-footer__link">{{ phone }}</a>
            <a v-if="email" :href="`mailto:${email}`" class="app-footer__link">{{ email }}</a>
            <NuxtLink to="/contacts" class="app-footer__link">Связаться с нами</NuxtLink>
          </address>
        </section>

        <section class="app-footer__section" aria-labelledby="footer-address-title">
          <h2 id="footer-address-title" class="app-footer__title">Адрес магазина</h2>
          <address class="app-footer__details">
            <p>{{ address || 'Адрес магазина уточняется' }}</p>
            <a v-if="mapUrl" :href="mapUrl" class="app-footer__link" target="_blank" rel="noopener noreferrer">
              Посмотреть на карте<span class="app-footer__sr-only"> — открыть в новой вкладке</span>
            </a>
          </address>
        </section>
      </div>

      <div class="app-footer__brands">
        <ul class="app-footer__brand-list" aria-label="Бренды магазина">
          <li v-for="brand in brands" :key="brand.image" class="app-footer__brand">
            <img :src="`/images/brands/${brand.image}`" :alt="brand.name" width="120" height="66" loading="lazy">
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  telegramUrl?: string
  vkUrl?: string
  instagramUrl?: string
  phone?: string
  email?: string
  address?: string
  mapUrl?: string
}>(), {
  telegramUrl: '',
  vkUrl: '',
  instagramUrl: '',
  phone: '',
  email: '',
  address: '',
  mapUrl: '',
})

const socials = computed(() => [
  { name: 'Telegram', image: '/images/soc/tg.svg', href: props.telegramUrl },
  { name: 'VK', image: '/images/soc/vk.svg', href: props.vkUrl },
  { name: 'Instagram', image: '/images/soc/instagram.svg', href: props.instagramUrl },
])

const brands = [
  { name: 'Adidas Originals', image: 'adidas-originals.svg' },
  { name: 'New Balance', image: 'new-balance.svg' },
  { name: 'Nike', image: 'nike.svg' },
  { name: 'Stone Island', image: 'stone-island.svg' },
  { name: 'The North Face', image: 'the-north-face.svg' },
]
</script>

<style scoped lang="scss">
.app-footer {
  background: #111;
  color: #fff;
  font-size: 14px;
  line-height: 1.6;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px 16px 24px;
  }

  &__content {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
  }

  &__section { min-width: 0; }

  &__title {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.4;
  }

  &__socials, &__brand-list { list-style: none; }

  &__socials {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__social {
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    padding: 6px 10px;
    border: 1px solid #383838;
    border-radius: 4px;
    color: #fff;
    text-decoration: none;

    img { display: block; flex-shrink: 0; }
    &--unavailable { color: #bdbdbd; }
  }

  &__details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    color: #bdbdbd;
    font-style: normal;
    overflow-wrap: anywhere;
    user-select: text;
    -webkit-user-select: text;

    > * {
      max-width: 100%;
      user-select: text;
      -webkit-user-select: text;
    }
  }

  &__link {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    color: #ddd;
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  a:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 4px;
    border-radius: 4px;
  }

  &__brands {
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid #383838;
  }

  &__brand-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }

  &__brand {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 72px;
    padding: 8px;
    border-radius: 4px;
    background: #f5f5f5;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  @media (hover: hover) {
    a.app-footer__social:hover { background: #222; border-color: #777; }
    &__link:hover { color: #fff; }
  }

  @media (min-width: 640px) {
    &__container { padding-top: 40px; padding-bottom: 32px; }
    &__content { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px; }
    &__section:first-child { grid-column: 1 / -1; }
    &__brands { margin-top: 40px; }
  }

  @media (min-width: 1024px) {
    &__content { grid-template-columns: 1.4fr 1fr 1fr; gap: 40px; }
    &__section:first-child { grid-column: auto; }
    &__brand-list { gap: 24px; }
  }
}
</style>
