<script setup>
import { computed } from 'vue'
import { Content, useData } from 'vitepress'
import { useI18n, localeLink } from '../composables/useI18n.js'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const { t, code } = useI18n()
const { frontmatter } = useData()

const authors = computed(() => {
  const list = frontmatter.value.authors
  if (Array.isArray(list) && list.length > 0) return list.join(', ')
  return 'The Vala Team'
})

function formatDate(iso) {
  if (!iso) return ''
  try {
    return new Date(iso).toISOString().slice(0, 10)
  } catch {
    return iso
  }
}
</script>

<template>
  <SiteHeader />
  <div class="container">
    <main id="main-content">
      <article class="blog-post">
        <header>
          <h1>{{ frontmatter.title }}</h1>
          <p>{{ frontmatter.description }}</p>
          <span>{{ authors }}</span>
          <time :datetime="frontmatter.date">{{ formatDate(frontmatter.date) }}</time>
          <a :href="localeLink(code, '/blog/')">{{ t.blog }}</a>
        </header>
        <Content />
      </article>
    </main>
  </div>
  <SiteFooter />
</template>
