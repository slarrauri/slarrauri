# Ethereum para Desarrolladores


## ¿Qué es Ethereum?

Es una plataforma para ejecutar contratos inteligentes a través de una maquina virtual (Ethereum Virtual Machine - EVM)
Utiliza una cadena de bloques para sincronizar y guardar los cambios en el sistema
Utiliza una criptomoneda (Ether - ETH) para gestionar los costos de transacción dentro del ecosistema
En la ruta de desarrollo de Ethereum podemos encontrar 4 etapas:
Frontier (2015)
Homestead (2016)
Metropolis (2017)
Serenity (Ethereum 2.0). La etapa actual del ecosistema
Ethereum es Turing Completo en busca de ejecutar cualquier programa desde cualquier parte del mundo a diferencia de Bitcoin que es turing Incompleto. 


## Componentes de la red de Ethereum:

Componentes Principales:

Red P2P: Esta red hace referencia a un mecanismo de transferencia de igual a igual o persona a persona, sobre la cual no existe ningún ente central y de lo contrario se maneja la información de manera descentralizada y segura.

Algoritmo de consenso(Nakamoto): Ethereum al igual que bitcoin poseen un mecanismo de consenso basado en una prueba de trabajo o proof of work(PoW), presentada en sus inicios por Satoshi Nakamoto el creador de bitcoin. De esta manera Satoshi logro pactar un acuerdo o un consenso entre los nodos, para decidir cual nodo es el encargado de generar un nuevo bloque y actualizar la blockchain, ya que no existe un ente central.

Ether: Es la moneda propia de Ethereum, esta corre sobre la primera capa de la blockchain de Ethereum haciendola su moneda principal. El verdadero objetivo de esta moneda es servir como herramienta para poder construir la red de aplicaciones descentralizadas que corren dentro de Ethereum.

Nota: Ether no es lo mismo que Ethereum, Ether es la moneda, y Ethereum es la red.

Ethereum Virtual Machine: La maquina virtual de Ethereum es la principal encargada de leer y ejecutar la logica de los contratos inteligentes o Smart Contracts escritos en el lenguaje Solidity, para que la red blockchain pueda incluir e interpretar esta lógica. Cada uno de los nodos en su interior poseen esta maquina virtual.

Algoritmo criptográfico de seguridad (Ethash): Es el algoritmo encargado de cifrar la información manejada en la blockchain de Ethereum. Los mineros utilizan este algoritmo para poder crear nuevos bloques.

Clientes (Geth, Parity): Estos clientes son paquetes que instalas en tu computador para poder correr un nodo dentro de este y poder conectarte a la red blockchain de Ethereum

Conceptos relevantes:

Clientes/Nodos: Los clientes son los encargados de empaquetar el sistema sobre el cual se puede ejecutar un nodo en la red BlockChain. Cuando instalas en tu computador este cliente, automáticamente te conviertes en un nodo participante en la red de Ethereum.

Wallets: Las wallets o billeteras son aplicaciones que nos permiten administrar nuestras cuentas de Ethereum o de cualquier otra red, para poder interactuar con otras personas que también sean parte de esta red. Además de poder controlar nuestros fondos y activos.

Smart Contracts: Son los programas que nos permiten comunicarnos con la blockchain a partir de ciertas condiciones especificadas dentro de el contrato inteligente. Estos contratos se ejecutan dentro de la EVM para ser analizados y posteriormente implementados en la blockchain.

Web3: Es una nueva web descentralizada sobre la cual no necesariamente va a existir un ente central, si no que de lo contrario, al ser una red descentralizada o P2P vamos a hacer nosotros mismos los usuarios los encargados tomar decisiones autónomas sin necesidad de recurrir o de pedir información a un ente central.

## Eth y Gas
https://ethdocs.org/en/latest/ether.html#denominations 


### Que es el GAS?
Es una cantidad de ether, necesaria para interactuar con la red de ethereum, y sirve para poner a trabajar la EVM
Ethereum es una maquina de propósito general, es decir turing completo, en principio en teoría, si ethereum tuviera recursos de tiempo y de poder de procesamiento ilimitados, de energía y de tiempo ilimitados, en teoría podría correr cualquier programa qué se nos pueda ocurrir.
Es decir, hacer un deploy y correr en la red de ethereum con la EVM.
Pero qué pasa con tu computadora personas cuando en el codigo hay un error? Pasa qué se traba, se tilda, hay un bucle, y la pc deja de funcionar.
En el dia a dia en una PC común lo peor qué puede suceder es apagar la PC y volverla a encender.
Pero recordemos qué la EVM es una computadora virtual qué vive en la nube, qué está distribuida en todo el mundo respaldada por nodos qué nadie controla, por la tanto, nadie puede apagar esa maquina, la idea es qué nadie pueda hacerlo, qué sea resistente a la censura, qué nadie pueda decidir cuando si o cuando no interactuar en la máquina.
Por lo tanto si programamos un sistema protocolo, programa, protocolo, smart contract qué marque un error, en esa maquina virtual no habria forma de resetearla.
Y para eso crearon el gas, el gas es una cantidad de ether con la qué debes alimentar a la EVM para qué corra tu programa, y qué si en algún momento, hay un error o bucle, solo debemos esperar a qué se consuma el gas, y el programa deja de correr.
Todas las transacciones necesitan consumir gasolina para poder correr, si no hay gasolina, el programa se finaliza de forma inmediata.
Los costos para relacionarnos con la maquina, depende de la cantidad de gas, qué a su vez depende de la cantidad de codigo, qué quieras subir o qué quieras qué la maquina virtual, lea corra y ejecute.

## Etapas de Desarrollo

1.- Frontier
2.- Homestead
3.- Metropolis
4.- Serenity --> Ethereum 2.0. 

TIPOS DE MECANISMOS DE CONSENSO
### Prueba de trabajo
Ethereum, al igual que Bitcoin, actualmente utiliza el protocolo de consenso de Prueba de trabajo (PoW, por sus siglas en inglés).

- Creación del bloque
La Prueba de trabajo la realizan los mineros, que compiten por crear nuevos bloques repletos de transacciones procesadas. El ganador comparte el nuevo bloque con el resto de la red y gana algunos ETH minados recientemente. El ganador de la carrera será el ordenador del minero que consiga resolver el rompecabezas con más rapidez; esto produce el enlace criptográfico entre el bloque actual y el anterior. La resolución de este rompecabezas es la tarea de la Prueba de trabajo.

- Seguridad
La red se mantiene segura por el hecho de que necesitarías el 51% de la potencia computacional de la red para defraudar a la cadena. Esto requeriría inversiones grandes en equipamiento y energía, que probablemente provocarían que gastaras más de lo que ganas.

Más información sobre la Prueba de trabajo (PoW)

### Prueba de participación
Ethereum tiene planes de actualizarse para adoptar el protocolo de consenso de Prueba de participación (PoS / Prove of stake).

- Creación de bloques
La Prueba de participación la realizan los validadores que hayan apostado ETH para participar en el sistema. Un validador se elige aleatoriamente para crear nuevos bloques, compartirlos con la red y obtener recompensas. En lugar de tener que realizar un trabajo informático intenso, bastará con que apuestes tus ETH en la red. Esto fomentará un comportamiento saludable de la red.

- Seguridad
El sistema de Prueba de participación se mantiene seguro, ya que sería necesario disponer del 51 % de los ETH apostados para defraudar al sistema. Y, además, la apuesta podría interrumpirse por comportamiento malicioso.

## Que es la Criptografía Asimétrica

- Que es la Criptografía
Es la practica o el estudio de métodos para proteger información mediante la codificación de mensajes. 

- Criptografía Fuerte
  una llave en común para emisor y receptor

- Criptografía Asimétrica
  Dos llaves una publica y una privada. 

- Hash
  Una función criptográfica hash- usualmente conocida como “hash”- es un algoritmo matemático que transforma cualquier bloque arbitrario de datos en una nueva serie de caracteres con una longitud fija.

## Wallets

Wallet --> Función princiapl, proteger y administrar tus privates keys, para que tu solo puedas validar tu identidad y hacer transacciones de valor dentro de la red.
Wallet --> Función princiapl, proteger y administrar tus privates keys, para que tu solo puedas validar tu identidad y hacer transacciones de valor dentro de la red.

Wallets son aplicaciones qué sirven para administrar tus claves privadas, y qué tu puedas hacer transacciones de valor, y comunicarte con programas y plataformas, sin qué tu tengas qué saber demasiado de matemáticas y simplemente debes saber cómo manejas esa aplicación. Qué puede ser una aplicación web, puede ser una extensión de tu navegador, un cliente en tu computadora, etc. Hay muchos tipos de wallets.

Cuenta: Es parecido a una cuenta bancaria, tú tienes una identidad en la red qué te permite hacer diferentes acciones. Una cuenta no necesariamente está ligada a una identidad real de una persona, una cuenta puede estar ligada a un smart contract. Puede estar controlada por un programa, un humano, un grupo de humanos, o una organización.
Puedes: - Ver tu balance - Enviar moneda - Hacer transacciones
**
Transacciones:** Es una instrucción qué está controlada por una cuenta para cambiar el estado del sistema, para cambiar la información qué está almacenada en la blockchain. Pueden servirte para enviar una transacción de monedas o tokens, o para validar tu identidad.

Firmas digitales: Tu en lugar de hacer login en una plataforma como facebook, en este caso a través de la criptografía asimétrica y una función hash, tu puedes validar ante la plataforma qué tu tienes tus llaves privadas, y qué solo tu las tienes. Y esto lo haces a través de una wallet.

**Tokens: **Es una tipo de moneda o activo con una utilidad o distinción qué puede ser rastreado y transferido dentro de una blockchain como ethereum, pero no necesariamente tiene qué tener una utilidad, puede ser algo qué simplemente le quieras regalar a alguien como afecto. Y los puedes crear en el momento qué quieras.
Al igual qué monedas como bitcoin, los tokens también son únicos, transferible, indestructible, verificable por cualquiera.

## Smart Contracts

Es un programa o protocolo que se ejecuta de forma automática y descentralizada dentro de una blockchain, y sirve para controlar una acción o documentar un evento de acuerdo a los parámetros del código que lo componen.
El objetivo de los SC es evitar la necesidad de confiar en un tercero para desintermediar los procesos y así abaratar costos, reducir tiempos de operación y minimizar fraudes.

El concepto de contratos inteligentes se dio por Nick Szabo (https://blog.bitnovo.com/quien-es-nick-szabo/) un programador que contribuyo en la creacion de los mismos

Al bitcoin ser un protocolo limitado y Turing incompleto no tiene mucha flexibilidad para crear contratos inteligentes.

Un ejemplo de un smart contract es una maquina dispensadora de sodas cada vez que enviamos un dinero y ejecutamos una orden el smart contract responda de manera automática.

Hay una frase famosa que dice Code is Law el objetivo de un smart contract es evitar la necesidad de confiar en un tercero para des intermediar el proceso para abaratar costos reducir tiempos de operación y minimizar la posibilidad de fraudes.

## DeFi

- Decentralized Exchanges
Son casas de cambio descentralizadas y se les conoce como DEX.
Stable Coins
Son tokens ligados a una moneda, como podría ser el dólar, para que no sea tan volátil. Es una forma de poder guardar y usar tu dinero sin que los bancos o alguna otra institución financiera intervenga en el proceso.
- Préstamos.
Sirven para protegerte ante un desastre o accidentes. En DeFi se pueden hacer de manera automatizada.
- Derivados.
Son contratos que están ligados al valor de otro activo. Puedes validar el proceso mediante una wallet en una plataforma de DeFi.
-   Margin Trade
Especular o hacer trading con préstamos de la plataforma.
- Oráculos.
Es una forma de alimentar a tus Smart Contract de información del mundo real para que se ejecute tú código. Son sistemas que incorporan diversos mecanismos para validar que la información es correcta.

## NFT

Los NFT (Non-fungible tokens) son artículos digitales únicos, cuya propiedad se gestiona mediante una blockchain. Entre sus ejemplos figuran coleccionables, elementos de videojuegos, arte digital, tickets de eventos, nombres de dominios e incluso registros de propiedad de activos físicos.

Así que este conjunto de un articulo digital, asociado a un token digital, es lo que se conoce como NFT.
.

Fungibilidad

La idea de fungibilidad se define como “capaz de reemplazar o ser reemplazado por otro elemento idéntico”. Ejemplo:

Una moneda o billete es un ejemplo clásico de un activo fungible. Cinco dólares son siempre cinco dólares sin importar el número de serie de cada billete específico de cinco dólares, o si son cinco dólares en su cuenta bancaria. La capacidad de reemplazar un billete de cinco dólares por otro billete de cinco dólares (o cinco, para el caso) es lo que hace que la moneda sea fungible.
.
Por eso los NFTs son tokens no fungibles, ya que son únicos, distintos de cualquier otro, no tienen otro igual por el que puede ser intercambiado.
.

Estandares

Los estándares de tokens no fungibles permiten que estos se muevan fácilmente a través de múltiples ecosistemas. Brindan a los desarrolladores la garantía de que los activos se comportarán de una manera específica y describen exactamente cómo interactuar con la funcionalidad básica de los activos.
.
La unión del token con el archivo digital representa el NFT, y la calidad de este esta determinada por el estándar que sigue. Algunos son:

ERC-721: El primer estándar para representar activos digitales no fungibles
ERC-1155: Aporta el concepto de semi-fungibilidad al mundo NFT 
 
 ## DApps

 Una aplicación descentralizada es una aplicación informática que funciona en un sistema de computación distribuido.

La aplicación debe ser de código abierto y operar de forma autónoma, de modo que ninguna entidad controle la mayoría de los tokens.
Los datos de la aplicación deben almacenarse en una cadena de bloques (blockchain) pública.
La aplicación utiliza algún token criptográfico, necesario para obtener acceso a la DApp y para recompensar las contribuciones de sus usuarios.
La aplicación debe generar tokens, mediante algún algoritmo criptográfico, que certifiquen el valor de las contribuciones de los usuarios del sistema.

## Mecanismo de Consenso

### Proof-of-Work, Proof-of-Stake y sistemas híbridos

https://ethereum.org/en/developers/docs/consensus-mechanisms/ 

## EtHash & Casper

PoW --> Proof-of-work --> Algoritmo Ethash (Resolver un trabajo como prueba (gasto energético).
PoS --> Proof-of-Stake --> Casper (Invertir una suma como prueba).
Ethereum 2.0 --> Poco a poco se pasará de Ethash a Casper

## Fork

Es el en el que se actualiza la blockchain cuando no hay consenso. 
Se divide la cadana de blockchain y quedan dos cadenas. 

## EIP y soluciones de escalado

Etherereum Improve Proposal (EIP)
	○ Hacer una propuesta por escrito, que los miembros puedan revisar y aportar, y lentamente ir traduciendo la propuesta escrita a un bloque programado que ejecute el cambio en la red con el mayor consenso posible.
- Ethereum 2.0
	○ Transicionar a PoS
	○ Matener la seguridad en un entorno de consenso de PoS
		§ 51% Attack -> Cuando el 51% de los nodos es controlado por un monopolio o oligopolio de nodos
			□ Se disuade estos ataques con los ETH Staked, ya que hay un riesgo económico
	○ Escalado -> Que se puedan ejecutar más transacciones por segundo!
		
		
		§ Sharding -> Fragmentar una base de Datos o motor de búsqueda para aligerar la concentración de recursos y facilitar funciones.
			□ Básicamente dividir la cadena principal en pequeñas cadenas, para que estas procesen transacciones, sin cargar todo el peso del procesamiento de transacciones a la cadena principal
		§ The Beacon Chain -> Una cadena paralela a la cadena de Ethereum que trabaja ya con PoS
		§ Soluciones de Segunda Capa (L2) -> Buscan aligerar la red de Ethereum
			Polygon
			Raiden
			Xdai
