/* es una estructura que almacena cualquier tipo de dato y cualquier cantidad, es decir
string, int, double, array, objetos, entre otros. los  arreglos o arrays tienen
operaciones como insertar eliminar, modificar y consultar  
la declaracion de un arreglo se hace mediante unos corchetes[] // Alt+91 y los elemtos
dentro de el se separan con comas. Tambien se crea o se declara con las palabras reservadas
VAR o LET seguidas del nombre de la regla*/

var MiPrimerArreglo=["jose", 14];
console.log(MiPrimerArreglo);
var NotaEst=[["sofia", 4.5],["mari",4.2]];
console.log(NotaEst);

//recordar que las posiciones de un verctor o arreglo comienzan desde cero
//consultar segun posicion
console.log(NotaEst[0][0]);
//4.5
//Mari
console.log(NotaEst[0][0]);
console.log(NotaEst[0][1]);
console.log(NotaEst[1][0]);


NotaEst[1][0]="laura";
console.log(NotaEst[1][0]);


NotaEst[0][1]= 4.8;
console.log(NotaEst[0][1]);

//arreglar elemento al arreglo
MiPrimerArreglo.push ("10B");
console.log(MiPrimerArreglo);
 MiPrimerArreglo.unshift("Gomez");
 console.log(MiPrimerArreglo);

//Eliminar elemento del arreglo
MiPrimerArreglo.pop();
console.log(MiPrimerArreglo)
MiPrimerArreglo.shift()
console.log(MiPrimerArreglo)

//taller1
var Materia=["Analisis","Tecnologia","Desarrollo"];
console.log(Analisis);

Materia[0]="Introduccion";
console.log(Materia[0]);

NotaEst[1]="Analisis"
console.log(NotaEst[1]);

NotaEst[2]="Tecnologia"
console.log(NotaEst[2]);
