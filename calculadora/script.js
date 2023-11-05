document.addEventListener('DOMContentLoaded', function () {
  // Guardo en contantes los elementos que necesito del formulario
  const operando1 = document.getElementById('operando1')
  const operando2 = document.getElementById('operando2')
  const resultado = document.getElementById('resultado')
  const sumaBtn = document.getElementById('suma')
  const restaBtn = document.getElementById('resta')
  const multiplicacionBtn = document.getElementById('multiplicacion')
  const divisionBtn = document.getElementById('division')
  const resetBtn = document.getElementById('reset')

  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()
    
    // Paso de string a number los operandos ingresados
    const num1 = parseFloat(operando1.value)
    const num2 = parseFloat(operando2.value)

    if (isNaN(num1) || isNaN(num2)) {
      resultado.value = 'Debe ingresar numeros'
    } else {
      resultado.value = operate(num1, num2)
    }
  })

  const operate = (num1, num2) => {
    if (sumaBtn.classList.contains('active')) {
      return num1 + num2
    }
    
    if (restaBtn.classList.contains('active')) {
      return num1 - num2
    }
    
    if (multiplicacionBtn.classList.contains('active')) {
      return num1 * num2
    }

    if (divisionBtn.classList.contains('active')) {
      return num2 === 0 ? 'No se puede dividir por 0' : num1 / num2
    }
  }

  sumaBtn.addEventListener('click', setActiveOperator)
  restaBtn.addEventListener('click', setActiveOperator)
  multiplicacionBtn.addEventListener('click', setActiveOperator)
  divisionBtn.addEventListener('click', setActiveOperator)

  function setActiveOperator(event) {
    sumaBtn.classList.remove('active')
    restaBtn.classList.remove('active')
    multiplicacionBtn.classList.remove('active')
    divisionBtn.classList.remove('active')
    event.target.classList.add('active')
  }

  // Si hace click en el boton RESET
  // borro los valores ingresados
  // y la operación seleccionado
  resetBtn.addEventListener('click', function () {
    operando1.value = ''
    operando2.value = ''
    resultado.value = ''

    sumaBtn.classList.remove('active')
    restaBtn.classList.remove('active')
    multiplicacionBtn.classList.remove('active')
    divisionBtn.classList.remove('active')
  })
})
