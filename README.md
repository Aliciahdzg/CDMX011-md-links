# Markdown Links

## Índice

* [1. Descripción](#1-descripción)
* [2. Resumen de implementación](#2-resumen-de-implementación)
* [3. Cómo usar la librería](#3-cómo-usar-la-librería)
* [4. Dependencias y DevDependencies utilizadas](#4-dependencias-y-devdependencies-utilizadas)
* [5. CLI (Command Line Interface - Interfaz de Línea de Comando)](#5-cli-command-line-interface-interfaz-de-linea-de-comando)

***

## 1. Descripción 

Esta libreria proporciona al usuario un análisis de los links que se encuentran en sus archivos MD para conocer el estatus de cada uno y si necesitan ser reemplazados para que funcionen a través de la ruta ya sea del archivo directo o de la carpeta que lo contiene por medio de la recursividad. Se pueden utilizar rutas relativas y absolutas. 

Por cada link obtienes el texto de titulo que lo acompaña y la ruta del archivo en el que se encuentra.

## 2. Resumen de implementación

Antes de comenzar con la implementación lleve a cabo un diagrama de flujo en el que me base para llevar a cabo la libreria

## 3. Cómo usar la librería


## 4. Dependencias y DevDependencies utilizadas


### 5) CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la **terminal**:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link (truncado a 50 caracteres).

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

