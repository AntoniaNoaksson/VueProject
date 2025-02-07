<script setup>
import { useSchoolStore } from '@/stores/schoolStore'
import { onMounted } from 'vue'
import img from '@/assets/img/NeuroVän.png'

const store = useSchoolStore()

onMounted(() => {
  store.fetchSchoolTasks()
})
</script>
<template>
  <div id="img-container">
    <img :src="img" alt="NeuroVän image" />
  </div>
  <div class="main">
    <h2>Gör dig redo för skolan</h2>

    <div v-if="store.loading">Laddar...</div>

    <div v-if="store.error" class="error">{{ store.error }}</div>

    <div v-if="!store.loading && !store.error">
      <li v-for="(task, index) in store.task" :key="index">
        <strong>{{ task.task }}</strong>

        <p v-if="task.description">{{ task.description }}</p>
      </li>
    </div>
  </div>
</template>
