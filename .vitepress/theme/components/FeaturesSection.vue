<script setup>
import { useI18n, localeLink } from '../composables/useI18n.js'
import SpriteIcon from './SpriteIcon.vue'

const { t, code } = useI18n()
</script>

<template>
  <section>
    <h2>{{ t.why_vala }}</h2>
    <div class="prose">
      <ul class="bulleted-list">
        <li>{{ t.why_vala_syntax }}</li>
        <li>{{ t.why_vala_oop }}</li>
        <li>{{ t.why_vala_memory }}</li>
        <li>{{ t.why_vala_c_interop }}</li>
        <li>{{ t.why_vala_native }}</li>
        <li>{{ t.why_vala_modern_features }}</li>
        <li v-html="t.why_vala_gobject"></li>
      </ul>
    </div>
    <a :href="localeLink(code, '/about/')">{{ t.learn_more_about_vala }}</a>  
  </section>
</template>
