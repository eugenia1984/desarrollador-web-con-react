# Register Form

Ejercicio de práctica con React.

## Consigna:

Desarrollar el registro de una página web, en el registro tener los siguientes campos:

```
● Nombre
● Apellido
● Email
● Teléfono
● Password
● Confirmar password
```

- Realizar solo el maquetado utilizando react js y JSX, no se deben guardar los usuarios ni realizar lógica de validación de los mismos.

-> Para hacer una práctica más completa voy a utilizar **Formik** y **YUP** para validar el formulario. Y Utilizar TypeScript.

## Así quedo:

![image](https://github.com/eugenia1984/desarrollador-web-con-react/assets/72580574/0e3fa9c4-7c19-473a-b04f-a51ad9be7aaa)

---

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

#### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`

- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`

- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

---
