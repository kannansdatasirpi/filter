
import { createApp } from 'vue'
import App from './App.vue'
// import Vue from 'vue'

const app = createApp(App)

// Vue.filters('Ucase',function(val){
//     return val.toUppercase();
// })

app.config.globalProperties.$filters = {
    currencyUSD(value) {
    //   return  value.toUpperCase()
      return '$' + value
      
    }
  }
app.mount('#app')