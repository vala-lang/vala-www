import Layout from './Layout.vue'
import NotFoundLayout from './layouts/NotFoundLayout.vue'
import './styles/main.scss'

export default {
  Layout,
  NotFound: NotFoundLayout,
  enhanceApp({ app }) {
    // No globals yet; kept as an extension point for future plugins.
    void app
  }
}
