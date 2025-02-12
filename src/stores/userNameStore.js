import { defineStore } from 'pinia'

export const useUserNameStore = defineStore('user', {
  state: () => ({
    userName: '',
  }),

  actions: {
    setUserName(newName) {
      this.userName = newName
    },
  },
})
