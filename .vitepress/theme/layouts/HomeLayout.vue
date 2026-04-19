<script setup>
import { Content } from 'vitepress'
import { useI18n } from '../composables/useI18n.js'
import { useSiteData } from '../composables/useSiteData.js'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import CtaStack from '../components/CtaStack.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import UsagesSection from '../components/UsagesSection.vue'
import LatestBlog from '../components/LatestBlog.vue'
import VersionsSection from '../components/VersionsSection.vue'
import ShowcaseSection from '../components/ShowcaseSection.vue'
import CommunitySection from '../components/CommunitySection.vue'

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

      <FeaturesSection />
      <UsagesSection />
      <LatestBlog />
      <VersionsSection />
      <ShowcaseSection />
      <CommunitySection />

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

<style lang="scss">
@use '../../../sass/css/index';
</style>
