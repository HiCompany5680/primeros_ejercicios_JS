/* 1) Programa una función que cuente el número de caracteres de una cadena de texto,
Ej: miFuncion("Hola Mundo") devolverá 10.
*/

const respuesta = () => {
    const ejercicio1 = "Hola Mundo";
    if(ejercicio1.length === 10) {
        console.log(ejercicio1.length);
    } else {
        console.log('No es un string');
    }
};
respuesta();

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
Ej: miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

const ejercicio2 = () => {
    const respuesta2 = "Hola Mundo";
    if (respuesta2 != "Hola Mundo") {
        console.log("Vuelve a intentarlo");
    } else {
        console.log(respuesta2.slice(0,4));
    }
};
ejercicio2();

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
Ej: miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

const ejercicio3 = () => {
    const datoString = "hola que tal";
    const datoArray = datoString.split(" ");
    console.log(datoArray);
};
ejercicio3();

/* 4) Programa una función que repita un texto X veces, Ej: miFuncion('Hola Mundo', 3)
devolverá Hola Mundo Hola Mundo Hola Mundo.  */

const ejercicio4 = () => {
    const repetir = "Hola Mundo";
    const respuesta4 = repetir.repeat(3);
    console.log(respuesta4);
};

ejercicio4();


