<script setup>
import { useI18n, localeLink } from '../composables/useI18n.js'
import SpriteIcon from './SpriteIcon.vue'

const { t, code } = useI18n()
</script>

<template>
  <section>
    <h2>{{ t.why_vala }}</h2>
    <div class="prose">
      <ul>
        <li>Clear and familiar syntax - productive from the first day</li>
        <li>Object-oriented when you need it - classes, interfaces, inheritance, or just functions and structs</li> 
        <li>Automatic memory management - without a garbage collector</li>
        <li>Seamless C interoperability - use existing C libraries naturally</li>
        <li>Compiles to native binaries - no VM, no runtime environment to install</li>
        <li>Modern language features - type inference, null safety, generics, lambdas, async/await</li>
        <li>First-class GObject and GTK support - optional, but unmatched when you need it</li>
      </ul>
    </div>
    <a :href="localeLink(code, '/about/')">{{ t.learn_more_about_vala }}</a>  
  </section>
</template>
