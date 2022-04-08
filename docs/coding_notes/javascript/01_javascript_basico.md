# JavaScript Básico

## Comentarios 
!!! Info
    Los comentarios son líneas de código que el compilador omite.  
    Son muy usados para documentar el código y recordar que hace el mismo.  

```javascript title="Comentario de una linea"
// esto es un comentartio
```

```javascript title="Comentario de multiples lineas"
/* 
Esto es un comentartio
de multiples lineas
*/
```
!!! Info "Comentarios para documentación"
    Existe un tercer tipo de comentario que es para generar la documentación
    del proyecto o código que estemos creando. 

!!! Warning "Cuidad al documentar"
    Si bien la documentación del proyecto es muy importante para que otros programadores
    entienda fácilmente el código escrito es importante recordad que el código
    debe ser autoexplicativo evitando documentar innecesariamente. 
    Ya que cuando actualicemos el código también tenemos que actualizar la documentación. 
    Úsala sabiamente. 


```javascript title="Por lo general un comentario de documentacion lucera como el siguiente:"
/* 
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
}
*/
```
Documentar un proyecto es todo un tópico, aquí hay algunos enlaces de interés:

!!! Tip "Más Info sobre documentación en JS"
    https://jsdoc.app/  
    https://developer.wordpress.org/coding-standards/inline-documentation-standards/javascript/

## Variables
!!! Info "Tipo de datos"
    `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number`, y `object`

```javascript title="declarar una variable y asignarle un valor:"
var myVar; // undefined
myVar = 5;
```

!!! Tip
    Si hay cálculos a la derecha del operador =, se realizan antes de que el valor se asigne 
    a la variable a la izquierda del operador.

!!! Note
    las variables pueden estar formadas por números, letras y $ o _, 
    pero no pueden contener espacios ni empezar con un número.

!!! warning 
    las variables son sensibles a Mayúsculas y minúsculas

```javascript title="Estas son dos variables distintas:"
var myVar = "lalala"; 
var MyVar = 5;
```
!!! Tip
    Por convención las variables se escriben en **camelCase** también llamado 
    **lowerCamelCase** 
    Para más info sobre convenciones de nombre ver: [Convenciones de nombres](../de_todo_un_poco/convenciones_de_estilos.md)

```javascript title="Estas son dos variables distintas:"
var unaVariable;
var otraVariable;
var ejemploDeNombrePropio;
```
## Tipos de Variables JS

`var`: variables globales sobre-escribibles en su declaración
`let`: variables de entorno (función, bloque) no se sobreescriben en su declaración
`const`: constantes, solo se puede asignar valor una vez. 

!!! Tip 
    por convención las variables que son constantes se escriben con el formato:
    **SCREAMING_SNAKE_CASE**

## Operadores Aritméticos

Los operadores aritméticos son símbolos que nos permiten realizar funciones aritméticas. 

!!! Info "Operadores Básicos"
    **+** Suma  
    **-** Resta  
    * Multiplicación  
    **/** División   
    **%** Módulo (calcula el resto de una división)   

```javascript title="Ejemplos:"
const myVar = 5 + 10; // Suma
const myVar = 12 - 6; // Resta
const myVar = 13 * 13; // Multiplicación
const myVar = 16 / 2; // División  
```

!!! Info "Incrementa - Decrementa "
    ++ incrementa + 1  
    -- Decrementa -1

```javascript title="Ejemplos:"
i++; // es equivalente a i = i + 1;
i--; // es equivalente a i = i - 1;
```

## Asignación Compuesta