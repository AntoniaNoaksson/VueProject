<script setup>
import { useUserNameStore } from '@/stores/userNameStore'
import img from '@/assets/img/NeuroVän.png'

const user = useUserNameStore()
</script>
<template>
  <div id="img-container">
    <img :src="img" alt="NeuroVän image" />
  </div>
  <div id="welcome">
    <h1>Godmorgon {{ user.userName || 'Användare' }}</h1>
    <p>Hoppas du är redo att starta denna dag</p>
  </div>
  <div id="choice">
    <h2>Vad ska du göra idag?</h2>
    <a href="/school">
      <button id="school">Gå till skolan</button>
    </a>
    <a href="/activity">
      <button id="activity">Fritid</button>
    </a>
  </div>
</template>
<style></style>
