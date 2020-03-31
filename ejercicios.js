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
devolverá Hola Mundo Hola Mundo Hola Mundo */

const repetirCadena = (ejercicio4 = "", repetir = undefined) => {

    if (!ejercicio4) return console.warn('No ingresaste un texto');

    if (repetir === undefined) return console.error('No inresaste el número de veces a repetir el texto');

    if (repetir === 0) return console.warn("El número de veces no puede ser 0");

    if ( Math.sign(repetir) === -1) return console.error("El número de veces no puede ser negativo");

    for ( let i = 1; i <= repetir; i++) console.info(`${ejercicio4}, ${i}`);
};

repetirCadena('Hola mundo ', 3);
repetirCadena();
repetirCadena("Hola");
repetirCadena("Hola", 0);
repetirCadena("Hola", -1);


/* 5) Programa una función que invierta las palabras de una cadena de texto,
Ej. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

const inverCadena = (cadena = "") =>
    (!cadena)
    ? console.warn("No ingresaste una cadena de texto")
    : console.info( cadena.split("").reverse().join(""));

inverCadena();
inverCadena("Commodo excepteur veniam culpa ipsum tempor Lorem.");

/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
Ejemplo: miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/
const contar = (cadena = "", texto="") => {

    if (!cadena ) return console.warn('Ingresar el texto a contar ');
    if (!texto ) return console.warn('Ingresar la palabra a evaluar');
    if ( Math.sign(cadena) === -1 ) return console.error('No puede ingresar números negativos');

    let i = 0, contador = 0;

    while ( i !== -1 ) {
        
        i = cadena.indexOf(texto, i);

        if ( i !== -1) {
            i++;
            contador++;
        }

        return console.info(` La palabra ${texto} se repite ${contador} veces `);
    }

};

contar("hola mundo adios, mundo, mundo y mas mundo", "mundo");
contar("Mollit nisi esse veniam ea dolor laboris cupidatat ullamco.", "nisi");
contar(-1);

/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo
(que se lee igual en un sentido que en otro),
Ej: mifuncion("Salas") devolverá true.
*/

const palindromo = ( palabra = "") => {
    if ( !palabra ) return console.warn('No ingresaste una palabra o frase');

    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return (alReves === palabra)
        ? console.info(`Sí es palíndromo, Palabra original ${palabra}, Palabra al revés ${alReves}`)
        : console.warn(`La palabra o frase no es palíndomo, Palabra original ${palabra}, Palabra al revés ${alReves}`);
};

palindromo('Salas');
palindromo('Mario');

/*
8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
Ej: miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

const eliminarCaracteres = ( texto = "", eliminar = "") =>
    (!texto)
        ? console.warn(' No ingresaste un texto')
        : (!eliminar)
            ? console.error("No ingresaste un textoa eliminar de caracteres")
            : console.info(texto.replace(new RegExp(eliminar, "ig"), ""));

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz", "xyz");


/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */

const numeroAleatoreo = ( valor1 = "", valor2 = "") => {
    if (!valor1) return console.error("No ingreso el primer valor");
    if (!valor2) return console.error("No ingreso el segundo valor");
    if ( isNaN(valor1)) return console.error("No ingreso un número 1");
    if ( isNaN(valor2)) return console.error("No ingreso un número 2");

    if (valor1 < 501) return console.warn("El valor ingresado no es el correcto");
    if (valor2 > 600) return console.warn("El valor ingresado no es el correcto");

    let aleatorio = Math.round(Math.random()*(valor2-valor1)+valor1);

    return console.info(`El rango que se tendra es ${valor1} y ${valor2}, el Número aleatorio tomado es ${aleatorio}`);
}
numeroAleatoreo( 501, 600);
numeroAleatoreo( 500, 601);
numeroAleatoreo( 500, 'Hola');

/*
10) Programa una función que reciba un número y evalúe si es capicúa o no
(que se lee igual en un sentido que en otro),
Ej: miFuncion(2002) devolverá true.
*/

const capicua = ( numero = "") => {
    if (!numero) return console.error("No ha ingresado ningún número");
    if ( isNaN(numero) ) return console.warn('No ingresaste un número');

    /* Converitr mi numero en un texto para poderlo revertir se requiere ejecutar el metodo toString() que convierte
    eldato ingresado en una cadena de texto / String */

    numero = numero.toString();

    let alReves = numero.split("").reverse().join("");

    return (alReves === numero)
        ? console.info(`Sí es capicua, Numero original ${numero}, Numero al revés ${alReves}`)
        : console.warn(`El Numero no es capiculo, Numero original ${numero}, Numero al revés ${alReves}`);

};

capicua();
capicua("hola");
capicua(2011);
capicua(2002);


/*
11) Programa una función que calcule el factorial de un número
(El factorial de un entero positivo n, se define como el producto de todos los números enteros
positivos desde 1 hasta n), Ej. miFuncion(5) devolverá 120. */


const factorial = (dato = "") => {

    if ( !dato ) return console.error("No ha ingresado ningún número");
    if ( isNaN(dato) ) return console.warn('No ingresaste un número');
    if ( Math.sign(dato) === -1 ) return console.error('No puede ingresar números negativos');

    let total = 1;

	for ( let i = dato; i > 0; i--) {
		total *= i;
	}
	return console.info( `El numero factorial de ${dato} es igual a ${total} ` );
};

factorial();
factorial('HOla');
factorial(-1);
factorial(8);


/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, 
Eje: miFuncion(7) devolverá true. */
const primo = ( numero = '' ) => {
    
    let validar = true;

    if ( !numero ) return console.error("No ha ingresado ningún número");
    if (numero === undefined) return console.warn(" No ingresaste un numero");
    if (typeof numero !== "number") return console.error(`El dato "${numero}" ingresado, No es un numero`);
    if ( Math.sign(numero) === -1 ) return console.error('No puede ingresar números negativos');

    /* Se crea un bucle para que recorra las veces que sean necesarias el nuumero ingresado */
    for(let i = 2; i < numero; i++) {
        if (numero%i === 0) {
            validar = false;
            return console.warn(`El numero ${numero} ingresado no es primo`);
        }
    }
    if (validar === true ) {
        return console.info(`El numero ${numero} ingresado es un Primo`);
    }
}

primo();
primo(1);
primo(2);
primo(7);
primo('Hola');
primo(9);
primo(-1);
primo(3);
primo(4);

/* 13) Programa una función que determine si un número es par o impar, 
Ej: miFuncion(29) devolverá Impar. */

const parImpar = ( numero = "" ) => {
    if ( !numero ) return console.error("No ha ingresado ningún número");
    if (numero === undefined) return console.warn(" No ingresaste un numero");
    if (typeof numero !== "number") return console.error(`El dato "${numero}" ingresado, No es un numero`);
    if ( Math.sign(numero) === -1 ) return console.error('No puede ingresar números negativos');

    let dato = (numero % 2) ? console.warn(`El numero ${numero} ingresado es Impar`) : console.info(`El numero ${numero} ingresado es Par`);

    return dato;
}

parImpar();
parImpar(2);
parImpar('Hola');
parImpar(10);
parImpar(-10);
parImpar(3);

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
Ej: miFuncion(0,"C") devolverá 32°F. */

const datosCaF = ( c = '', f  = '') => {

    if ( isNaN(c) || isNaN(f) ) return console.warn('La informacion ingresada contiene texto y unicamente se aceptan numeros');
    if ( !c && !f ) return console.error("Debes ingresar un Numero");

    // Para obtener celsius
    let cToF = c;
    const cTemp = 'celsius';
    let cToFahr = cToF * 9 / 5 + 32;
    
    // Para obtener fahrenheit
    let fToC = f;
    const fTemp = 'fahrenheit';
    let fToCel = (fToC - 32) * 5 / 9;

    const resultado = ( c !== '' && f === '' ) 
                        ? console.info(` El dato ingresado es: ${cToF}\xB0C y el resultado es: ${cToFahr} en grados ${fTemp}`)
                        : ( c === '' && f !== '' )
                            ? console.info(` El dato ingresado es: ${fToC}\xB0F y el resultado es: ${fToCel} en grados ${cTemp}`)
                            : console.error('NO se pueden ingresar dos datos');
    
    return resultado;
       
};

datosCaF(0, 'celcius');
datosCaF();
datosCaF(0, 5);
datosCaF(2,'');
datosCaF('',3);
datosCaF('','');


/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, 
Ej: miFuncion(100,2) devolverá 4 base 10. */
const convertirNumeros = ( valor = '', unidad = '') => {

    if ( !valor || !unidad ) return console.error("No has ingresado los datos de número y unidad");
    if (valor === undefined) return console.warn(" No ingresaste un numero");
    if (typeof unidad !== "number") return console.error(`El dato "${unidad}" ingresado, No es un numero`);

    // Decimal a Binadio
    let dToBinario  = ( valor.toString(unidad));

    // Binario a Decimal
    let btoDecimal = parseInt(valor, unidad);


    const resultado = ( typeof valor !== 'number' )
                        ? console.info(`El número binario ${valor}, el valor decimal es: ${btoDecimal}`)
                        : console.info(`El número decimal ${valor}, el valor dinario es: ${dToBinario}`);
    return resultado;
}

convertirNumeros();
convertirNumeros("100", 2);
convertirNumeros('', 3);
convertirNumeros(100, 2);
convertirNumeros(3, '');
convertirNumeros(200, 4);
convertirNumeros(3, 'hola');
convertirNumeros('200', 4);

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
Ej: miFuncion(1000, 20) devolverá 800. */

const devolverMonto = ( valor = '', descuento = '') => {

    if ( !valor || !descuento ) return console.error("No has ingresado los datos de valor y descuento");
    if (typeof valor !== "number" || typeof descuento !== "number") return console.error(`El dato ingresado, No es un valor`);
    if ( Math.sign(valor) === -1 || Math.sign(descuento) === -1 ) return console.error('No puede ingresar números negativos');

    let resultado = (((valor*-descuento)/100)+valor);

    return console.info(resultado);
}

devolverMonto();
devolverMonto(1000, 20);
devolverMonto('Hola',5);
devolverMonto(100, 'hola');
devolverMonto('','');
devolverMonto(10,1000);
devolverMonto(2000, -10);

/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
Ej: miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

const fechaValida = ( year = '', month = '', day = '') => {
    
    if ( !year || !month || !day ) return console.error("No has ingresado una fecha correcta");
    if ( year === undefined || month === undefined || day === undefined) return console.warn(" No ingresaste una fecha");
    if (typeof year !== "number" || typeof month !== "number" || typeof day !== "number") return console.error(`La fecha ingresada, no es correcta`);
    if ( Math.sign(year) === -1 || Math.sign(month) === -1 || Math.sign(day) === -1 ) return console.error('No puede ingresar números negativos');

    let fechaInicio = new Date(1984,4,23);
    let fechaFinal = Date.now();
    const transcurrido = fechaFinal - fechaInicio;

    let milisecons = 31556900000;

    const valorFecha = transcurrido / milisecons;

    const anio = Math.floor(valorFecha);

    return console.info(anio);
}

fechaValida();
fechaValida('','','');
fechaValida('hola', 3, 6);
fechaValida(1984,4,23);
fechaValida(3, 'hola', 6);
fechaValida(3, 6, 'hola');
fechaValida('12','5','4');
