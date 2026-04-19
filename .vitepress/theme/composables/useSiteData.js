import { useData } from 'vitepress'
import { computed } from 'vue'

export function useSiteData() {
  const { theme } = useData()
  return computed(() => theme.value.siteData)
}
