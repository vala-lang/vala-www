<script setup>
import { computed, watchEffect, onUnmounted } from 'vue'
import { useData } from 'vitepress'
import { useI18n } from './composables/useI18n.js'
import PageLayout from './layouts/PageLayout.vue'
import HomeLayout from './layouts/HomeLayout.vue'
import BlogLayout from './layouts/BlogLayout.vue'
import PostLayout from './layouts/PostLayout.vue'
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
  blog: BlogLayout,
  post: PostLayout,
  'not-found': NotFoundLayout
}

const currentLayout = computed(() => layouts[layoutName.value] ?? PageLayout)

// Expose current layout as a body class so page-specific stylesheets can
// scope their rules (mirrors the old Zola per-template CSS loading).
if (typeof document !== 'undefined') {
  const LAYOUT_CLASSES = ['layout-page', 'layout-home', 'layout-blog', 'layout-post', 'layout-not-found']
  let previous = null
  watchEffect(() => {
    const cls = `layout-${layoutName.value}`
    if (previous === cls) return
    document.body.classList.remove(...LAYOUT_CLASSES)
    document.body.classList.add(cls)
    previous = cls
  })
  onUnmounted(() => {
    document.body.classList.remove(...LAYOUT_CLASSES)
  })
}
</script>

<template>
  <a id="bypass-block" href="#main-content">{{ t.bypass_block }}</a>
  <component :is="currentLayout" />
</template>
