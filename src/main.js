/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'
import '/src/css/tachyons/tachyons.css'
import VueApexCharts from "vue3-apexcharts";

// import VueRouter from 'vue-router'

// Initialize the Supabase JS client to access api
// import { createClient } from '@supabase/supabase-js'

// Vue.prototype.$supabase = createClient(import.meta.env.VITE_APP_SUPABASE_URL, import.meta.env.VITE_APP_SUPABASE_KEY)

// Make a request
// const { data: todos, error } = await supabase.from('todos').select('*')



// Currently using fontawesome in CSS only
// /* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

// /* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// /* import specific icons */
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

// /* add icons to the library */
// library.add(faUserSecret)

const app = createApp(App)
.use(VueApexCharts)
.mount('#app')

