<template>
  <q-page>
    <div class="q-pa-md">
      <q-separator class="q-my-md" />
      <div>
        <div class="text-h5 q-bold q-mb-sm">Detalles del Nuevo Método de Pago</div>
      </div>
      <div>
        <PayForm></PayForm>

        <!-- MODAL DE ÉXITO DE QUASAR (QDialog) -->
        <!-- <q-dialog v-model="successModal" persistent transition-show="scale" transition-hide="scale">
          <q-card class="bg-white rounded-2xl max-w-md w-full p-6 text-center shadow-2xl">
            <q-card-section class="q-pt-none">
              <div
                class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500 text-2xl">
                <q-icon name="check_circle" size="2rem"></q-icon>
              </div>
              <h4 class="text-xl font-bold text-slate-800 mb-2">¡Guardado Exitosamente!</h4>
              <p class="text-xs text-slate-500 mb-4">El método de pago se ha indexado y validado en la infraestructura.
              </p>

        <div class="bg-slate-50 rounded-xl p-4 text-left text-xs space-y-2 font-mono border border-slate-100">
          <div class="flex justify-between border-b pb-1">
            <span class="text-slate-400">Alias:</span>
            <span class="font-bold text-slate-700">{{ summary.alias }}</span>
          </div>
          <div class="flex justify-between border-b pb-1">
            <span class="text-slate-400">Tipo Pago:</span>
            <span class="font-bold text-indigo-600 uppercase">{{ summary.paymentType }}</span>
          </div>
          <div v-if="summary.paymentType === 'card'" class="flex justify-between border-b pb-1">
            <span class="text-slate-400">Tarjeta ({{ summary.subType }}):</span>
            <span class="font-bold text-slate-700">*** {{ summary.last4 }}</span>
          </div>
          <div v-if="summary.paymentType === 'paypal'" class="flex justify-between border-b pb-1">
            <span class="text-slate-400">PayPal:</span>
            <span class="font-bold text-slate-700 truncate max-w-[150px]">{{ summary.email }}</span>
          </div>
          <div v-if="summary.paymentType === 'bank'" class="flex justify-between border-b pb-1">
            <span class="text-slate-400">Banco / Cuenta:</span>
            <span class="font-bold text-slate-700">{{ summary.bank }}</span>
          </div>
          <div v-if="summary.paymentType === 'cash'" class="flex justify-between border-b pb-1">
            <span class="text-slate-400">Punto Recaudo:</span>
            <span class="font-bold text-orange-600">{{ summary.cashProvider }}</span>
          </div>
          <div class="flex justify-between border-b pb-1">
            <span class="text-slate-400">F. Registro:</span>
            <span class="font-bold text-slate-700">{{ summary.date }}</span>
          </div>
          <div class="flex justify-between border-b pb-1">
            <span class="text-slate-400">Activo:</span>
            <span :class="['font-bold', summary.active === 'SÍ' ? 'text-emerald-600' : 'text-rose-500']">{{
              summary.active
            }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-400">Predeterminado:</span>
            <span class="font-bold text-slate-700">{{ summary.default }}</span>
          </div>
        </div>
        </q-card-section>

        <q-card-actions align="center" class="q-px-md q-pb-none">
          <q-btn label="Entendido" color="indigo-9" class="w-full py-2.5 rounded-lg text-sm font-bold shadow-md"
            @click="closeModal" no-caps></q-btn>
        </q-card-actions>
        </q-card>
        </q-dialog> -->
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import PayForm from 'src/components/PayForm.vue';
</script>
