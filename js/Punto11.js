// 11) numeuro divido por 2,3,5 Y 7
let numero = prompt("ingrese un numero");

if(numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0){
    if( numero % 2 === 0){
        document.write("si es divisible por 2");
    }
    if( numero % 3 === 0){
        document.write("si es divisible por 3");
    }
    if( numero % 5 === 0){
        document.write("si es divisible por 5");
    }
    if( numero % 7 === 0){
        document.write("si es divisible por 7");
    }
}
 else{
    document.write("no es divisible, buscate otro numero");
}