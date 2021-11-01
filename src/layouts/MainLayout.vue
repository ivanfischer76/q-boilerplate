<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleSideMenu"
        />

        <q-toolbar-title>
          {{ $t('title') }}
        </q-toolbar-title>

        <!--<div>Quasar v{{ $q.version }}</div>-->
        <!-- Selector de idiomas -->
        <q-select
          filled
          v-model="locale"
          :options="languages"
          :label="$t('language')"
          color="teal"
          dense
          borderless
          item-aligned
          emit-value
          map-options
          options-dense
          style="min-width: 100px"
          options-selected-class="text-green"
          @update:model-value="selectedLanguage"
        >
          <template v-slot:prepend >
            <img :src="getIcon()" style="width: 28px; height: 21px;">
          </template>
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section side>
                <img :src="scope.opt.icon" style="width: 28px; height: 21px;">
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="sideMenuOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          {{ $t('essentialLinks') }}
        </q-item-label>
        <EssentialLink />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import { languages }  from '../i18n/languages'
import langs from 'quasar/lang/index.json'

import EssentialLink from 'components/EssentialLink.vue'
import useUI from '../composables/useUI'

const appLanguages = langs.filter(lang =>
  [ 'de', 'en-US', 'es', 'fr', 'it', 'pt-BR' ].includes(lang.isoName)
)

const langOptions = appLanguages.map(lang => ({
  label: lang.nativeName, value: lang.isoName
}))

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const $q = useQuasar()
    const { sideMenuOpen, toggleSideMenu } = useUI()
    const { locale } = useI18n({ useScope: 'global' })

    return {
      sideMenuOpen,
      toggleSideMenu,
      locale,
      languages,
      getIcon(){
        let icon
        languages.forEach(element => {
          if(element.value == locale._value){
            icon = element.icon
            return
          }
        })
        return icon
      },
      selectedLanguage(){
        // console.log('MainLayout.selectLanguage locale', locale)
        // storage the current locale value
        // localStorage.setItem('language', locale.value)
        // sessionStorage.setItem('language', locale.value)
        import(
        /* webpackInclude: /(es|en-US|de|fr|it|pt-BR)\.js$/ */
        'quasar/lang/' + locale.value
        ).then(lang => {
          $q.lang.set(lang.default)
        })
      }
    }
  }
})
</script>
