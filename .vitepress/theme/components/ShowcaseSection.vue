<script setup>
import { useI18n } from '../composables/useI18n.js'
import { useSiteData } from '../composables/useSiteData.js'
import showcaseItems from '../../data/showcase-items.json'

const { t } = useI18n()
const site = useSiteData()
</script>

<template>
  <section>
    <h2>{{ t.showcase }}</h2>
    <ul class="showcase">
      <li v-for="item in showcaseItems" :key="item.url">
        <a :href="item.url">
          <div class="image-frame">
            <img :src="item.screenshot_path" :alt="item.name" />
          </div>
          <div class="info">
            <img aria-hidden="true" :src="item.icon_path" :alt="item.name" />
            <div class="text-info">
              <div class="title">{{ item.name }}</div>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <a :href="site.showcase_url">{{ t.view_more_vala_projects }}</a>
  </section>
</template>
