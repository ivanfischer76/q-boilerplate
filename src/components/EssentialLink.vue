<template>
  <!--item1-->
  <q-item
    clickable
    tag="a"
    @click="navigateTo('dialogs')"
  >
    <q-item-section
      avatar
    >
      <q-icon name="las la-window-minimize" />
    </q-item-section>

    <q-item-section>
      <q-item-label >{{ $t('linkListTitle1') }}</q-item-label>
      <q-item-label caption>
        {{ $t('linkListCaption1') }}
      </q-item-label>
    </q-item-section>
  </q-item>
  <!--item2-->
  <q-item
    clickable
    tag="a"
    @click="navigateTo('forms')"
  >
    <q-item-section
      avatar
    >
      <q-icon name="lab la-wpforms" />
    </q-item-section>

    <q-item-section>
      <q-item-label >{{ $t('linkListTitle2') }}</q-item-label>
      <q-item-label caption>
        {{ $t('linkListCaption2') }}
      </q-item-label>
    </q-item-section>
  </q-item>
  <!--item3-->
  <q-item
    clickable
    tag="a"
    @click="navigateTo('https://quasar.dev')"
  >
    <q-item-section
      avatar
    >
      <q-icon name="las la-graduation-cap" />
    </q-item-section>

    <q-item-section>
      <q-item-label >{{ $t('linkListTitle3') }}</q-item-label>
      <q-item-label caption>
        {{ $t('linkListCaption3') }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'EssentialLink',


  setup( props ) {
    const router = useRouter()
    return {
      navigateTo(route) {
        route.startsWith('http')
          ? window.open(route, '_blank')
          : router.push({ name: route })
      },

    }
  }
})
</script>
