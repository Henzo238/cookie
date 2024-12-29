<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }">Accueil</RouterLink>
      <RouterLink :to="{ name: 'create' }">Create</RouterLink>
      <RouterLink :to="{ name: 'profile' }">Profile</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  justify-content: center;
  align-items: center;
  justify-items: center;
  display: flex;
  border-bottom: 2px solid black;
  height: 100px;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  font-size: 27px;
}
</style>
