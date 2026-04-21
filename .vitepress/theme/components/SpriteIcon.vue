<script setup>
import { withBase } from 'vitepress'

const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, default: '' },
  ariaHidden: { type: Boolean, default: true }
})

const href = withBase(`/icons/spritemap.svg#sprite-${props.name}`)
</script>

<template>
  <svg
    class="icon"
    :aria-hidden="ariaHidden ? 'true' : null"
    :aria-label="label || null"
  >
    <use :href="href" />
  </svg>
</template>
