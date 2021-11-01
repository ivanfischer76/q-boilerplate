<template>
  <q-page class="q-ma-md">

    <span class="text-h3">Forms</span>
    <q-separator spaced />

    <div class="row justify-center">

        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-xl"
        >
          <q-input
            filled
            v-model="userForm.email"
            :label="$t('email')"
            type="email"
            lazy-rules
            no-error-icon
            :rules="[
              val => val && val.length > 0 || $t('fieldRequired'),
              isValidEmail
            ]"
          />

          <q-input
            filled
            type="password"
            v-model="userForm.password1"
            :label="$t('password')"
            lazy-rules
            no-error-icon
            :rules="[
              val => val && val.length > 0 || $t('fieldRequired')
            ]"
          />

          <q-input
            filled
            type="password"
            v-model="userForm.password2"
            :label="$t('passwordRepeat')"
            lazy-rules
            no-error-icon
            :rules="[
              val => val && val.length > 0 || $t('fieldRequired'),
              isSamePassword
            ]"
          />

          <q-checkbox
            v-model="userForm.conditions"
            :label="$t('acceptConditions')"
            :style="userForm.errorInConditions
                    && !userForm.conditions
                    && 'color: #ff0000'"
          />



          <div class="row justify-end">
            <q-btn :label="$t('reset')" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn unelevated :label="$t('submit')" type="submit" color="primary"/>
          </div>
        </q-form>
    </div>



  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar'
import useTranslateForms from '../composables/useTranslateForms'

export default defineComponent({
  name: 'Forms',
  setup() {

    const $q = useQuasar()

    const { translate } = useTranslateForms()

    const userForm = ref({
      email: '',
      password1: '',
      password2: '',
      conditions: false,
      errorInConditions: false
    })



    return {
      userForm,

      onSubmit() {

        userForm.value.errorInConditions = false

        if ( !userForm.value.conditions ) {
          $q.notify({
            message: translate().notifyAccept,
            icon: 'las la-exclamation-circle'
          })
          userForm.value.errorInConditions = true
          return
        }

        console.log(userForm.value)
      },
      onReset() {
        userForm.value = {
          email: '',
          password1: '',
          password2: '',
          conditions: false,
          errorInConditions: false
        }
      },

      isValidEmail( val ) {
          const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
          return emailPattern.test(val) || translate().badEmail;
      },

      isSamePassword( val ) {
        return ( val === userForm.value.password1 ) || translate().diferentPassword
      }

    }

  }
})
</script>
