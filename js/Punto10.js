// 10) numero divisible por 2,3,5 y o 7
let numero = prompt("ingrese un numero");

if(numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0)
{
    document.write("si e sdivisible por 2,3,5 o 7");
} else{
    document.write("no es divisible, buscate otro numero");
}
