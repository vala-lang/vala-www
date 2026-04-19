<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { useI18n } from './composables/useI18n.js'
import PageLayout from './layouts/PageLayout.vue'
import HomeLayout from './layouts/HomeLayout.vue'
import NotFoundLayout from './layouts/NotFoundLayout.vue'

const { frontmatter, page } = useData()
const { t } = useI18n()

const layoutName = computed(() => {
  if (page.value.isNotFound) return 'not-found'
  return frontmatter.value.layout ?? 'page'
})

const layouts = {
  page: PageLayout,
  home: HomeLayout,
  'not-found': NotFoundLayout
}

const currentLayout = computed(() => layouts[layoutName.value] ?? PageLayout)
</script>

<template>
  <a id="bypass-block" href="#main-content">{{ t.bypass_block }}</a>
  <component :is="currentLayout" />
</template>
