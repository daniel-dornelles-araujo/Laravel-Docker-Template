<template>
  <p>Name: {{ user.name }}</p>
  <p>E-mail: {{ user.email }}</p>
</template>

<script lang="ts" setup>
import type { User } from 'src/models/User';

defineProps<{
  user: User;
}>();
</script>
