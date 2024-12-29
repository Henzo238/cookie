<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { inject } from 'vue'

const router = useRouter()

const Store = inject('GlobalStore')

const deleteProfile = () => {
  Store.updateUserInfos(null)

  $cookies.remove('userInfos')

  router.push({ name: 'create' })
}
</script>

<template>
  <main>
    <div class="container">
      <h1 v-if="!Store.userInfos.value">
        No profile yet, <RouterLink :to="{ name: 'create' }">create it</RouterLink> !
      </h1>

      <div v-else>
        <h1>Your profile</h1>

        <p><span>Name</span> : {{ Store.userInfos.value.name }}</p>
        <p><span>Email</span> : {{ Store.userInfos.value.email }}</p>

        <button @click="deleteProfile">Delete profile</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
p {
  line-height: 24px;
}
span {
  text-decoration: underline;
  font-weight: bold;
}
a {
  color: teal;
}
button {
  margin-top: 30px;
}
</style>
