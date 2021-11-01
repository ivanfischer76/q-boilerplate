import { useI18n } from 'vue-i18n'
/*
 * Lamentablemente VueI18n no proporciona una forma de acceder a las traducciones en
 * en el setup() por lo tanto cuando se quiere acceder a una traducción en un texto de un objeto
 * como en un dialog la única manera es crear un archivo del infierno como este para cada caso,
 * ya que el $t usado en las plantillas no está disponible en el setup() y no encontré en la
 * documentación como acceder a él.
 */

const useTranslateDialogs = () => {

  const { locale } = useI18n({useScope: 'global'})

  return {
    translate(){
      let alertMessage = ''
      let alertTitle = ''
      let confirmMessage = ''
      let confirmTitle = ''
      let promptMessage = ''
      let promptTitle = ''

      switch (locale.value ){
        case 'de':
          alertMessage = 'Eine Nachricht'
          alertTitle = 'Alarm'
          confirmMessage = 'Möchten Sie das WLAN einschalten?'
          confirmTitle = 'Bestätigen Sie'
          promptMessage = 'Wie heissen Sie?'
          promptTitle = 'Prompt'
          break
        case 'en-US':
          alertMessage = 'Some message'
          alertTitle =  'Alert'
          confirmMessage = 'Would you like to turn on the wifi?'
          confirmTitle = 'Confirm'
          promptMessage = 'What is your name?'
          promptTitle = 'Prompt'
          break
        case 'es':
          alertMessage = 'Algún mensaje'
          alertTitle = 'Alerta'
          confirmMessage = '¿Quieres encender el wifi?'
          confirmTitle = 'Confirmar'
          promptMessage = '¿Cómo te llamas?'
          promptTitle = 'Entrada'
          break
        case 'fr':
          alertMessage = 'Certains messages'
          alertTitle = 'Alerte'
          confirmMessage = 'Souhaitez-vous activer le wifi ?'
          confirmTitle = 'Confirmer'
          promptMessage = 'Quel est ton nom?'
          promptTitle = 'Saisir'
          break
        case 'it':
          alertMessage = 'Qualche messaggio'
          alertTitle = 'Avviso'
          confirmMessage = 'Vuoi attivare il wifi?'
          confirmTitle = 'Confermare'
          promptMessage = 'Come ti chiami?'
          promptTitle = 'Ingresso'
          break
        case 'pt-BR':
          alertMessage = 'Alguma mensagem'
          alertTitle = 'Alerta'
          confirmMessage = 'Você gostaria de ligar o wi-fi?'
          confirmTitle = 'Confirme'
          promptMessage = 'Qual é o seu nome?'
          promptTitle = 'Entrada'
          break
        default:
          alertMessage = 'Some message'
          alertTitle =  'Alert'
          confirmMessage = 'Would you like to turn on the wifi?'
          confirmTitle = 'Confirm'
          promptMessage = 'What is your name?'
          promptTitle = 'Prompt'
      }
      return {
        alertMessage,
        alertTitle,
        confirmMessage,
        confirmTitle,
        promptMessage,
        promptTitle,
      }
    }
  }

}

export default useTranslateDialogs
