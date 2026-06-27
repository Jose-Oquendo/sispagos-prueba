<template>
  <q-input v-model="model" :label="label" :type="type" :rules="rules" :lazy-rules="lazyRules" outlined dense
    v-bind="$attrs">
    <template v-for="(_, slotName) in $slots" :key="slotName" v-slot:[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { type QInputProps } from 'quasar';

interface Props {
  label: string;
  type?: QInputProps['type'];
  rules?: QInputProps['rules'];
  lazyRules?: boolean | 'ondemand';
}

const model = defineModel<string>();

withDefaults(defineProps<Props>(), {
  type: 'text',
  lazyRules: 'ondemand'
});
</script>

<style scoped></style>
