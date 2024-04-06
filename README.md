# Compilador ANTLR
**Sweet Code** es un nuevo lenguaje creado por mí basado en el lenguaje C# pero con cambios en sintaxis y nuevos tipos de datos (mint, mintchar, minfloat). Por el momento, este nuevo lenguaje de programación permite realizar:

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#acerca-del-proyecto">Acerca del proyecto</a></li>
    <ul>
        <li><a href="#built-with">Built With</a></li>
    </ul>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#estructura-basica">Estructura Basica</a></li>
    <li>
      <a href="#declaracion-de-variables">Declaracion de Variables</a>
      <ul>
        <li><a href="#declaracion-de-variables-con-asignacion">Declaracion de Variables con Asignación</a></li>
      </ul>
    </li>
    <li>
      <a href="#impresion-de-variables">Impresion de variables</a>
    </li>
    <li><a href="#condicionales">Condicionales</a></li>
    <ul>
        <li><a href="#sweetcondition">SweetCondition</a></li>
        <li><a href="#else-if">Else if</a></li>
        <li><a href="#else">Else</a></li>
    </ul>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## Acerca del Proyecto
[![Product Name Screen Shot][product-screenshot]](https://compilador-antlr.vercel.app)

Sweet Code tiene una estructura similar al lenguaje C#, por lo que se compone de bloques de código en donde se podrá encontrar declaración e impresión de variables, condicionales y comentarios.

Este lenguaje se compone de tres tipos de datos:
  * **Mint**: Tipo de dato entero.
  * **Mintchar**: Tipo de dato decimal.
  * **Mintflot**: Tipo de dato flotante
  
### Built With
  Este proyecto fue hecho con las siguientes librerias
  * [![Next][Next.js]][Next-url]
  * [![antlr][antlr]][antlr-url]
  * [![node.js][node.js]][node-url] 
  * [![Tailwind][Tailwind.css]][Tailwind-url]
<p align="right">(<a href="#compilador-antlr">Back to Top</a>)</p>

## Getting Started
  
  ### Prerequisites
  Para poder utilizar correctamente este proyecto es necesario contar con la instación de node.js ya que se utilizará npm, al igual que la instalación de antlr4.
  * npm
    ```sh
    npm i npx
    ```
  
  * antlr
    ```sh
    npm i antlr4
    ```
  <p align="right">(<a href="#compilador-antlr">Back to Top</a>)</p>
  
  ### Installation
  Para poder ejecutar correctamente el proyecto, es necesitario clonar el repositorio e instalar los correspondientes paquetes de npm y antlr.

  1. Clone the repo
     ```sh
     git clone https://github.com/mayra1703/CompiladorANTLR.git
     ```
  2. Install NPM packages
     ```sh
     npm install
     ```
  3. Install ANTLR
     ```sh
     npm i antlr4
     ```
  4. Run server
     ```sh
     npm run dev
     ```
  <p align="right">(<a href="#compilador-antlr">Back to Top</a>)</p>


## Estructura Basica
  * ### Bloque de código
    Para iniciar un bloque de codigo es necesario iniciar con la palabra reservada Sweet seguido de llaves; dentro de estas se encontrará el contenido deseado
    >Sweet {
    >
    >  // contenido
    >
    >}

  * ### Declaracion de Variables
    Sweet Code permite realizar declaracion de variables con la sintaxis:
    >'# tipo_dato identificador .'
    
    Donde siempre debe comenzar con un gatito '#', seguido del tipo de dato, el identificador y debe terminar con un punto.

  * ### Declaracion de Variables con Asignacion
    Sweet Code permite realizar declaracion de variables con asignacion siguiendo la siguiente sintaxis:
    >'# tipo_dato identificador = asignacion .'
    
    Donde siempre debe comenzar con un gatito '#', seguido del tipo de dato, el identificador, un signo de igual '=', una asignacion y, de igual forma, debe terminar con un punto.

  * ### Impresion de Variables
    Sweet Code permite realizar impresion de variables para mostar el identificador junto a su valor, siguiendo la siguiente sintaxis:
    >-> SHOW (identificador) .
    
    Donde se debe comenzar con una flecha '->', seguido de la palabra **SHOW** en mayuscula, despues el identificador que se quiere mostrar y terminar con un punto.

  * ### Condicionales
  
    * ### SweetCondition
      >SweetCondition(condition) {
      >
      > // block
      >
      >}

    * ### Else if

    * ### Else
      >SweetCondition(condition) {
      >
      > // block
      >
      >}
      >
      >Else {
      >
      >}
  <p align="right">(<a href="#compilador-antlr">Back to Top</a>)</p>

<!-- CONTACT -->
## Contact
Mayra D. Méndez Robles - <maymendez3666@gmail.com>

Versel Link: https://compilador-antlr.vercel.app

<p align="right">(<a href="#compilador-antlr">Back to Top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Tailwind.css]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com
[antlr]: https://img.shields.io/badge/ANTLR-FF0000?style=for-the-badge&logo=antlr&logoColor=white
[antlr-url]: https://www.antlr.org
[node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/en
[product-screenshot]: public/screenshot.png
