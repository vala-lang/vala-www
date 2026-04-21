<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { data as allPosts } from '../data/posts.data.js'
import { useI18n, localeLink } from '../composables/useI18n.js'

const { t, code } = useI18n()
const heroSrc = withBase('/img/vala-hero.png')

const latest = computed(() => {
  const scoped = allPosts.filter((p) => p.locale === code.value)
  const pool = scoped.length > 0 ? scoped : allPosts.filter((p) => p.locale === 'en')
  return pool.slice(0, 3)
})

function authors(post) {
  const list = post.frontmatter.authors
  if (Array.isArray(list) && list.length > 0) return list.join(', ')
  return 'The Vala Team'
}

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
  <section>
    <h2>{{ t.blog }}</h2>
    <div class="post-previews">
      <a
        v-for="post in latest"
        :key="post.url"
        :href="post.url"
        class="post-preview"
      >
        <img :src="heroSrc" :alt="t.default_image_description" />
        <div>
          <div>{{ post.frontmatter.title }}</div>
          <span>{{ authors(post) }}</span>
          <time :datetime="post.frontmatter.date">{{ formatDate(post.frontmatter.date) }}</time>
        </div>
      </a>
    </div>
    <a :href="localeLink(code, '/blog/')">{{ t.view_blog }}</a>
  </section>
</template>
