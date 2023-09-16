
var numero = parseInt(prompt("Ingrese un número:"));


var resultado;


if (numero > 0 && numero < 10) {
    
    resultado = numero * numero;
} else if (numero >= 10 && numero < 100) {
    
    resultado = numero * 2;
} else if (numero >= 100 && numero < 1000) {
    
    resultado = numero - 100;
} else {
   
    resultado = "Número no válido";
}


console.log("Resultado:", resultado);
