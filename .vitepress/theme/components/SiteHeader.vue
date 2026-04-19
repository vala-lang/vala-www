<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute } from 'vitepress'
import { useI18n, localeLink } from '../composables/useI18n.js'
import { useSiteData } from '../composables/useSiteData.js'
import ValaWordmark from './ValaWordmark.vue'

const props = defineProps({
  type: { type: String, default: 'standard' },
  tagline: { type: String, default: '' }
})

const { t, code } = useI18n()
const site = useSiteData()
const route = useRoute()

const menuOpen = ref(false)
const menuRef = ref(null)

const links = [
  (l) => ({ text: t.value.about, href: localeLink(code.value, '/about/') }),
  () => ({ text: t.value.documentation, href: site.value.docs_url }),
  () => ({ text: t.value.community, href: `${localeLink(code.value, '/')}#community` }),
  () => ({ text: t.value.blog, href: localeLink(code.value, '/blog/') }),
  () => ({ text: t.value.source_code, href: site.value.language_source_code_url })
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  nextTick(() => applyMenuHeight())
}

function applyMenuHeight() {
  const el = menuRef.value
  if (!el) return
  if (menuOpen.value) {
    el.style.maxHeight = el.scrollHeight + 'px'
  } else {
    el.style.maxHeight = null
  }
}

let hadJsEnabled = false
onMounted(() => {
  hadJsEnabled = document.body.classList.contains('js-enabled')
  if (!hadJsEnabled) document.body.classList.add('js-enabled')
})
onUnmounted(() => {
  if (!hadJsEnabled) document.body.classList.remove('js-enabled')
})

watch(
  () => route.path,
  () => {
    menuOpen.value = false
    nextTick(() => applyMenuHeight())
  }
)
</script>

<template>
  <header :class="{ extended: type === 'extended' }">
    <div>
      <nav>
        <div>
          <a :aria-label="t.home" :href="localeLink(code, '/')">
            <ValaWordmark />
          </a>
        </div>
        <ul ref="menuRef" :class="{ open: menuOpen }">
          <li v-for="(fn, i) in links" :key="i">
            <a :href="fn().href">{{ fn().text }}</a>
          </li>
        </ul>
        <button :aria-label="t.home" class="menu-toggle" @click="toggleMenu">
          <span class="hamburger" :class="{ open: menuOpen }"></span>
        </button>
        <div>
          <a :href="site.tutorial_url" class="navbar-button">{{ t.get_started }}</a>
        </div>
      </nav>
      <h1 v-if="type === 'extended' && tagline">{{ tagline }}</h1>
    </div>
  </header>
</template>
