/* 1) Programa una función que cuente el número de caracteres de una cadena de texto,
Ej: miFuncion("Hola Mundo") devolverá 10.
*/

const respuesta = (ejercicio1 = "") =>
    (!ejercicio1)
    ? console.warn('No se paso ningún dato')
    : console.info(`La información del ejercicio 1 es ${ejercicio1} y tiene ${ejercicio1.length} `);

respuesta();
respuesta('Hola Mundo');


/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
Ej: miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

const recortarTexto = ( ejercicio2 = "", longitud = undefined) =>
    (!ejercicio2)
    ? console.warn('Por favor pasa un texto para su recorte')
    : (longitud === undefined)
        ? console.error("No se recibio la longitud para recortar")
        : console.info(` El texto a recortar es: ${ejercicio2}  y queda de la siguiente forma ${ejercicio2.slice(0, longitud)}` );

recortarTexto();
recortarTexto("Hola Mundo", 4);
recortarTexto("Hola Mundo");

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
Ej: miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

const datoArray = (ejercicio3 = "", separadorCadena = undefined ) =>
    (!ejercicio3)
    ? console.warn('Por favor pasar datos para crear el array')
    : (separadorCadena === undefined)
        ? console.error('No se creo el array')
        : console.info( ejercicio3.split(separadorCadena));

datoArray();
datoArray("Hola que tal", " ");

/* 4) Programa una función que repita un texto X veces, Ej: miFuncion('Hola Mundo', 3)
devolverá Hola Mundo Hola Mundo Hola Mundo.

En las validaciones es bueno colocar un return para no permitir que se siga ejecutando la función
ya que es inecesario que sigasi ya hay una respuesta */

const repetirCadena = (ejercicio4 = "", repetir = undefined) => {
    /* Validar los posibles errores que se pueden presentar ya sea por codigo o por que el usuario
    ingreso algún dato erroneo */
    if (!ejercicio4) return console.warn('No ingresaste un texto');

    if (repetir === undefined) return console.error('No inresaste el número de veces a repetir el texto');

    if (repetir === 0) return console.warn("El número de veces no puede ser 0");

    /* Este se utiliza en caso de que el usuario ingrese un número negativo y ya que un número negativo
    no se puede repetir entonces toca indicar que es un error */
    if ( Math.sign(repetir) === -1) return console.error("El número de veces no puede ser negativo");

    /* Se crea un bucle el cual recorra las veces que se necesita y se imprima */
    for ( let i = 1; i <= repetir; i++) console.info(`${ejercicio4}, ${i}`);
};

repetirCadena('Hola mundo ', 3);
repetirCadena();
repetirCadena("Hola");
repetirCadena("Hola", 0);
repetirCadena("Hola", -1);
