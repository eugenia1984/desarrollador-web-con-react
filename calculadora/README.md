# <img width="40" height="40" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40/external-class-online-education-flaticons-lineal-color-flat-icons-3.png" alt="external class online"/> Clase 2 - Ejercitación

## <img width="30" height="30" src="https://img.icons8.com/plasticine/30/monitor.png" alt="monitor"/> Ejercicio 1

Tengo desarrollada la siguiente función en javascript

```JavaScript
function suma (a,b,callback){
  let c = a +b;
  callback();
}
```

- ¿Que es el tercer parámetro recibido?

El tercer parámetro de la función **suma** es una función de devolución de llamada (**callback**).

Las funciones callback se utilizan en JavaScript para especificar un fragmento de código que se ejecutará después de que se complete una tarea asincrónica o una tarea que tome un tiempo en ejecutarse. 

En el caso de la función suma, el tercer parámetro callback es una función que se debe ejecutar después de que se complete la suma de a y b.

- ¿En que casos es obligatorio desarrollar este tipo de funciones?

Las funciones callback son útiles en situaciones en las que se necesita realizar acciones después de que se complete una operación asincrónica, como una solicitud de red o una operación de lectura/escritura en un archivo.

- Realizar un llamado a la función de ejemplo.

Un ejemplo de uso de esta función con una función de devolución de llamada podría ser:

```javascript
function suma(a, b, callback) {
  let c = a + b
  callback(c)
}

function miCallback(c) {
  console.log(`La suma se ha completado correctamente, se obtuvo: ${c}`);
}

suma(5, 7, miCallback)
```

De este modo se va a ver por consola el valor de la suma reallizada

---

## <img width="30" height="30" src="https://img.icons8.com/plasticine/30/monitor.png" alt="monitor"/> Ejercicio 2

Desarrollador una calculadora que tenga:

● 2 campos inputs para los operandos

● 4 botones de operadores básicos (suma, resta, multiplicación, división)

Al realizar la cuenta se deberá actualizar el campo resultado

---