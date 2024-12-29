import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

const app = createApp(App)

app.use(router)
app.use(VueCookies)

const userInfos = ref(null)

const updateUserInfos = (name, email) => {
  if (name && email) {
    userInfos.value = {
      name: name,
      email: email,
    }
  } else {
    userInfos.value = null
  }
}

app.provide('GlobalStore', { userInfos: userInfos, updateUserInfos: updateUserInfos })
app.mount('#app')
