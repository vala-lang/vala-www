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
        <li>Clear and familiar syntax - Based on C, C# and Java</li>
        <li>Object-oriented when you need it - Built-in support for classes, interfaces, inheritance and more, but you can also just use procedural programming features instead.</li> 
        <li>Automatic memory management without overhead - Vala uses ref counting by default, so you won't have to worry about managing memory in most programs</li>
        <li>C interoperability - Use GObject-based C Libraries via binding files or call C functions directly from Vala</li>
        <li>Compiles to native binaries - Extremely fast program execution times and no virtual machine or runtime environment is required to be installed for execution</li>
        <li>Modern language features - Type inference, null safety, generics, lambdas, async/await</li>
        <li>First-class <a href="https://docs.gtk.org/gobject/">GObject</a> and <a href="https://www.gtk.org/">GTK</a> support - Optional, but unmatched when you need it</li>
      </ul>
    </div>
    <a :href="localeLink(code, '/about/')">{{ t.learn_more_about_vala }}</a>  
  </section>
</template>
