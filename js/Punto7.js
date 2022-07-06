// 7) MOSTRAR EL MAYOR DE 3 numeros

let Numero1 = parseInt(prompt("indiique un numero"))
let Numero2 = parseInt(prompt("indiique un numero"))
let Numero3 = parseInt(prompt("indiique un numero"))

if(Numero1>Numero2){
    document.write("el primeer numero es el mayor, numero ingresado" + Numero1);
} else if (Numero2<Numero3){
    document.write("el segundo numero es el mayor, numero ingresado" + Numero2); 
} else{
    document.write("el tercer numero es el mayor, numero ingresado:" + Numero3);
}
