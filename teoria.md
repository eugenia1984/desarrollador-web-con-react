# TEORIA

Aca voy a dejar algunas cosas de la teoria

---

## Temas

- Introduccion
  
- Componentes
  
- Eventos
  
---
---

## INTRODUCCION

ReactJS es una librería JavaScript de código abierto enfocada a la visualización que
nos permite el desarrollo de interfaces de usuario de forma sencilla mediante
componentes interactivos y reutilizables. Está basado en un paradigma llamado
programación orientada a componentes en el que cada componente es una
pieza con la que el usuario puede interactuar.

Estas piezas se crean usando una sintaxis llamada JSX permitiendo escribir HTML
(y opcionalmente CSS) dentro de objetos JavaScript. Estos componentes son
reutilizables y se combinan para crear componentes mayores hasta configurar una
web completa.

Esta es la forma de tener HTML con toda la funcionalidad de JavaScript y
el estilo gráfico de CSS centralizado y listo para ser abstraído y usado en
cualquier otro proyecto.

### ¿Cómo funciona el virtual DOM?

Imagina que tienes un objeto que es un modelo de una persona. Tienes todas las
propiedades relevantes de una persona que podría tener, y refleja el estado actual
de la persona. Esto es básicamente lo que React hace con el DOM.

Si tomamos ese objeto y le hacemos algunos cambios, agregamos un bigote, unos
bíceps. En React, cuando aplicamos estos cambios, dos cosas ocurren:

● En primer lugar, React ejecuta un algoritmo de “diffing”, que identifica lo que
ha cambiado.

● El segundo paso es la reconciliación, donde se actualiza el DOM con los
resultados de diff.

Lo que hace React, ante estos cambios, en lugar de tomar a la persona real y
reconstruirla desde cero, sólo cambiaría la cara y los brazos.

### JSX

JSX es una extensión de sintaxis de Javascript, que se parece a HTML.

● Mejora la legibilidad del código, mejora la experiencia del desarrollador, y reduce la
cantidad de errores de sintaxis, ya que no es necesario repetir tantas veces el
mismo código.

● Otro beneficio es el de poder integrar a otros miembros de tu equipo que no sean
programadores en el desarrollo. Es “fácil” leer el código si ellos están
acostumbrados a leer HTML.

React no requiere usar JSX, pero la mayoría de la gente lo encuentra útil como ayuda
visual cuando trabajan con interfaz de usuario dentro del código Javascript. Esto
también permite que React muestre mensajes de error o advertencia más útiles

### Especificando atributos con JSX

Podemos utilizar comillas para especificar strings literales como atributos.

`const element = <div tabIndex="0"></div>`

También puedes usar llaves para insertar una expresión JavaScript en un atributo:

`const element = <img src={user.avatar} widht="100%" alt={user.name}/>`

Dado que JSX es más cercano a JavaScript que a HTML, React DOM usa la convención
de nomenclatura camelCase en vez de nombres de atributos HTML.

Por ejemplo, class se vuelve className en JSX, y tabindex se vuelve tabIndex

### Creación de componentes

Podemos definir un componente usando una simple función, y su valor de retorno
será el contenido HTML que se muestre.

Así mismo podemos incluir todos los componentes que necesitemos dentro del
valor de retorno de otros componentes. Este concepto se llama composición.
Por lo general, las aplicaciones de React nuevas tienen un único componente App
en lo más alto.

Es importante que en cada archivo en el que vayamos a definir un
componente (ya sea de clase o funcional recordemos importar React al
principio de nuestro archivo js y exportarlo al final.

### Componentes de presentación vs componentes contenedores

● Los componentes de presentación son aquellos que simplemente se limitan a mostrar datos y tienen poca o nula lógica asociada a manipulación del estado.

● Los componentes contenedores tienen como propósito encapsular a otros componentes y proporcionarles las propiedades que necesitan, además se encargan de modificar el estado de la aplicación para despachar alguna acción y que el usuario vea
el cambio en los datos.

Presentación:

● Orientados al aspecto visual

● No tienen dependencia con fuentes de datos.

● Reciben callbacks por medio de props 

● Pueden ser descritos como componentes funcionales.

Contenedores:

● Orientados al funcionamiento de la aplicación

● Contienen componentes de presentación y/o otros contenedores

● Se comunican con las fuentes de datos

● Usualmente tienen estado para representar el cambio en los datos 

### Componentes de clase vs. componentes de función

Los componentes de React pueden definirse de dos formas distintas:

● como funciones

● como clases

Ambos componentes son equivalentes, sin embargo la forma más sencilla,
y la más utilizada en las últimas actualizaciones es de función.

### Render

Todo componente de clase en React, tiene un método Render que es el que se encarga de renderizar en el navegador el HTML correspondiente al componente.

Este método se llama automáticamente cuando se crea un componente y cuando el estado del componente se actualiza.

En este método es donde usamos JSX para facilitar el desarrollo y creación de elementos HTML.

React DOM compara el elemento y sus hijos con el elemento anterior, y solo aplica las actualizaciones del DOM que 
son necesarias para que el DOM esté en el estado deseado


---
---

## COMPONENTES

Los componentes permiten separar la interfaz de usuario en piezas independientes,
reutilizables y pensar en cada pieza de forma aislada.

Conceptualmente, los componentes son como las funciones de JavaScript.
Aceptan entradas arbitrarias (llamadas “props”) y retornan elementos de React que
describen lo que debe aparecer en la pantalla.

Los componentes pueden referirse a otros componentes en su retorno. Esto nos
permite utilizar la misma abstracción de componente para cualquier nivel de detalle.
Un botón, un cuadro de diálogo, un formulario, una pantalla: en las aplicaciones de
React, todos ellos son expresados comúnmente como componentes.


### Propiedades

Un componente en React puede recibir propiedades como parámetros desde un componente padre para poder insertar valores y eventos en su HTML.

Imagina que tienes un componente que representa un menú con varias opciones, y éstas opciones las pasamos por parámetros como una propiedad llamada options

¿Cómo accedemos a estas propiedades en el componente hijo a la hora de renderizarlo? Por medio de las props

En el caso de ser un componente de tipo función las propiedades las recibimos
como parámetro de la misma

### Estados

Además de las props, los componentes en React pueden tener estado. Lo característico
del estado es que si éste cambia, el componente se renderiza automáticamente

### Eventos

Si las propiedades pasan de padres a hijos, es
decir hacia abajo, los eventos se disparan
hacia arriba, es decir de hijos a padres.
El componente ``<Menu />`` va a tener una
nueva propiedad llamada onAddOption: va a
llamar a la función handleAddOption en
``<App />`` para poder modificar el estado

Para poder llamar a esa función, necesitamos disparar un evento desde el hijo.
Añadiremos un elemento ``<button>`` y utilizaremos el evento ``onClick`` de JSX, que
simula al listener de ``click`` del ratón y ahí llamaré a la función "propiedad" onAddOption del padre.

Cada vez que hagamos click en el botón, llamará a la función que le llega por props.

Esta función, llama en el componente padre (App) a la función ``handleAddOption`` y la bindeamos con ``this``, para que
pueda llamar a ``this.setState`` dentro de la función. Éste setState modifica el estado y llama internamente a la función
render lo que provoca que se vuelva a "pintar" todo de nuevo. 

## Equivalencias entre Hooks de efectos y Ciclos de Vida

componentDidMount:

```JSX
useEffect(() => {
  /* componentDidMount code */
}, [])
```

componentDidUpdate

```JSX
useEffect(() => {
  /* componentDidUpdate code */
}, depArray1, depArray2])
```

componentWillUnmount 

```JSX
useEffect(() => {
  return () => {
    /* componentWillUnmount code */
  }
}, [])
```

---
---

## EVENTOS


React tiene sus propios eventos, que cuentan con las misma interfaz de los eventos
nativos del navegador, con la ventaja que tienen un comportamiento compatible
con la mayoría de los navegadores. Reciben una función, o manejadores de
eventos. Lo que hacen estas funciones es definir el comportamiento de la aplicación
si se corre X o Y evento.

Algo muy común en React, es declarar los manejadores de eventos como funciones
dentro de una clase. Cuando hacemos esto, debemos tener cuidado, ya que this no
se conecta por defecto a la clase. Para resolver esto, tenemos tres opciones: hacer
la conexión en el render(), en el constructor(), o usar arrow functions. 

### ¿Cómo declarar los eventos?

En JavaScript la declaración de eventos la realizamos de la siguiente manera:

```JavaScript
<div onClick="handleClick()">Click me</div>

function handleClick() {
  alert('Clicked')
  return false
}
```

Como vemoos utilizamos el onclick, en el cual hacemos referencia a una función
declarada. 

En react lo haremos de la siguiente manera:

```JavaScript
<div onClick={handleClick}>Click me</div>

function handleClick() {
  alert('Clicked')
  event.preventDefault()
  event.stopPropagation()
}
```

Como vemos también utilizamos el evento onClick, pero a diferencia de lo
realizado en Javascript solo declaramos el nombre de la función. 

La función declarada sólo recibe el argumento evento, sobre el cual podremos
realizar la acción de stop propagation (detener propagación o comportamiento por
defecto.

Consideraciones:

● El nombre del evento tiene que ser camelCase y no minúscula sostenida.

● Al evento se le pasa la función y no una cadena de texto.

● En React si quieres prevenir un comportamiento por defecto o la propagación
de un evento debes hacerlo explícitamente llamando los métodos
preventDefault() y stopPropagation() respectivamente.

### Eventos disponibles en React

React soporta los siguientes eventos:

● Mouse: onClick, onContextMenu, onDoubleClick, onMouseDown onMouseEnter
onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp,

● Drag & Drop: onDrag, onDragEnd, onDragEnter, onDragExit, onDragLeave,
onDragOver, onDragStart, onDrop.

● Focos y formularios: onFocus, onBlur, onChange, onInput, onSubmit.

● Touchs: onTouchCancel, onTouchEnd, onTouchMove, onTouchStart.

● Cortar y pegar: onCopy, onCut, onPaste.

● Scrolls: onScroll, onWheel. 

### Cómo recibir parámetros en los eventos

Si queremos pasar un parámetro a la función llamada en la ejecución de un evento
en react debemos hacerlo utilizando la función arrow de es6. Por ejemplo:

Aquí vemos que cuando se ejecuta el onClick, se llama a la función arrow que tiene
como parámetro a e.

Luego esta función llama en su ejecución a la función deleteRow, la cual debe
estar declarada dentro del componente

---
