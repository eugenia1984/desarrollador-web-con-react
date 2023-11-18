import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './RegisterFormStyles.css'
import { VALIDATION_MSG } from '../../utils/validation-messages'
import { REG_EXP_EMAIL, REG_EXP_PASS, REG_EXP_PHONE } from '../../utils/reg-exp'
import PopUp from '../pop-up/PopUp'

const RegisterForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [registerMessage, setRegisterMessage] = useState<string>('')

  const handleClosePopup = () => {
    setIsOpen(false)
    setRegisterMessage('')
  }

  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, VALIDATION_MSG.FIRST_NAME_MIN)
        .required(VALIDATION_MSG.REQUIRED),
      apellido: Yup.string()
        .min(3, VALIDATION_MSG.LAST_NAME_MIN)
        .required(VALIDATION_MSG.REQUIRED),
      email: Yup.string()
        .matches(REG_EXP_EMAIL, VALIDATION_MSG.EMAIL_FORMAT)
        .required(VALIDATION_MSG.REQUIRED),
      telefono: Yup.string().matches(REG_EXP_PHONE, VALIDATION_MSG.PHONE_FORMAT).required(VALIDATION_MSG.REQUIRED),
      password: Yup.string()
        .matches(REG_EXP_PASS, VALIDATION_MSG.PASSWORD_FORMAT)
        .required(VALIDATION_MSG.REQUIRED),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], VALIDATION_MSG.PASSWORD_MATCH)
        .required(VALIDATION_MSG.REQUIRED),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formData = new URLSearchParams(values)

      fetch('https://formsubmit.co/ajax/costamariaeugenia1@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setRegisterMessage('Registro exitoso')
            setIsOpen(true)
            resetForm()
            return
          }
          setRegisterMessage('Hubo un inconveniente al enviar el formulario')
          setIsOpen(true)
        })
    },
  })

  return (
    <main className=" h-100">
      <form onSubmit={ formik.handleSubmit }>
        <label htmlFor="nombre">
          Nombre:
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          onChange={ formik.handleChange }
          onBlur={ formik.handleBlur }
          value={ formik.values.nombre }
        />
        { formik.touched.nombre && formik.errors.nombre && (
          <p className="error-msg">
            { formik.errors.nombre }
          </p>
        ) }
        <label htmlFor="apellido">
          Apellido:
        </label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          onChange={ formik.handleChange }
          onBlur={ formik.handleBlur }
          value={ formik.values.apellido }
        />
        { formik.touched.apellido && formik.errors.apellido && (
          <p className="error-msg">
            { formik.errors.apellido }
          </p>
        ) }
        <label htmlFor="email">
          Email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={ formik.handleChange }
          onBlur={ formik.handleBlur }
          value={ formik.values.email }
        />
        { formik.touched.email && formik.errors.email && (
          <p className="error-msg">
            { formik.errors.email }
          </p>
        ) }
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          onChange={ formik.handleChange }
          onBlur={ formik.handleBlur }
          value={ formik.values.telefono }
        />
        { formik.touched.telefono && formik.errors.telefono && (
          <p className="error-msg">
            { formik.errors.telefono }
          </p>
        ) }
        <label htmlFor="password">
          Contraseña:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={ formik.handleChange }
          onBlur={ formik.handleBlur }
          value={ formik.values.password }
        />
        { formik.touched.password && formik.errors.password && (
          <p className="error-msg">
            { formik.errors.password }
          </p>
        ) }
        <label htmlFor="confirmPassword">
          Confirmar Contraseña:
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={ formik.handleChange }
          onBlur={ formik.handleBlur }
          value={ formik.values.confirmPassword }
        />
        { formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <p className="error-msg">
            { formik.errors.confirmPassword }
          </p>
        ) }
        <button type="submit">
          Registrarse
        </button>
      </form>
      {
        isOpen && <PopUp message={ registerMessage } onClose={ handleClosePopup } />
      }
    </main>
  )
}

export default RegisterForm