<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const Store = inject('GlobalStore')

const name = ref('')
const email = ref('')

const handleSubmit = () => {
  Store.updateUserInfos(name.value, email.value)

  name.value = ''
  email.value = ''

  router.push({ name: 'profile' })
}
</script>

<template>
  <main>
    <div class="container">
      <h1>Create your profile</h1>

      <form @submit.prevent="handleSubmit" ref="form">
        <label for="name">Name :</label>
        <input type="text" id="name" placeholder="Toto" v-model="name" />

        <label for="email">Email :</label>
        <input type="text" id="email" placeholder="toto@mail.com" v-model="email" />

        <button>Save informations</button>
      </form>
    </div>
  </main>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
