<script setup>
import { useI18n, localeLink } from '../composables/useI18n.js'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const { t, code } = useI18n()
</script>

<template>
  <SiteHeader />
  <div class="container error-404">
    <main id="main-content">
      <h1>{{ t.page_not_found }}</h1>
      <p>{{ t.page_not_found_description }}</p>
      <a :href="localeLink(code, '/')">{{ t.go_home }}</a>
    </main>
  </div>
  <SiteFooter />
</template>
