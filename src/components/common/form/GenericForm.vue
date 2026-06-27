<template>
  <q-form @submit.prevent="onSubmit" class="q-gutter-md q-form-flex">
    <slot />
    <div class="form-actions row justify-end q-gutter-sm">
      <q-btn v-if="showCancel" :label="cancelLabel" color="negative" flat :disabled="loading"
        @click="$emit('cancel')" />
      <q-btn :label="submitLabel" color="primary" type="submit" :loading="loading" />
    </div>
  </q-form>
</template>

<script setup lang="ts">
interface Props {
  submitLabel?: string;
  cancelLabel?: string;
  loading?: boolean;
  showCancel?: boolean;
}

withDefaults(defineProps<Props>(), {
  submitLabel: 'Guardar',
  cancelLabel: 'Cancelar',
  loading: false,
  showCancel: true
});

const emit = defineEmits<{
  (e: 'submit'): void;
  (e: 'cancel'): void;
}>();

const onSubmit = () => {
  emit('submit');
};
</script>

<style scoped>
.q-form-flex {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 16px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0px !important;
  gap: 8px;
}
</style>
