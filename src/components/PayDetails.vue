<template>
  <q-dialog>
    <q-card style="min-width: 350px;">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Detalle del Método de Pago</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="q-pt-md" v-if="paymentStore.formData">
        <q-list separator dense>

          <q-item>
            <q-item-section avatar>
              <q-icon name="bookmark" color="indigo-6" />
            </q-item-section>
            <q-item-section>
              <q-item-label caption>Alias del Método</q-item-label>
              <q-item-label class="text-weight-bold">{{ paymentStore.formData.alias }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon name="calendar_today" color="indigo-6" />
            </q-item-section>
            <q-item-section>
              <q-item-label caption>Fecha de Registro</q-item-label>
              <q-item-label>{{ paymentStore.formData.creationDate }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon name="toggle_on" :color="paymentStore.formData.isActive ? 'positive' : 'negative'" />
            </q-item-section>
            <q-item-section>
              <q-item-label caption>Estado</q-item-label>
              <q-item-label>
                <q-badge :color="paymentStore.formData.isActive ? 'positive' : 'negative'">
                  {{ paymentStore.formData.isActive ? 'Activo' : 'Inactivo' }}
                </q-badge>
              </q-item-label>
            </q-item-section>
          </q-item>

          <template v-if="paymentStore.formData.paymentType === 'card'">
            <q-item>
              <q-item-section avatar>
                <q-icon name="credit_card" color="indigo-6" />
              </q-item-section>
              <q-item-section>
                <q-item-label caption>Número de Tarjeta</q-item-label>
                <q-item-label class="text-mono">{{ paymentStore.formData.cardNumber }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon name="person" color="indigo-6" />
              </q-item-section>
              <q-item-section>
                <q-item-label caption>Tarjetahabiente</q-item-label>
                <q-item-label>{{ paymentStore.formData.cardHolder }}</q-item-label>
              </q-item-section>
            </q-item>

            <div class="row">
              <div class="col-6">
                <q-item>
                  <q-item-section>
                    <q-item-label caption>Vencimiento</q-item-label>
                    <q-item-label>{{ paymentStore.formData.cardExpiry }}</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-item-section>
                    <q-item-label caption>Subtipo</q-item-label>
                    <q-item-label class="text-capitalize">{{paymentStore.cardSubTypes.find(t => t.value ===
                      paymentStore.formData.cardSubType)?.label
                    }}</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
            </div>
          </template>

          <template v-if="paymentStore.formData.paymentType === 'paypal'">
            <q-item>
              <q-item-section avatar>
                <q-icon name="email" color="indigo-6" />
              </q-item-section>
              <q-item-section>
                <q-item-label caption>Correo de PayPal</q-item-label>
                <q-item-label>{{ paymentStore.formData.paypalEmail }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>

          <template v-if="paymentStore.formData.paymentType === 'bank'">
            <q-item>
              <q-item-section avatar>
                <q-icon name="account_balance" color="indigo-6" />
              </q-item-section>
              <q-item-section>
                <q-item-label caption>Banco</q-item-label>
                <q-item-label>{{ paymentStore.formData.bankName }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon name="layers" color="indigo-6" />
              </q-item-section>
              <q-item-section>
                <q-item-label caption>Tipo de Cuenta</q-item-label>
                <q-item-label>{{ paymentStore.formData.bankAccountType }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon name="tag" color="indigo-6" />
              </q-item-section>
              <q-item-section>
                <q-item-label caption>Número de Cuenta / IBAN / CLABE</q-item-label>
                <q-item-label class="text-mono">{{ paymentStore.formData.bankAccount }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>

          <template v-if="paymentStore.formData.paymentType === 'cash'">
            <q-item>
              <q-item-section avatar>
                <q-icon name="storefront" color="indigo-6" />
              </q-item-section>
              <q-item-section>
                <q-item-label caption>Entidad de Recaudo</q-item-label>
                <q-item-label>{{ paymentStore.formData.cashProvider }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item v-if="paymentStore.formData.cashProvider === 'Otro' && paymentStore.formData.cashProviderCustom">
              <q-item-section avatar>
                <q-icon name="edit_location" color="indigo-6" />
              </q-item-section>
              <q-item-section>
                <q-item-label caption>Punto de Pago Especificado</q-item-label>
                <q-item-label>{{ paymentStore.formData.cashProviderCustom }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon name="receipt_long" color="indigo-6" />
              </q-item-section>
              <q-item-section>
                <q-item-label caption>Código / ID de Referencia</q-item-label>
                <q-item-label class="text-mono text-weight-medium">{{ paymentStore.formData.cashReference
                }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>

        </q-list>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cerrar" v-close-popup />
        <q-btn color="indigo-6" @click="goToEdit" label="Editar metodo" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { usePaymentStore } from 'src/stores/payment-store';

const paymentStore = usePaymentStore();
const router = useRouter();

const goToEdit = async () => {
  console.log("Ir al formulario");
  await router.push({ name: 'Formulario' });
}
</script>
