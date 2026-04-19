<script setup>
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n.js'
import { useSiteData } from '../composables/useSiteData.js'

const { t } = useI18n()
const site = useSiteData()

const showStable = computed(() => site.value.versions.stable !== site.value.versions.lts)
</script>

<template>
  <section>
    <h2>{{ t.current_versions }}</h2>
    <ul>
      <li v-if="showStable">
        <a
          :href="`https://gitlab.gnome.org/GNOME/vala/-/blob/${site.versions.stable}/NEWS`"
        >
          Vala {{ site.versions.stable }}
        </a>
        ({{ t.stable }})
      </li>
      <li>
        <a
          :href="`https://gitlab.gnome.org/GNOME/vala/-/blob/${site.versions.lts}/NEWS`"
        >
          Vala {{ site.versions.lts }}
        </a>
        ({{ t.stable_lts }})
      </li>
      <li>
        <a href="https://gitlab.gnome.org/GNOME/vala/-/commits/main">
          Vala {{ site.versions.devel }}
        </a>
        ({{ t.devel }})
      </li>
    </ul>
    <a :href="site.installation_guide">{{ t.install_how }}</a>
  </section>
</template>
