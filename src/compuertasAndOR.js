/**
 * && -> AND
 * || -> OR
 * !  -> NOT
 **/

var resultado;

//Compuerta AND
console.log("Compuerta AND");

resultado = true && false;
console.log("true && false: ", resultado);

resultado = (10 > 9) && ('Dylan' === 'Dylan');
console.log("(10 > 9) && ('Dylan' === 'Dylan'): ", resultado);

resultado = (5 > 10) && ('Dylan' === 'Dylan');
console.log("(5 > 10) && ('Dylan' === 'Dylan'): ", resultado);

resultado = (5 > 10) && ('Dylan' === 'Juan');
console.log("(5 > 10) && ('Dylan' === 'Juan'): ", resultado);

//Compuerta OR
console.log("Compuerta OR");

resultado = (10 > 9) || ('Dylan' === 'Dylan');
console.log("(10 > 9) || ('Dylan' === 'Dylan'): ", resultado);

resultado = (5 > 10) || ('Dylan' === 'Dylan');
console.log("(5 > 10) || ('Dylan' === 'Dylan'): ", resultado);

resultado = (5 > 10) || ('Dylan' === 'Juan');
console.log("(5 > 10) || ('Dylan' === 'Juan'): ", resultado);

resultado = (10 > 9) || ('Dylan' === 'Juan');
console.log("(10 > 9) || ('Dylan' === 'Juan'): ", resultado);