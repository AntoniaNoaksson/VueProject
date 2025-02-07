<script setup>
import img from '@/assets/img/NeuroVän.png'
</script>
<template>
  <div id="img-container">
    <img :src="img" alt="NeuroVän image" />
  </div>
  <div id="welcome">
    <h1>Godmorgon {{ userName }}</h1>
    <p>Hoppas du är redo att starta denna dag</p>
  </div>
  <div id="choice">
    <h2>Vad ska du göra idag?</h2>
    <a id="school" href="/school">
      <button type="button">Gå till skolan</button>
    </a>
    <a id="activity" href="/activity">
      <button type="button">Fritid</button>
    </a>
  </div>
</template>
<style></style>
