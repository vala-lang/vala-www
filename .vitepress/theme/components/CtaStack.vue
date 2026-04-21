<script setup>
defineProps({
  primaryContent: { type: String, required: true },
  primaryHref: { type: String, required: true },
  secondaryContent: { type: String, default: '' },
  secondaryHref: { type: String, default: '' }
})
</script>

<template>
  <div class="cta-stack">
    <a :href="primaryHref">{{ primaryContent }}</a>
    <a v-if="secondaryContent && secondaryHref" :href="secondaryHref">
      {{ secondaryContent }}
    </a>
  </div>
</template>
