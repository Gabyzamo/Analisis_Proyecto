//1

var contadorWhile1 = 0;
 
while(contadorWhile1 < 7){
    console.log("El contador va en "+contadorWhile1);
    contadorWhile1 += 1;
}

//2
var contadorWhile2 = 0;
 
while(contadorWhile2 <= 30){
    console.log( "Los multiplos del 3 son " + contadorWhile2);
    contadorWhile2 += 3;
}

//3
var contadorWhile3 = 0;
 
while(contadorWhile3 <= 50){
    console.log("los pares son "+contadorWhile3);
    contadorWhile3 += 2;
}

//4
var contadorWhile3 = 1;
var usuario=prompt( "por favor ingrese el numero")
while(contadorWhile3 <=usuario){
    console.log("los numeros impares son "  +contadorWhile3);
    contadorWhile3 += 2;
}

//5
var contadorWhile5 =prompt("ingrese un numero impar");
 
while(contadorWhile5%2==0){
    contadorWhile5= prompt("el numero "+ contadorWhile5+ " no es impar, ingrese otro");
} 


//6
var acu=0
var contadorWhile6 = 1
var estudiantes=prompt("por favor ingrese el numero de estudiantes");
while( contadorWhile6<=estudiantes){
    var edad=parseInt(prompt("por favor ingrese su edad"));
    acu+=edad
    contadorWhile6 +=1;
}
console.log("el acumulado de las edades es "+ acu );


//7
var contadorWhile7= 0; 
var colores= "rojo"

while(colores != "amarillo"){
    colores= prompt("ingrese un color para ganar");
    console.log("dijo " +colores);
    contadorWhile7 += 1;
}

//8
var profesor=prompt("ingrese el nombre del estudiante");

var acu=0
var contadorWhile8 = 0;
var estudiantes=prompt("por favor ingrese la cantidad de notas del estudiante");
while( contadorWhile8<estudiantes){
    var notas=parseFloat(prompt("por favor ingrese la nota"));
    acu+=notas
    contadorWhile8 +=1;
};

var promedio=acu/contadorWhile8
if(promedio>=3.5){
console.log("el estudiante " +profesor+ " gano la asignatura con " +promedio);
}else{
    console.log("el estudiante " +profesor+ " perdio la asignatura con " +promedio);

}

var numEstudiantes=prompt("ingrese la cantidad de estudiantes")
var contar=0
while(contar<numEstudiantes){
    var profesor=prompt("ingrese el nombre del estudiante");

    var acu=0
    var contadorWhile8 = 0;
    var estudiantes=prompt("por favor ingrese la cantidad de notas del estudiante");
    while( contadorWhile8<estudiantes){
        var notas=parseFloat(prompt("por favor ingrese la nota"));
        acu+=notas
        contadorWhile8 +=1;
    };

    var promedio=acu/contadorWhile8
    if(promedio>=3.5){
    console.log("el estudiante " +profesor+ " gano la asignatura con " +promedio);
    }else{
        console.log("el estudiante " +profesor+ " perdio la asignatura con " +promedio);

    }
    contar+=1;

}




