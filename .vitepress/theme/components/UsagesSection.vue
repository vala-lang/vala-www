<script setup>
import { useI18n } from '../composables/useI18n.js'
import { useSiteData } from '../composables/useSiteData.js'
import SpriteIcon from './SpriteIcon.vue'

const { t } = useI18n()
const site = useSiteData()
</script>

<template>
  <section>
    <h2>{{ t.what_can_you_build }}</h2>
    <dl class="features">
      <div>
        <dt>
          <div>
            <SpriteIcon name="gui-app" />
            {{ t.gui_applications }}
          </div>
        </dt>
        <dd>{{ t.gui_applications_description }}</dd>
        <dd>
          <ul>
            <li>
              <a :href="site.features.gnome_developer_tutorial">{{ t.gnome_tutorial }}</a>
            </li>
            <li>
              <a :href="site.features.elementary_app_tutorial">{{ t.elementary_tutorial }}</a>
            </li>
          </ul>
        </dd>
      </div>
      <div>
        <dt>
          <div>
            <SpriteIcon name="terminal" />
            <span>{{ t.command_line_programs }}</span>
          </div>
        </dt>
        <dd>{{ t.command_line_programs_description }}</dd>
      </div>
      <div>
        <dt>
          <div>
            <SpriteIcon name="library" />
            {{ t.libraries }}
          </div>
        </dt>
        <dd>{{ t.libraries_description }}</dd>
      </div>
    </dl>
  </section>
</template>
