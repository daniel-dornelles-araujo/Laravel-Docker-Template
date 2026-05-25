<template>
  <q-card>
    <q-card-section class="q-pa-sm q-ma-sm text-h4">
      {{ props.event.title }}
    </q-card-section>
    <q-card-section class="q-pa-sm q-ma-sm" v-if="props.event.description">
      {{ props.event.description }}
    </q-card-section>
    <q-card-section class="q-pa-sm q-ma-sm">
      From <strong>{{ props.event.startDate.format('MMM DD, YYYY') }}</strong>
      to <strong>{{ props.event.endDate.format('MMM DD, YYYY') }}</strong>
    </q-card-section>
    <q-card-section>
      <q-btn @click="loadEvent(props.event.id)">View details</q-btn>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  event: {
    required: true
  }
})

const router = useRouter()

const loadEvent = (eventId) => {
  router.push({ name: 'EventView', params: { eventId } })
}
</script>
