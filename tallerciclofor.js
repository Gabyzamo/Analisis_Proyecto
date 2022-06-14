//taller


1// 
/*Diseñe un algoritmo que reciba 2 números sin ningún orden. El algoritmo debe contener un 
ciclo for que imprima los números consecutivos ascendentemente, cuyo rango está dado por 
los dos números que ingresó el usuario. Ejemplo: el usuario ingresa el 38 y el 5, el ciclo
for debe imprimir 5, 6, 7, 8, …, 38*/

var numero1 = parseInt(prompt("Ingrese el numero con el que quiere iniciar"))
var numero2 = parseInt(prompt("Ingrese el numero con el que quiere finalizar"))
if (numero1< numero2){
for(var i=numero1; i<=numero2; i+=1)
    console.log(i);
}else{
    for(var i=numero2; i<=numero1; i+=1)
    console.log(i);
}
2//
/*Escriba un algoritmo que reciba un número e imprima la tabla de multiplicar desde
 el cero hasta el 10 de ese número. Ejemplo: ingresa el 5, imprime 
5x0=0
5x1=5
…
5x10=50*/
var numero = parseInt(prompt("Ingrese el numero de la multiplicacion"))  
 
for(var i=0; i<=10; i++){

    console.log(numero+"x"+ i +"="+numero*i);
}

3//
/*Modifique el código anterior para que imprima la tabla de multiplicar del 
número que el usuario decida hasta el número que este indique. 
Ejemplo: tabla de multiplicar del número 3 hasta el 12, imprime.
	3x0=0
	…
	3x12=36*/

    var numero = parseInt(prompt("Ingrese el numero de la multiplicacion"))  
    var limite=parseInt(prompt("Ingrese un número hasta donde quiere conocer la multiplicacion"))
 
for(var i=0; i<=limite; i++){

    console.log(numero+"x"+ i +"="+numero*i);
}

4//
/*Diseñe un ciclo for que reciba 10 números y los guarde en un arreglo,
 escriba otro ciclo for que retorne el número mayor del arreglo*/

  var arreglo=[] 
var nombre; 
var mayor
for(var i=0; i<10; i++){ 
    
    nombre=prompt("Ingrese el número "+i)
    arreglo.push(nombre); 
    
}
mayor=arreglo[0]
for(var i=0; i<10; i++){ 

    if (arreglo[i]>mayor){
    mayor=arreglo[i]
     
  
    }
}
