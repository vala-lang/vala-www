<script setup>
import { Content } from 'vitepress'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <div class="container">
    <main id="main-content">
      <article>
        <Content />
      </article>
    </main>
  </div>
  <SiteFooter />
</template>
