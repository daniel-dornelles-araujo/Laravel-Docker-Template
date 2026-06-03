<template>
  <q-page>
    <h1>Index page</h1>
    <h2>
      <q-btn @click="viewUsers()">View Users</q-btn>
    </h2>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const viewUsers = () => {
  return router.push('/users');
};
</script>
