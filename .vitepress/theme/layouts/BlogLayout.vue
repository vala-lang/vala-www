<script setup>
import { computed, ref } from 'vue'
import { data as allPosts } from '../data/posts.data.js'
import { useI18n } from '../composables/useI18n.js'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const PAGE_SIZE = 10

const { t, code, defaultLocale } = useI18n()

const localePosts = computed(() => {
  const scoped = allPosts.filter((p) => p.locale === code.value)
  if (scoped.length > 0) return scoped
  // Fall back to English posts for locales that haven't translated any yet.
  return allPosts.filter((p) => p.locale === defaultLocale)
})

const page = ref(1)
const totalPages = computed(() => Math.max(1, Math.ceil(localePosts.value.length / PAGE_SIZE)))

const pagePosts = computed(() => {
  const start = (page.value - 1) * PAGE_SIZE
  return localePosts.value.slice(start, start + PAGE_SIZE)
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
  <SiteHeader />
  <div class="container">
    <main id="main-content">
      <section class="standalone">
        <h1>{{ t.blog }}</h1>
        <ul class="blog-posts">
          <li v-for="post in pagePosts" :key="post.url">
            <h2>
              <a :href="post.url">{{ post.frontmatter.title }}</a>
            </h2>
            <p>{{ post.frontmatter.description }}</p>
            <span class="author">{{ authors(post) }}</span>
            <time :datetime="post.frontmatter.date">{{ formatDate(post.frontmatter.date) }}</time>
          </li>
        </ul>
      </section>

      <nav v-if="totalPages > 1" class="pagination">
        <button
          v-if="page > 1"
          class="previous"
          type="button"
          @click="page = page - 1"
        >
          ‹ Previous
        </button>
        <button
          v-if="page < totalPages"
          class="next"
          type="button"
          @click="page = page + 1"
        >
          Next ›
        </button>
      </nav>
    </main>
  </div>
  <SiteFooter />
</template>

<style lang="scss">
@use '../../../sass/css/blog';
</style>
