import { defineStore } from 'pinia'
import axios from 'axios'

export const useSchoolStore = defineStore('school', {
  state: () => ({
    task: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchSchoolTasks() {
      this.loading = true
      try {
        const response = await axios.get('/data.json')
        this.task = response.data
      } catch (err) {
        this.error = 'Kunde inte hämta data'
      } finally {
        this.loading = false
      }
    },
  },
})
