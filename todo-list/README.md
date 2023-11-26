# <img src="https://img.icons8.com/nolan/42/tasklist.png" width="42" alt="to do list"/> TO-DO LIST



## <img width="26" height="26" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/26/external-note-pad-user-interface-flatart-icons-flat-flatarticons.png" alt="note pad"/> Consigna

Crear una aplicación web utilizando React que permita gestionar una lista de tareas. La aplicación deberá hacer uso de componentes funcionales, el hook useState para el manejo del estado, el hook useEffect para realizar efectos secundarios, y eventos para interactuar con el usuario.

### <img width="28" height="28" src="https://img.icons8.com/color/28/list.png" alt="list"/> Requerimientos

- Componentes Funcionales:

○ **Componente de Lista de Tareas (TaskList)**: Este componente deberá mostrar la lista de tareas. 

Recibirá como propiedades la lista de tareas y funciones para gestionar eventos relacionados con las tareas (por ejemplo, marcar como completada, eliminar, etc.).

Cada tarea debe representarse mediante un componente TaskItem.

○ **Componente de Tarea (TaskItem)**: Este componente deberá representar individualmente una tarea.

Mostrará el nombre de la tarea y un botón para completarla.

Utilizará el estado local para gestionar la apariencia de la tarea (por ejemplo, tachado
cuando esté completada).

○ **Componente de Formulario (TaskForm)**: Este componente contendrá un formulario para agregar nuevas tareas.

Utilizará el estado local para gestionar la entrada del usuario y enviará la nueva tarea a la lista principal.

### <img width="28" height="28" src="https://img.icons8.com/external-justicon-flat-justicon/28/external-hook-pirates-justicon-flat-justicon.png" alt="hook"/> Estado con useState:

○ **Estado Principal (tasks)**:

Utilizar el hook useState en el componente principal para gestionar el estado de la lista
de tareas.

Cada tarea debe ser un objeto con propiedades como id, nombre, y completada.

○ **Efectos con useEffect**:

- Efecto de Actualización (useEffect en el componente principal): Utilizar useEffect para realizar una acción (por ejemplo, mostrar un mensaje) cuando el estado de la lista de tareas cambie.

### <img width="28" height="28" src="https://img.icons8.com/cotton/28/webpage-click.png" alt="webpage-click"/> Interacción con el Usuario - Eventos:

○ **Eventos en Componente de Lista (TaskList)**: Implementar eventos que permitan al usuario interactuar con cada tarea (marcar como completada, eliminar, etc.).

Estos eventos deberán modificar el estado principal (tasks).

○ **Eventos en Componente de Formulario (TaskForm)**: Implementar eventos para gestionar la entrada del usuario y agregar nuevas tareas a la lista.

### <img width="28" height="28" src="https://img.icons8.com/cute-clipart/28/design.png" alt="design"/> Estilo y Diseño:

Aplicar estilos CSS para mejorar la apariencia de los componentes. Puede utilizar bibliotecas como styled-components si lo desea.

### Puntos Extra (Opcionales):

- Implementar la persistencia de datos utilizando localStorage para que las tareas
persistan incluso después de recargar la página.


---

## Así se ve

### <img width="28" height="28" src="https://img.icons8.com/cute-clipart/28/cell-phone.png" alt="cell-phone"/> En Mobile:

![image](https://github.com/eugenia1984/desarrollador-web-con-react/assets/72580574/022ad5e0-fe36-4d5b-8842-a066a6494005)

### <img width="28" height="28" src="https://img.icons8.com/officel/28/ipad-pro.png" alt="ipad-pro"/> En Tablet/Desktop:

![image](https://github.com/eugenia1984/desarrollador-web-con-react/assets/72580574/2a332b9f-211f-4007-a8a5-60199b49acfe)

[Link del deploy](https://to-do-list-mec.netlify.app/)

---

## <img width="26" height="26" src="https://img.icons8.com/fluency/26/monitor--v1.png" alt="monitor"/> Tecnologías

- <img width="28" height="28" src="https://img.icons8.com/color/28/html-5--v1.png" alt="html5"/> HTML5

- <img width="28" height="28" src="https://img.icons8.com/color/28/css3.png" alt="css3"/> CSS3

- <img width="28" height="28" src="https://img.icons8.com/color/28/typescript.png" alt="typescript"/> TypeScript

- <img width="28" height="28" src="https://img.icons8.com/office/28/react.png" alt="react"/> React y React-Icons

- <img width="28" height="28" src="https://img.icons8.com/color/28/vite.png" alt="vite"/> Vite

- <img width="28" height="28" src="https://img.icons8.com/color/28/npm.png" alt="npm"/> npm

---


## <img width="26" height="26" src="https://img.icons8.com/office/26/command-line.png" alt="command line"/> ¿ Cómo verla en local?

1. Clonate el repositorio

2. Accede al directorio `todo-list`

3. Instalá las dependencias:

```BASH
npm install
```

4. Correlo en modo desarrollo:

```BASH
npm run dev
```

---
### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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
