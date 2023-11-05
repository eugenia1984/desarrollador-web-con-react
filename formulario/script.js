document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('insuranceForm')
  const popup = document.getElementById('popup')

  // Desestructuro los ide  los input del form
  const { nombre, apellido, dni, telefono, email, tipoSeguro } = form

  // Expresiones regulares para validar datos ingresados
  const eMailRegExp =
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
  const namesRegExp = /^[A-Za-z\s]{2,}$/
  const onlyNumbersRegExp = /^[0-9]+$/

  // guardo en constante los mensajes de error para mostrarlos y usarlos en más de una función
  const firstNameErrorMsg = 'Nombre inválido, debe tener al menos 2 caracteres.'
  const lastNameErrorMsg =
    'Apellido inválido, debe tener al menos 2 caracteres.'
  const dniErrorMsg = 'DNI inválido, debe contener solamente números.'
  const phoneErrorMsg = 'Teléfono inválido, debe contener solamente números.'
  const eMailErrorMsg =
    'Email inválido, debe contener solo letras o "-", el "@" y luego del "." entre 2 a 4 caracteres.'

  // Valido cada input a medida que va ingresando los datos, no espero al submit
  // asi de tener un error lo va corrigiendo
  nombre.addEventListener('blur', () =>
    validateInput(nombre, namesRegExp, firstNameErrorMsg)
  )
  apellido.addEventListener('blur', () =>
    validateInput(apellido, namesRegExp, lastNameErrorMsg)
  )
  dni.addEventListener('blur', () =>
    validateInput(dni, onlyNumbersRegExp, dniErrorMsg)
  )
  telefono.addEventListener('blur', () =>
    validateInput(telefono, onlyNumbersRegExp, phoneErrorMsg)
  )
  email.addEventListener('blur', () =>
    validateInput(email, eMailRegExp, eMailErrorMsg)
  )

  tipoSeguro.addEventListener('change', () => {
    updateInsuranceValue()
  })

  // Al hacer el submit del formulario si esta ok se envia por email y se muestra el pop up
  form.addEventListener('submit', function (event) {
    event.preventDefault()

    if (validateForm()) {
      const formData = new FormData(form)

      fetch('https://formsubmit.co/ajax/costamariaeugenia1@gmail.com', {
        method: 'POST',
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            showPopup()
            form.reset()
          } else {
            showError('general', 'X - Error al enviar el formulario')
          }
        })
    }
  })

  function validateForm() {
    let isValid = true
    isValid = isValid && validateInput(nombre, namesRegExp, firstNameErrorMsg)
    isValid = isValid && validateInput(apellido, namesRegExp, lastNameErrorMsg)
    isValid = isValid && validateInput(dni, onlyNumbersRegExp, dniErrorMsg)
    isValid =
      isValid && validateInput(telefono, onlyNumbersRegExp, phoneErrorMsg)
    isValid = isValid && validateInput(email, eMailRegExp, eMailErrorMsg)
    // tengo que validar que se selecciono un seguro
    const selectedInsurance = tipoSeguro.value

    if (selectedInsurance === '') {
      isValid = false
      const errorParagraph = document.getElementById('tipoSeguroError2')
      errorParagraph.textContent = 'X - Debe elegir un tipo de seguro'
    } else {
      document.getElementById('tipoSeguroError2').textContent = ''
    }
    return isValid
  }

  function validateInput(inputElement, regex, errorMessage) {
    const selectedInsurance = tipoSeguro.value

    if (!regex.test(inputElement.value) && selectedInsurance === '') {
      inputElement.classList.add('error')
      const errorParagraph = document.getElementById(`${inputElement.id}Error`)
      errorParagraph.textContent = `X - ${errorMessage}`

      const errorParagraph2 = document.getElementById('tipoSeguroError2')
      errorParagraph2.textContent = 'X - Debe elegir un tipo de seguro'

      return false
    } else {
      inputElement.classList.remove('error')
      const errorParagraph = document.getElementById(`${inputElement.id}Error`)
      errorParagraph.textContent = ''

      const errorParagraph2 = document.getElementById('tipoSeguroError2')
      errorParagraph2.textContent = ''

      return true
    }
  }

  /**
   * Para mostrar el error en el caso de que no se pudo enviar el formulario
   * @param {*} fieldId : el id del input
   * @param {*} message : el mensaje de error a mostrar
   */
  function showError(fieldId, message) {
    const errorParagraph = document.getElementById(`${fieldId}Error`)
    errorParagraph.textContent = `X - ${message}`
  }

  /**
   * Para mostrar el Pop Up una vez que se envia el formulario
   */
  function showPopup() {
    popup.style.display = 'block'
    setTimeout(() => {
      popup.style.display = 'none'
    }, 5000)
  }

  /**
   * Para que una vez que se selecciona el seguro se muestra su valor
   */
  function updateInsuranceValue() {
    const valorSeguro = document.getElementById('valorSeguro')
    const selectedOption = tipoSeguro.options[tipoSeguro.selectedIndex].value
    const errorParagraph2 = document.getElementById('tipoSeguroError2')

    switch (selectedOption) {
      case 'basico':
        valorSeguro.textContent = 'Valor del seguro: $500'
        errorParagraph2.textContent = ''
        break
      case 'intermedio':
        valorSeguro.textContent = 'Valor del seguro: $1000'
        errorParagraph2.textContent = ''
        break
      case 'premium':
        valorSeguro.textContent = 'Valor del seguro: $1500'
        errorParagraph2.textContent = ''
        break
      default:
        valorSeguro.textContent = 'Debe elegir un valor de seguro'
        errorParagraph2.textContent = ''
        
    }
  }
})
