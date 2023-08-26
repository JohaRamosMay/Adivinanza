const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
    };
    const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado === numeroSecreto) {
    console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
    } else if (numeroAdivinado > numeroSecreto) {
    console.log('El número secreto es menor. ¡Sigue intentando!');
    } else {
    console.log('El número secreto es mayor. ¡Sigue intentando!');
    }
    };
    module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
    };

    const readlineSync = require('readline-sync');
const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza');
const obtenerNumeroUsuario = () => {
return readlineSync.question('Ingresa un número: ');
};
const juegoAdivinanza = () => {
const numeroSecreto = generarNumeroAleatorio();
let numeroAdivinado = 0;
console.log('¡Bienvenido a Adivina el número secreto!');
console.log('Intenta adivinar el número del 1 al 100.\n');
while (numeroAdivinado !== numeroSecreto) {
numeroAdivinado = obtenerNumeroUsuario();
verificarAdivinanza(numeroSecreto, numeroAdivinado);
}
};
juegoAdivinanza();

while (condición) {
    // Código a ejecutar mientras se cumpla la condición
    }
