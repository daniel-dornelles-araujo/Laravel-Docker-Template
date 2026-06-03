<template>
  <div v-if="props.users.length">
    <div v-for="(user, userKey) in props.users" :key="userKey">
      <UserSummary :user="user" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { User } from 'src/models/User.js';
import UserSummary from './UserSummary.vue';

const props = defineProps<{
  users: User[];
}>();
</script>
