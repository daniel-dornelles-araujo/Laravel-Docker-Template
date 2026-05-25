import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash'
import CalendarApiClient from 'src/clients/CalendarApiClient'
import { useResponseStore } from './response-store'
import dayjs from 'dayjs'

const defaultState = {
  eventsCollection: [],
  current: {
    id: '',
    title: '',
    description: '',
    startDate: null,
    endDate: null
  },
  isLoading: false,
  errorMessage: null,
  successMessage: null
}

const responseStore = useResponseStore()

export const useEventStore = defineStore('event', {
  state: () => cloneDeep(defaultState),

  actions: {
    getEvents () {
      this.isLoading = true
      this.current = null
      return CalendarApiClient.get('/events')
        .then((response) => {
          this.eventsCollection = response.data
        }).catch((err) => {
          responseStore.logError(err)
        }).finally(() => {
          this.isLoading = false
        })
    },

    getEvent (eventId) {
      if (!eventId) {
        return false
      }
      this.isLoading = true
      this.current = null
      return CalendarApiClient.get(`/events/${eventId}`)
        .then((response) => {
          this.current = response.data
        }).catch((err) => {
          responseStore.logError(err)
        }).finally(() => {
          this.isLoading = false
        })
    },

    postEvent () {
      this.isLoading = true
      return CalendarApiClient.post('/events', this.current)
        .then((response) => {
          this.current = response.data
          responseStore.logSuccess('Event saved successfully')
        }).catch((err) => {
          responseStore.logError(err)
        }).finally(() => {
          this.isLoading = false
        })
    },

    async resetCurrent () {
      this.current = cloneDeep(defaultState.current)
    }
  },

  getters: {
    events () {
      return this.eventsCollection.map(e => {
        return {
          id: e.id,
          title: e.title,
          description: e.description,
          startDate: dayjs(e.startDate),
          endDate: dayjs(e.endDate)
        }
      })
    },

    currentObject () {
      if (!this.current) {
        return null
      }
      return {
        id: this.current.id,
        title: this.current.title,
        description: this.current.description,
        startDate: dayjs(this.current.startDate),
        endDate: dayjs(this.current.endDate)
      }
    }
  }
})
