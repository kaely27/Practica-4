let numeros = [1,2,3,4,5];
console.log(numeros.pop());
numeros.push(6,8,11,23,55);
console.log(numeros.push(100));
//console.log(numeros.findIndex(9)); 
console.log(numeros.length);//imprime la longitud del arreglo = 10
console.log(numeros[9]);//imrpime el elemnto del indice 9 = 100
let ultimoIndice = numeros.length -1;
console.log(numeros[ultimoIndice]); 
console.log(numeros.slice(0,2));
let copiaNumeros = numeros.slice(0,2);
console.log(numeros);
console.log(copiaNumeros);