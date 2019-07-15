import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import 'prismjs'
import App from './App.vue'

// CSS imports
import '@/assets/css/prism.css'
import '@/assets/css/tailwind.css'
import '@/assets/css/base.css'
const isProduction = process.env.NODE_ENV === 'production'

Vue.use(VueAnalytics, {
  id: 'UA-132852969-3',
  debug: {
    enabled: !isProduction,
    sendHitTask: isProduction
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
