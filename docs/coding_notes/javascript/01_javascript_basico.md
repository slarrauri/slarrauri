# JavaScript Básico

## Comentarios 
!!! info
    Los comentarios son lineas de codigo que el compilador omite.  
    Son muy usados para documentar el codigo y recordar que hace el mismo.  

```javascript title="Comentario de una linea"
// esto es un comentartio
```

```javascript title="Comentario de multiples lineas"
/* 
Esto es un comentartio
de multiples lineas
*/
```
!!! info "Comentarios para documentación"
    Existe un tercer tipo de comentario que es para generar la documentación
    del proyecto o código que estemos creando. 

!!! warning "Cuidad al documentar"
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

!!! tip "Mas Info sobre documentacion en JS"
    https://jsdoc.app/  
    https://developer.wordpress.org/coding-standards/inline-documentation-standards/javascript/

## Variables
!!! info "Tipo de datos"
    `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number`, y `object`

```javascript title="declarar una variable y asignarle un valor:"
var myVar; // undefined
myVar = 5;
```

!!! tip
    Si hay cálculos a la derecha del operador =, se realizan antes de que el valor se asigne 
    a la variable a la izquierda del operador.

!!! note
    las variables pueden estar formadas por números, letras y $ o _, 
    pero no pueden contener espacios ni empezar con un número.

!!! warning 
    las variables son sensibles a Mayúsculas y minúsculas

```javascript title="Estas son dos variables distintas:"
var myVar = "lalala"; 
var MyVar = 5;
```
!!! tip
    Por convención las variables se escriben en **camelCase** también llamado **lowerCamerCase**
    Para mas info sobre convenciones de nombre ver: [Conveniciones de nombres]()
```javascript title="Estas son dos variables distintas:"
var unaVariable;
var otraVariable;
var ejemploDeNombrePropio;
```