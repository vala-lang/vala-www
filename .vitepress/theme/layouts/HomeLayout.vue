<script setup>
// Placeholder home layout — sections are wired up in a follow-up commit.
// For now it renders the hero header + cta + the markdown body so stage 3
// can be validated standalone by running `bun run dev`.
import { useData } from 'vitepress'
import { Content } from 'vitepress'
import { useI18n } from '../composables/useI18n.js'
import { useSiteData } from '../composables/useSiteData.js'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import CtaStack from '../components/CtaStack.vue'

const { t } = useI18n()
const site = useSiteData()
</script>

<template>
  <SiteHeader type="extended" :tagline="t.tagline" />
  <div class="container">
    <main id="main-content">
      <Content />

      <CtaStack
        :primary-content="t.get_started"
        :primary-href="site.tutorial_url"
        :secondary-content="t.view_source_code"
        :secondary-href="site.language_source_code_url"
      />
    </main>
  </div>
  <SiteFooter />
</template>
