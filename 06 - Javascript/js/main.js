// Imprimir en consola
console.log('Hola Mundo');

const nombre = 'Alejandro Ramírez';
let edad = 20;
let estudio = 'Tecnología en Desarrollo de Software';

console.log('Hola, mi nombre es ' + nombre + ' tengo ' + edad + ' años y estoy estudiando ' + estudio);

//Arrow Function

// Primer función
saludarArrow = () => 'hola';
const saludo = saludarArrow();
console.log(saludarArrow());

// Segunda función
sumarArrow = numero => {
    return numero + Math.random();
};
const resultadoSuma = sumarArrow(5);
console.log('resultado: ', resultadoSuma);

// Tercer función
multiplicarArrow = (numeroUno, numeroDos, numeroTres) => {
    let resultado = numeroDos * numeroDos * numeroTres;
    return resultado;
}
console.log('Su resultado es: ' + multiplicarArrow(1, 2, 3));

// Cuarta función 
let letras = ['A', 'B', 'C', 'D'];

removerArrow = arreglo => {
    let arregloModificado = arreglo.pop();
    return arregloModificado;
}

console.log('Arreglo normal: ' + letras);
console.log('Arreglo modificado: ' + removerArrow(letras));