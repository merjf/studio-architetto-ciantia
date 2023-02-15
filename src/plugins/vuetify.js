import Vue from 'vue'
import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#747474',
        secondary: '#6bc6fa',
        accent: '#fff',
        error: '#b71c1c',
      },
    },
  },
})
Vue.use(Vuetify)

export default vuetify