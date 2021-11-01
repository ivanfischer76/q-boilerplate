import { Quasar } from 'quasar'
import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  const langIso = 'es' // ... some logic to determine it (use Cookies Plugin?)

  try {
    await import(
      /* webpackInclude: /(es|en-US|de|fr|it|pt-BR)\.js$/ */
      'quasar/lang/' + langIso
      )
      .then(lang => {
        Quasar.lang.set(lang.default)
      })
  }
  catch (err) {
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
    console.log('The required quasar language package does not appear to exist. boot error. quasar-lang-pack.js')
  }
})
