/* Set up using Vue 3 */
import { createApp } from 'vue'

import App from './App.vue'

// import VueRouter from 'vue-router'
import '/src/css/tachyons/tachyons.css'

// Currently using fontawesome in CSS only
// /* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

// /* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// /* import specific icons */
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

// /* add icons to the library */
// library.add(faUserSecret)

createApp(App)
.mount('#app')

