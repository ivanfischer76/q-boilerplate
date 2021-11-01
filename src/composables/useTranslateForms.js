import { useI18n } from 'vue-i18n'
/*
 * Lamentablemente VueI18n no proporciona una forma de acceder a las traducciones en
 * en el setup() por lo tanto cuando se quiere acceder a una traducción en un texto de un objeto
 * como en un dialog la única manera es crear un archivo del infierno como este para cada caso,
 * ya que el $t usado en las plantillas no está disponible en el setup() y no encontré en la
 * documentación como acceder a él.
 */

const useTranslateForms = () => {

  const { locale } = useI18n({useScope: 'global'})

  return {
    translate(){
      let notifyAccept = ''
      let badEmail = ''
      let diferentEmail = ''

      switch (locale.value ){
        case 'de':
          notifyAccept = 'Sie müssen die Bedingungen akzeptieren'
          badEmail = 'Die E-Mail scheint ungültig zu sein'
          diferentEmail = 'Passwörter sind nicht gleich'
          break
        case 'en-US':
          notifyAccept = 'You must accept the conditions'
          badEmail = 'Passwords are not the same'
          diferentEmail = 'The email does not seem to be valid'
          break
        case 'es':
          notifyAccept = 'Debe aceptar las condiciones'
          badEmail = 'El correo no parece ser válido'
          diferentEmail = 'Las contraseñas no son iguales'
          break
        case 'fr':
          notifyAccept = 'Vous devez accepter les conditions'
          badEmail = 'L\'email ne semble pas valide'
          diferentEmail = 'Les mots de passe ne sont pas les mêmes'
          break
        case 'it':
          notifyAccept = 'Devi accettare le condizioni'
          badEmail = 'L\'email non sembra essere valida'
          diferentEmail = 'Le password non sono le stesse'
          break
        case 'pt-BR':
          notifyAccept = 'Você deve aceitar as condições'
          badEmail = 'O email não parece ser válido'
          diferentEmail = 'As senhas nao sao as mesmas'
          break
        default:
          notifyAccept = 'You must accept the conditions'
          badEmail = 'Passwords are not the same'
          diferentEmail = 'The email does not seem to be valid'
      }
      return {
        notifyAccept,
        badEmail,
        diferentEmail,
      }
    }
  }

}

export default useTranslateForms
