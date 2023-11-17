import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './RegisterFormStyles.css'
import { VALIDATION_MSG } from '../utils/validation-messages'
import { REG_EXP_EMAIL, REG_EXP_PASS, REG_EXP_PHONE } from '../utils/reg-exp'

const RegisterForm = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    onSubmit: async (values) => {
      // Lógica de envío del formulario (puedes usar fetch aquí)
      setIsOpen(true);
    },
  })

  return (
    <div>
      <form onSubmit={ formik.handleSubmit }>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            value={ formik.values.nombre }
          />
          { formik.touched.nombre && formik.errors.nombre && (
            <div className="error-msg">{ formik.errors.nombre }</div>
          ) }
        </div>

        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            value={ formik.values.apellido }
          />
          { formik.touched.apellido && formik.errors.apellido && (
            <div className="error-msg">{ formik.errors.apellido }</div>
          ) }
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            value={ formik.values.email }
          />
          { formik.touched.email && formik.errors.email && (
            <div className="error-msg">{ formik.errors.email }</div>
          ) }
        </div>

        <div>
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
            <div className="error-msg">{ formik.errors.telefono }</div>
          ) }
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            value={ formik.values.password }
          />
          { formik.touched.password && formik.errors.password && (
            <div className="error-msg">{ formik.errors.password }</div>
          ) }
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            value={ formik.values.confirmPassword }
          />
          { formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="error-msg">{ formik.errors.confirmPassword }</div>
          ) }
        </div>
        <button type="submit">Registrarse</button>
      </form>
      {
        isOpen && (
          <div>
            <p>Registro exitoso</p>
          </div>
        )
      }
    </div>
  )
}

export default RegisterForm