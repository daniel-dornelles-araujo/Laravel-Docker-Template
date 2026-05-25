<template>
  <q-page style="max-width: 800px;">
    <loading-indicator v-model="eventStore.isLoading">Loading events</loading-indicator>

    <q-card flat>
      <q-card-section>
        <q-breadcrumbs>
          <q-breadcrumbs-el label="Events" icon="calendar_month" />
        </q-breadcrumbs>
      </q-card-section>
    </q-card>

    <q-card flat>
      <!-- no events found -->
      <q-card-section v-if="eventStore.events.length === 0 && !eventStore.isLoading">
        No events found
      </q-card-section>

      <!-- events list -->
      <q-card-section v-if="eventStore.events.length > 0 && !eventStore.isLoading">
        <q-table title="All Events" :rows="eventStore.events" :columns="columns" flat>
          <template v-slot:body-cell-actions="{ row }">
            <td class="text-left">
              <q-btn flat @click="loadEvent(row.id)">View details</q-btn>
            </td>
          </template>
        </q-table>
      </q-card-section>

      <q-card-actions align="right" v-if="!eventStore.isLoading">
        <q-btn color="primary" href="/Events/New/">Create new event</q-btn>
      </q-card-actions>
    </q-card>

  </q-page>
</template>

<script setup>
import LoadingIndicator from 'src/components/LoadingIndicator.vue'
import { useEventStore } from 'src/stores/event-store'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'EventsList'
})

const eventStore = useEventStore()

onMounted(() => {
  eventStore.getEvents()
})

const columns = [
  {
    name: 'title',
    field: 'title',
    label: 'Event name',
    sortable: true,
    align: 'left'
  },
  {
    name: 'startDate',
    field: 'startDate',
    label: 'Start Date',
    format: (val) => val.format('MMM DD, YYYY'),
    sortable: true,
    align: 'left'
  },
  {
    name: 'endDate',
    field: 'startDate',
    label: 'End Date',
    format: (val) => val.format('MMM DD, YYYY'),
    sortable: true,
    align: 'left'
  },
  {
    name: 'actions',
    label: '',
    sortable: false,
    align: 'left'
  }
]

const router = useRouter()
const loadEvent = (eventId) => {
  router.push({ name: 'EventView', params: { eventId } })
}

</script>
