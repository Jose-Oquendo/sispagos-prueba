<template>
  <router-view />
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { usePaymentStore } from 'src/stores/payment-store';
const paymentStore = usePaymentStore();

onMounted(async () => {
  await paymentStore.fetchPaymentList();
});
</script>
