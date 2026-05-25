import { defineStore } from 'pinia'
import { Notify } from 'quasar'

export const useResponseStore = defineStore('response', {
  actions: {
    logError (err) {
      let message = err
      if (
        err.response &&
        err.response.data
      ) {
        message = err.response.data.message
      }

      Notify.create({
        message,
        color: 'red'
      })
    },
    logSuccess (message) {
      Notify.create({
        message,
        color: 'green'
      })
    }
  }
})
