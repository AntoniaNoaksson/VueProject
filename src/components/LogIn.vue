<script setup>
import img from '@/assets/img/NeuroVän.png'
</script>

<template>
  <div id="img-container">
    <img :src="img" alt="NeuroVän image" />
  </div>

  <div class="login-div">
    <form class="login">
      <label for="userName">Förnamn:</label>
      <input
        type="text"
        id="userName"
        v-model="username"
        placeholder="Vänligen skriv ditt namn"
        required
      />
      <button type="submit" @click="login">Logga in</button>
    </form>
  </div>
</template>
<style></style>
