<template>
  <q-input readonly :model-value="formattedDate" :label="props.label" class="q-pa-none">
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy>
          <q-date v-model="date" mask="YYYY-MM-DD"></q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script setup>
import dayjs from 'dayjs'
import { computed } from 'vue'
const date = defineModel()
const props = defineProps({
  label: {
    required: false,
    default: 'Date',
    type: String
  }
})
const formattedDate = computed(() => {
  if (!date.value) {
    return ''
  }
  return dayjs(date.value).format('MMM DD, YYYY')
})
</script>
