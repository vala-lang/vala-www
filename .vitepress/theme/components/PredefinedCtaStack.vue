<script setup>
import { useI18n } from '../composables/useI18n.js'
import { useSiteData } from '../composables/useSiteData.js'
import CtaStack from './CtaStack.vue'

const { t } = useI18n()
const site = useSiteData()
</script>

<template>
  <CtaStack
    :primary-content="t.get_started"
    :primary-href="site.tutorial_url"
    :secondary-content="t.view_source_code"
    :secondary-href="site.language_source_code_url"
  />
</template>
