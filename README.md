# Markdown Links

## Índice

* [1. Descripción](#1-descripción)
* [2. Resumen de implementación](#2-resumen-de-implementación)
* [3. Cómo usar la librería](#3-cómo-usar-la-librería)
* [4. CLI (Command Line Interface - Interfaz de Línea de Comando)](#4-cli-command-line-interface-interfaz-de-linea-de-comando)
* [5. Dependencias y DevDependencies utilizadas](#5-dependencias-y-devdependencies-utilizadas)

***

## 1. Descripción 

Esta libreria proporciona al usuario un análisis de los links que se encuentran en sus archivos MD para conocer el estatus de cada uno y si necesitan ser reemplazados para que funcionen a través de la ruta ya sea del archivo directo o de la carpeta que lo contiene por medio de la recursividad. Se pueden utilizar rutas relativas y absolutas. 

Por cada link obtienes el texto de titulo que lo acompaña y la ruta del archivo en el que se encuentra.

## 2. Resumen de implementación

Antes de comenzar con la implementación lleve a cabo un diagrama de flujo para guiarme con la estructura del proyecto:

![diagrama-de-flujo](https://github.com/Aliciahdzg/CDMX011-md-links/blob/main/imagenesProyecto/diagramaDeFlujoMd-links.png)

## 3. Cómo usar la librería

Para poder utilizar esta libreria se requiere seguir los siguientes pasos:

1. Clonar localmente el repositorio.
2. Hacer npm install para que instale las dependencias necesarias.
3. Instalar npm link para que funcione con el nombre del script md-links.
4. Desde la terminal ingresar los comandos y banderas de la siguiente sección.


## 4. CLI (Command Line Interface - Interfaz de Línea de Comando)

Se ejectua de la siguiente manera

`md-links <path-to-file> [options]`

Por ejemplo:

$ md-links ./some/example.md

El comportamiento por defecto no valida si las URLs responden ok o no, solo identifica el archivo markdown (a partir de la ruta que recibe como argumento), analiza el archivo Markdown e imprime los links que va encontrando, junto con la ruta del archivo donde aparece y el texto que hay dentro del link, si no encuentra ningun link no regresa nada.

![links-encontrados](https://github.com/Aliciahdzg/CDMX011-md-links/blob/main/imagenesProyecto/linksEncontrados.png)

#### Options

##### `--validate`

Al pasar la opción `--validate` o `--v` el módulo hace una petición HTTP para averiguar si el link funciona o no. Vemos en el _output_ que incluye la palabra `ok` o `fail` segun corresponda a un status valido o no debajo del codigo de status o el texto en caso de ser un codigo fallido

![links-validate](https://github.com/Aliciahdzg/CDMX011-md-links/blob/main/imagenesProyecto/linksValidate.png)

##### `--stats`

Al pasar la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

![links-stats](https://github.com/Aliciahdzg/CDMX011-md-links/blob/main/imagenesProyecto/linksStats.png)

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

![links-validate-stats](https://github.com/Aliciahdzg/CDMX011-md-links/tree/main/imagenesProyecto)

### 5. Dependencias y DevDependencies utilizadas

* Axios
* Chalk
* Figlet
* Minimist
* Eslint
* Jest

