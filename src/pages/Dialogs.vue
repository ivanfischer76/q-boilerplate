<template>
  <q-page class="q-pa-md">
    <span>Diálogos</span>
    <q-separator spaced />
    <template v-if="name">
      <span class="texxt-h6">{{ name }}</span>
      <q-separator spaced/>
    </template>
    <div class="q-pa-md q-gutter-sm">
      <q-btn :label="$t('alert')" color="primary" @click="alert" />
      <q-btn :label="$t('confirm')" color="primary" @click="confirm" />
      <q-btn :label="$t('prompt')" color="primary" @click="prompt" />
  </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useDialogs from '../composables/useDialogs'
import { useQuasar } from 'quasar'
import useTranslateDialogs from '../composables/useTranslateDialogs'

export default defineComponent({

  name: 'Dialogs',

  setup () {
    // ejemplo sin usar un composable para los diálogos
    const name = ref()
    const $q = useQuasar()
    const { translate } = useTranslateDialogs()

    // ejemplo usando un composable
    const { alert, confirm } = useDialogs()

    return {
      prompt () {
        $q.dialog({
          title: translate().promptTitle,
          message: translate().promptMessage,
          prompt: {
            model: '', // texto que aparece pre-cargado en el prompt
            type: 'text' // optional
          },
          cancel: true,
          persistent: true
        }).onOk(data => {
          // console.log('>>>> OK, received', data)
          name.value =  data
        }).onCancel(() => {
          // console.log('>>>> Cancel')
        }).onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        })
      },
      alert,
      confirm,
      name
    }
  }

})
</script>
