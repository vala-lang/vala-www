<script setup>
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n.js'
import { useSiteData } from '../composables/useSiteData.js'

const { t } = useI18n()
const site = useSiteData()

</script>

<template>
  <section>
    <h2>{{ t.roadmap }}</h2>
    <ul>
      <li>
        <a
          :href="site.roadmap_url"
        >
          {{ t.roadmap }}
        </a>
      </li>
    </ul>
  </section>
</template>
