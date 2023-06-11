// Retornar os números maiores que 10.
const numeros = [2, 51, 81, 2, 4, 6, 8, 5, 7, 12, 16, 23, 28];

function callbackFilter(num){
   return  num > 10;
}


const numerosFilter = numeros.filter(callbackFilter);
console.log(numerosFilter);
