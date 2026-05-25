<template>
  <q-dialog :model-value="props.modelValue" persistent transition-show="flip-down" transition-hide="flip-up">
    <q-card align="center">
      <q-card-section class="text-h4 q-pa-lg">
        <slot></slot>
      </q-card-section>

      <q-card-section class="q-pa-lg">
        <q-spinner size="50px" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    required: false,
    default: false
  }
})
</script>
