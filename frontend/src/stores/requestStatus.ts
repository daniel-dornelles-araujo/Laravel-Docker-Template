import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { RequestStatusError } from 'src/models/RequestStatusError';

export const useRequestStatusStore = defineStore('requestStatus', () => {
  const errors = ref<RequestStatusError[]>([]);

  const setError = (errorMessage: string) => {
    const error = {
      message: errorMessage,
    };
    errors.value.push(error);
  };

  return {
    setError,
  };
});
