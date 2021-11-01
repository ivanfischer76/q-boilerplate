
import { useQuasar } from 'quasar'
import useTranslateDialogs from './useTranslateDialogs'


const useDialogs = () => {

  const $q = useQuasar()
  const { translate } = useTranslateDialogs()

  function alert () {
    $q.dialog({
      title: translate().alertTitle,
      message: translate().alertMessage,
      position: 'bottom',
    }).onOk(() => {
      // console.log('OK')
    }).onCancel(() => {
      // console.log('Cancel')
    }).onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    })
  }

  function confirm () {
    $q.dialog({
      title: translate().confirmTitle,
      message: translate().confirmMessage,
      cancel: true,
      persistent: true
    }).onOk(() => {
      // console.log('>>>> OK')
    }).onOk(() => {
      // console.log('>>>> second OK catcher')
    }).onCancel(() => {
      // console.log('>>>> Cancel')
    }).onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    })
  }

  function otherFunction () {
    // more functions $q.dialog
  }

  return {
    alert,
    confirm
  }
}



export default useDialogs
