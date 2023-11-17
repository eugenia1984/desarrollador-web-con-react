export enum VALIDATION_MSG {
  REQUIRED = 'X - El campo es requerido',
  FIRST_NAME_MIN = 'X - El nombre debe tener al menos 3 letras',
  LAST_NAME_MIN = 'X - El apellido debe tener al menos 3 letras',
  EMAIL_FORMAT = "X - Formato de email no válido. Debe tener el '.' y el '@', solo se permiten letras, '-' y '.'.",
  PHONE_FORMAT = 'X - Formato de teléfono no válido. Debe tener entre 10 a 12 números.',
  PASSWORD_FORMAT = 'X - La contraseña no cumple con los requisitos. Debe tener entre 6 a 8 caracteres, al menos una letra y un numero.',
  PASSWORD_MATCH = 'X - Las contraseñas deben coincidir',
}