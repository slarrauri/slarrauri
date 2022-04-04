# Programación Orientada a Objetos

## Objects

!!! info "Objetos"
    - Los objetos en JS son usados para modelar objetos reales
    - Usan Dot Notation  
    - tiene propiedades y metodos

```javascript title="Sample"
let dog = {
  name: "Poppy",
  numLegs: 4
};
```
## Acceder a sus Propiedades
!!! info "Acceder a sus Propiedades"
    - Usa dot notation

```javascript title="Sample"
dogName = dog.name;
console.log(dogName); // Poppy
```
## Métodos
!!! info
    - Los Métodos son funciones que agregan distintos comportamientos

```javascript title="Sample"
let dog = {
  name: "Poppy",
  numLegs: 4,
  sayLegs: function(){return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();
```
## This Keyword
!!! info
    - Podemos usar `this` para hacer referencia al nombre del objeto y evitar errores, si el nombre del objeto cambia en el futuro.
    - Esto nos permite tener un código limpio y reusable.

```javascript title="Sample"
let dog = {
  name: "Poppy",
  numLegs: 4,
  sayLegs: function(){return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();
```

## Constructor

!!! info
    - Los `Constructor` son funciones para crear objetos  
    - Pensalos como el plano (Blueprint) de los objetos

```javascript title="Sample"
function Dog() {
  this.name = "Poppy";
  this.color = "red";
  this.numLegs = 5;
}
```

!!! tip "Buenas Prácticas"
    - Los `Constructors` se definen con la primera letra de sus palabras en Mayusculas este formato se llama `CamelCase`.  
    - Los `Constructors` usan la keyword `this` para setear las propiedades del objeto que se creara. `this` hace referencia al nuevo objeto que se creara.  
    - Los `Constructors` definen propiedades y comportamientos en vez de devolver un valor como otras funciones.  

## Crear un objeto con un Constructors

```javascript title="Sample"
function Dog() {
  this.name = "Poppy";
  this.color = "red";
  this.numLegs = 4;
}

let perro = new Dog();
```
!!! warning
    - Fijate que se usa la keyword `new` antes de la llamada al `constructor`
    - `This` le dice a JS que cree una nueva instancia del objeto. De lo contrario da resultados inesperados, a lo JS.

!!! note
    - Como cualquier objeto sus propiedades pueden ser accedidas y modificadas.

## Constructors Parameters
!!! info
    - Los `Parameters` (parametros) sirven para inicializar las propiedades del constructor

```javascript title="Sample"
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let caniche = new Dog("Killer", "white");
```
## instanceof
