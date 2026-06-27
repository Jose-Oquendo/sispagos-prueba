<template>
  <GenericForm @submit="onSave" @cancel="onCancel" :loading="isSaving" :submitLabel="'Guardar metodo de pago'">
    <div class="row full-width">
      <div class="col-xs-12 col-sm-6 col-md-6">
        <GenericInput v-model="paymentStore.formData.alias" name="alias" label="Alias / Nombre del Método *"
          placeholder="Ej: Tarjeta Personal, Nómina" :rules="[(val: string) => !!val || 'Este campo es obligatorio']"
          lazy-rules color="indigo-6">
          <template #append>
            <q-icon name="bookmark_border" color="blue-grey-4" />
          </template>
        </GenericInput>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-6">
        <GenericInput v-model="paymentStore.formData.creationDate" label="Fecha de Registro (Auto)" disable
          bg-color="grey-2" color="indigo-6">
          <template #append>
            <q-icon name="today" color="slate-400"></q-icon>
          </template>
        </GenericInput>
      </div>
    </div>
    <div class="row full-width">
      <label class="col-12 label-types">Tipo de Pago <span class="text-rose-500">*</span>
      </label>
      <div class="row full-width">
        <q-btn class="col-6 col-md-3 col-lg-3" v-for="type in paymentStore.paymentTypes" :key="type.value"
          :flat="paymentStore.formData.paymentType !== type.value"
          :color="paymentStore.formData.paymentType === type.value ? 'indigo' : 'grey-7'" :class="[
            'py-2 border-2 rounded-xl text-xs font-semibold flex flex-col items-center justify-center transition-all-300',
            paymentStore.formData.paymentType === type.value ? 'border-indigo-600 bg-indigo-50/40 text-indigo-700' : 'border-slate-200 bg-white hover:border-slate-300'
          ]" @click="changeType(type.value)" no-caps>
          <q-icon :name="type.icon" size="1.2rem" class="q-mb-xs"></q-icon>
          <span>{{ type.label }}</span>
        </q-btn>
      </div>
    </div>
    <div class="full-width">
      <div v-if="paymentStore.formData.paymentType == 'card'">
        <TypeCardPay></TypeCardPay>
      </div>
      <div v-if="paymentStore.formData.paymentType == 'paypal'">
        <TypePaypal></TypePaypal>
      </div>
      <div v-if="paymentStore.formData.paymentType == 'bank'">
        <TypeBankPay></TypeBankPay>
      </div>
      <div v-if="paymentStore.formData.paymentType == 'cash'">
        <TypeCash></TypeCash>
      </div>
    </div>
    <div
      class="row full-width items-center justify-between q-pa-md bg-grey-2 rounded-borders border-custom q-mt-md q-mb-sm">
      <div class="col column q-pr-md">
        <span class="text-subtitle2 text-weight-bold text-grey-8">
          Estado del Método de Pago
        </span>
        <span class="text-caption text-grey-6">
          Si se inactiva, se bloquearán cobros futuros hasta su reactivación.
        </span>
      </div>

      <div class="row items-center no-wrap">
        <q-toggle v-model="paymentStore.formData.isActive" color="indigo-6" keep-color />
        <span :class="[
          'text-subtitle2 text-weight-bold text-right custom-label-width label-transition',
          paymentStore.formData.isActive ? 'text-indigo-7' : 'text-grey-6'
        ]">
          {{ paymentStore.formData.isActive ? 'Activo' : 'Inactivo' }}
        </span>
      </div>
    </div>
  </GenericForm>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { usePaymentStore } from 'src/stores/payment-store';
import GenericForm from './common/form/GenericForm.vue';
import GenericInput from './common/form/GenericInput.vue';
import TypeBankPay from './Register/TypeBankPay.vue';
import TypeCardPay from './Register/TypeCardPay.vue';
import TypeCash from './Register/TypeCash.vue';
import TypePaypal from './Register/TypePaypal.vue';

const paymentStore = usePaymentStore();
const router = useRouter();
const $q = useQuasar();

const isSaving = ref(false);
const alreadyNotify = ref(false)

onMounted(() => {
  const hoy = new Date();
  const dia = String(hoy.getDate()).padStart(2, '0');
  const mes = String(hoy.getMonth() + 1).padStart(2, '0');
  const anio = hoy.getFullYear();
  paymentStore.formData.creationDate = `${dia} / ${mes} / ${anio}`;
})

const onSave = async () => {
  if (paymentStore.formData.paymentType != undefined) {
    paymentStore.saveNewMethod();
    await router.push({ name: 'Inicio' });
  } else {
    $q.notify({
      type: 'negative',
      message: 'No ha seleccionado un tipo de pago.',
      position: 'top-right',
      timeout: 3000,
    });
  }
}

const onCancel = () => {
  paymentStore.resetFormData();
}

const changeType = (type: string) => {
  if (!alreadyNotify.value) {
    //notificar al usuario cuando se cambia de tipo
    $q.notify({
      type: 'info',
      message: 'Al cambiar tipo, se borraran los datos digitados.',
      position: 'top-right',
      timeout: 3000,
    });
    alreadyNotify.value = true;
  }
  paymentStore.formData.paymentType = type
  //para evitar datos innecesarios de otros tipos, por cada cambio, vaciar información
  paymentStore.cleanTypeData();
}

</script>

<style scoped>
.label-types {
  margin: 10px 0px;
  font-weight: bold;
}

.border-custom {
  border: 1px solid #e2e8f0;
}

.rounded-borders {
  border-radius: 12px;
}

.custom-label-width {
  display: inline-block;
  width: 64px;
}

.label-transition {
  transition: color 0.3s ease;
}
</style>
