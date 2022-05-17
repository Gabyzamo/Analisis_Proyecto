/*Nombres: Maria Sakae Higuchi Alvarez y Gabriela Alejandra Zamora Roa  */
  

1//
var ValorVariable= "2";
 
if (ValorVariable != 5){
   console.log("La condición es verdadera")
}

2//
var valor ="6";
 
if (valor == 6 && valor <= 10){
   console.log("El valor es correcto")
}


3//
var numero =2;
 
if (numero === "2"){
   console.log('El número es igual que "2" en valor y tipo');
}else if(numero==="3"){
    console.log('El número es igual a "3" en tipo y valor');
}else if(numero<="15" && numero> 5){            
    console.log("El número es mayor que 5 y menor igual que 15");
}else if(numero>"15"){
    console.log("El número es mayor que 15");
}
//Respuesta 3.A
    numero="2"
//Respuesta 3.B
    numero="3"
//Respuesta 3.C
    numero=10
//Respuesta 3.D
    numero=20

4//
var operacion="-";
var numero1="5";
var numero2="9";
var resultado;
 
if(operacion == "+"){
    resultado= (numero1+numero2)
    console.log( "su resultado es" +resultado);
}else if(operacion == "-"){
    resultado= (numero1-numero2)
    console.log( "su resultado es" +resultado);
} else if(operacion == "*"){
    resultado= (numero1*numero2)
    console.log( "su resultado es" +resultado);
}

5//
var pais
var capital
pais="Colombia"
if(pais=="Alemania"){
    console.log("la capital de "+pais+" es Berlin")
}
// pais="Brasil"
if(pais=="Brasil"){
    console.log("la capital de "+pais+" es Brasilia")
}
// pais="Canada"
if(pais=="Canada"){
    console.log("la capital de "+pais+" es Ottawa")
}
// pais="Colombia"
if(pais=="Colombia"){
    console.log("la capital de "+pais+" es Bogota")
}