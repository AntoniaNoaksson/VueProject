<script setup>
import { useUserNameStore } from '@/stores/userNameStore'
import img from '@/assets/img/NeuroVän.png'

const user = useUserNameStore()

const Login = (e) => {
  e.preventDefault()
  if (user.userName) {
    user.setUserName(user.userName)
  }
}
</script>

<template>
  <div id="img-container">
    <img :src="img" alt="NeuroVän image" />
  </div>

  <div class="login-div">
    <form class="login" @submit="Login">
      <label for="userName">Förnamn:</label>
      <input
        type="text"
        id="userName"
        v-model="user.userName"
        placeholder="Vänligen skriv ditt namn"
        required
      />
      <button type="submit">Logga in </button>
    </form>
  </div>
</template>
<style scoped>
.login {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
</style>
