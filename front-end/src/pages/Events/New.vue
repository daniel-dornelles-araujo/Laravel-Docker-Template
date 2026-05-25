<template>
  <q-page>

    <q-card flat>
      <q-card-section>
        <q-breadcrumbs v-if="eventStore.currentObject">
          <q-breadcrumbs-el label="Events" icon="calendar_month" to="/" />
          <q-breadcrumbs-el label="New event" />
        </q-breadcrumbs>
      </q-card-section>
    </q-card>

    <q-card class="q-mx-xl q-px-xl" flat style="max-width: 800px;">
      <q-card-section class="text-h4">
        Create new event
      </q-card-section>
      <q-card-section>
        <q-input v-model="eventStore.current.title" label="Title"></q-input>
        <q-input autogrow v-model="eventStore.current.description" label="Description"></q-input>
        <form-date v-model="eventStore.current.startDate" label="Start Date"></form-date>
        <form-date v-model="eventStore.current.endDate" label="End Date"></form-date>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat @click="router.push('/Events')">Cancel</q-btn>
        <q-btn color="primary" @click="save">Save</q-btn>
      </q-card-actions>
    </q-card>

    <LoadingIndicator v-model="eventStore.isLoading">Saving event</LoadingIndicator>
  </q-page>
</template>

<script setup>
import LoadingIndicator from 'src/components/LoadingIndicator.vue'
import FormDate from 'src/components/FormDate.vue'
import { useEventStore } from 'stores/event-store.js'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const eventStore = useEventStore()
const router = useRouter()

defineOptions({
  name: 'EventsNew'
})

const save = () => {
  eventStore.postEvent().then(() => {
    router.push({
      name: 'EventView',
      params: { eventId: eventStore.current.id }
    })
  })
}

onMounted(() => {
  eventStore.resetCurrent()
})
</script>
