<script setup>
import { ref } from 'vue'

const text = ref('')
const cookieValue = ref(null)

const saveText = () => {
  if (text.value) {
    $cookies.set('text', text.value)
    text.value = ''
    alert('Text saved succesfully !')
  } else {
    alert('Enter a text')
  }
}

const getCookie = () => {
  const textFromCookie = $cookies.get('text')
  if (!textFromCookie) {
    alert('No cookie !')
  } else {
    cookieValue.value = textFromCookie
  }
}

const deleteCookie = () => {
  $cookies.remove('text')
  cookieValue.value = null
}
</script>

<template>
  <main>
    <div class="container">
      <form @submit.prevent="">
        <h1>Enter a text</h1>
        <input type="text" name="cookies" id="cookies" v-model="text" />

        <button @click="saveText">Save text in cookies</button>

        <div>
          <button @click="getCookie">Get cookie</button>
          <button @click="deleteCookie">Delete cookie</button>
        </div>
      </form>

      <p v-if="!cookieValue">No cookie saved !</p>
      <p v-else>Cookie value : {{ cookieValue }}</p>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
label {
  font-size: 40px;
}
input {
  font-size: 30px;
}
form > div {
  display: flex;
  gap: 20px;
}
button {
  font-size: 30px;
}
p {
  font-size: 25px;
}
</style>
