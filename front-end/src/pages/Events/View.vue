<template>
  <q-page>
    <q-card flat>
      <q-card-section>
        <q-breadcrumbs v-if="eventStore.currentObject">
          <q-breadcrumbs-el label="Events" icon="calendar_month" to="/" />
          <q-breadcrumbs-el label="Event details" />
        </q-breadcrumbs>
      </q-card-section>
    </q-card>

    <q-card style="max-width: 500px;" v-if="eventStore.currentObject" flat class="q-px-xl q-mx  -xl">
      <q-card-section class="text-h5">
        {{ eventStore.currentObject.title }}
      </q-card-section>

      <q-card-section v-if="eventStore.currentObject.description">
        {{ eventStore.currentObject.description }}
      </q-card-section>

      <q-card-section>
        <div>
          Start date: <strong>{{ eventStore.currentObject.startDate.format('MMM DD, YYYY') }}</strong>
        </div>
        <div>
          End date: <strong>{{ eventStore.currentObject.endDate.format('MMM DD, YYYY') }}</strong>
        </div>

      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat @click="router.push('/Events')">Return to events list</q-btn>
      </q-card-actions>

    </q-card>

    <LoadingIndicator v-model="eventStore.isLoading">Loading event</LoadingIndicator>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'EventsView'
})

import LoadingIndicator from 'src/components/LoadingIndicator.vue'
import { useEventStore } from 'src/stores/event-store'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const eventStore = useEventStore()

const loadEvent = () => {
  const eventId = route.params.eventId
  eventStore.getEvent(eventId)
}

onMounted(() => {
  loadEvent()
})

</script>
