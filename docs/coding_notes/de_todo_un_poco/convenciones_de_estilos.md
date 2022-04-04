# Convenciones de estilos

Si bien cada lenguaje de programación tiene su guía de estilo y su propia forma de escribir código. 
En esta seccion describo en lineas generales cuales son los mas usados y para que se usa cada estilo. 

## camelCase

Esta notacion empieza con la primera letra de la palabra en minuscula y las palabras 
siguientes con la primera letra en mayúscula.
También llamada lowerCamelCase.

```markdown title="Ejemplos"
camelCase
nombre
segundoNombre
```
!!! tip "Se usa en:"
    variables, argumentos, propiedades.

## PascalCase 
Pascal Case usa el inicio de cada palabra en mayúsculas. 
Tambien llamada UpperCamelCase.

```markdown title="Ejemplos"
PascalCase
Apellido
SegundoApellido
```
!!! tip "Se usa en:"
    Classes, enums, typedefs, extensions.

## snake_case
La notacion snake_case utiliza todas las letras en minisculas separadas por un guion bajo o underscore.

```markdown title="Ejemplos"
snake_case
edad_del_perro
```
!!! tip "Se usa en:"
    Declaracion de campos de base de datos y en la declaración de variables, nombres de archivos

## SCREAMING_SNAKE_CASE
Esta notación al igual que la anterior utiliza las palabras separadas por guion bajo,
pero se escribe todo en mayúsculas.

```markdown title="Ejemplos"
SCREAMING_SNAKE_CASE
PI
COLOR_FUENTE
```

!!! tip "Se usa en:"
    Declaracion de variables constantes 
    
## kebab-case

Al igual que snake_case utiliza todas las palabras en minusculas pero separadas por guiones.

```markdown title="Ejemplos"
kebab-case
url-del-blog
```
!!! tip "Se usa en:"
    En las Urls, nombres de branch, nombres de paquetes

## Train-Case
Es una variedad de kebab-case pero utiliza la primera letra de cada palabra en mayúsculas. 
```markdown title="Ejemplos"
Train-Case
Esta-Es-La-Muestra
```
!!! tip "Se usa en:"
    Nombres de archivos.

## UPPERCASE

Esta notación consiste en escribir toda la palabra en mayúsculas,
generalmente se usa cuando se trata de una palabra.

```markdown title="Ejemplos"
UPPERCASE
README
CHANGELOG
```
!!! tip "Se usa en:"
    Nombres de archivos como el readme.md

## Notación Húngara
La notación consiste en añadir prefijos en minúsculas seguidos de la palabra con la primer letra en mayusculas. 
Los prefijos indican un tipo de variable, por ejemplo cActivado = color activado. 

```markdown title="Ejemplos"
cFondo
kPi
```
!!! tip "Se usa en:"
    nombres de variables, instancias de objetos.