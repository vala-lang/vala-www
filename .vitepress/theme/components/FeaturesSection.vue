<script setup>
import { useI18n, localeLink } from '../composables/useI18n.js'
import SpriteIcon from './SpriteIcon.vue'

const { t, code } = useI18n()
</script>

<template>
  <section>
    <h2>{{ t.why_vala }}</h2>
    <dl class="features">
      <div>
        <dt>
          <div>
            <SpriteIcon name="gears" />
            {{ t.productivity }}
          </div>
        </dt>
        <dd v-html="t.productivity_description" />
      </div>
      <div>
        <dt>
          <div>
            <SpriteIcon name="rocket" />
            {{ t.performance }}
          </div>
        </dt>
        <dd>{{ t.performance_description }}</dd>
      </div>
      <div>
        <dt>
          <div>
            <SpriteIcon name="open-source" />
            {{ t.open_source }}
          </div>
        </dt>
        <dd>{{ t.open_source_description }}</dd>
        <dd>
          <a href="https://docs.vala.dev/tooling/index.html">
            {{ t.tooling_documentation }}
          </a>
        </dd>
      </div>
    </dl>
    <a :href="localeLink(code, '/about/')">{{ t.learn_more_about_vala }}</a>
  </section>
</template>
