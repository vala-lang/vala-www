<script setup>
import { useI18n } from '../composables/useI18n.js'
import { useSiteData } from '../composables/useSiteData.js'
import SpriteIcon from './SpriteIcon.vue'

const { t } = useI18n()
const site = useSiteData()
</script>

<template>
  <section>
    <h2 id="community">{{ t.community }}</h2>
    <dl class="features">
      <div>
        <dt>
          <div>
            <SpriteIcon name="discourse" />
            {{ t.forums }}
          </div>
        </dt>
        <dd>{{ t.forums_description }}</dd>
        <dd><a :href="site.socials.discourse">{{ t.discourse_forums }}</a></dd>
      </div>
      <div>
        <dt>
          <div>
            <SpriteIcon name="matrix" />
            {{ t.internals_chat }}
          </div>
        </dt>
        <dd>{{ t.internals_chat_description }}</dd>
        <dd><a :href="site.socials.matrix">{{ t.matrix_room }}</a></dd>
      </div>
      <div>
        <dt>
          <div>
            <SpriteIcon name="discord" />
            {{ t.community_server }}
          </div>
        </dt>
        <dd>{{ t.community_server_description }}</dd>
        <dd><a :href="site.socials.discord">{{ t.discord_server }}</a></dd>
      </div>
    </dl>

    <h2>{{ t.social_media }}</h2>
    <div class="prose">
      <p>{{ t.follow_vala_project }}</p>
      <ul class="social-links">
        <li>
          <a rel="me" :href="site.socials.mastodon">
            <SpriteIcon name="mastodon" />Mastodon
          </a>
        </li>
        <li>
          <a :href="site.socials.twitter">
            <SpriteIcon name="twitter" />Twitter
          </a>
        </li>
        <li>
          <a :href="site.socials.telegram">
            <SpriteIcon name="telegram" />Telegram
          </a>
        </li>
        <li>
          <a :href="site.socials.reddit">
            <SpriteIcon name="reddit" />Reddit
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
