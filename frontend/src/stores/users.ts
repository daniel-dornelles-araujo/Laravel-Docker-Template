import { defineStore } from 'pinia';
import type { User } from 'src/models/User';

export const useUsersStore = defineStore('users', () => {
  const users: User[] = [];

  const getUsers;

  return {
    users,
  };
});
