import Layout from './Layout.vue'
import NotFoundLayout from './layouts/NotFoundLayout.vue'
import PredefinedCtaStack from './components/PredefinedCtaStack.vue'
import CtaStack from './components/CtaStack.vue'
import './styles/main.scss'

export default {
  Layout,
  NotFound: NotFoundLayout,
  enhanceApp({ app }) {
    app.component('PredefinedCtaStack', PredefinedCtaStack)
    app.component('CtaStack', CtaStack)
  }
}
