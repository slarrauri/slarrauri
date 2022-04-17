# Programación Orientada a Objetos
- La POO puede pensarse como la representación de objetos reales en entornos informáticos. 
- Los objetos se crean desde las clases, las clases tienen Métodos y Atributos, que son propios de los objetos.


## Principios de la POO

### Abstracción
- La Abstracción es el modelo de un objeto o fenómeno del mundo real, limitado a un contexto específico, que representa todos los datos relevantes a este contexto con gran precisión, omitiendo el resto.


### Encapsulación
- La encapsulación es la capacidad que tiene un objeto de esconder partes de su estado y comportamiento de otros objetos, exponiendo únicamente una interfaz limitada al resto del programa.

### Herencia
- La herencia es la capacidad de crear nuevas clases sobre otras existentes. La principal ventaja de la herencia es la reutilización de código.

### Polimorfismo
- El polimorfismo es la capacidad que tiene un programa de detectar la verdadera clase de un objeto e invocar su implementación, incluso aunque su tipo real sea desconocido en el contexto actual.

- También puedes pensar en el polimorfismo como la capacidad de un objeto para “fingir” ser otra cosa, normalmente una clase que extiende o una interfaz que implementa. En nuestro ejemplo, los perros y gatos de la bolsa fingen ser animales genéricos.

## Relaciones entre los Objetos

### Dependencia 
- La dependencia es el tipo de relación más básica y débil entre clases. Existe una dependencia entre dos clases cuando ciertos cambios en la definición de una clase puede provocar modificaciones en otra. 

### Asociación
- La asociación es una relación en la que un objeto utiliza o interactúa con otro.

### Agregación
- La agregación es un tipo especializado de asociación que representa relaciones “uno a muchos”, “muchos a muchos” o “todo a parte” entre múltiples objetos, mientras que una asociación simple describe relaciones entre un par de objetos.

###  Composición
- La composición es un tipo específico de agregación en la que un objeto se compone de una o más instancias del otro.

### Resumen Relaciones

- **Dependencia**: La clase A puede verse afectada por cambios en la clase B.
- **Asociación**: El objeto A conoce el objeto B. La clase A depende de B.
- **Agregación**: El objeto A conoce el objeto B y consiste en B. La clase A depende de B.
- **Composición**: El objeto A conoce el objeto B, consiste en B y gestiona el ciclo vital de B. La clase A depende de B. 
- **Implementación**: La clase A define métodos declarados en la interfaz B. Los objetos A pueden tratarse como B. La clase A depende de B.
- **Herencia**: La clase A hereda la interfaz y la implementación de la clase B, pero puede extenderla. El objeto A puede tratarse como B. La clase A depende de B.