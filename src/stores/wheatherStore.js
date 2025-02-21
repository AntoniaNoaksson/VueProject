import { defineStore } from 'pinia'
import axios from 'axios'

export const useWheaterStore = defineStore('wheater', {
  state: () => ({
    wheaterConditions: [],
    currentWheater: 'Snow',
    activities: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchWheater() {
      this.loading = true
      try {
        const response = await axios.get('public/weatherdata.json')
        this.wheaterConditions = response.data.wheaterConditions
        
      } catch (err) {
        this.error = 'Kunde inte hämta data'
      } finally {
        this.loading = false
      }
    },
    setCurrentWheater(wheater) {
      this.currentWheater = wheater
    },
  },
})
