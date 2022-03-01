console.log("Hola mundo"); //imprimir por consola 
//comentario en linea
/*comentario 
en 
varias 
lineas
o 
multilinea
*/
/*son espacios de memoria que almacenan datos o informacion 
existe varios tipos de variables en js, pero generalmente se utiliza los siguientes:
string: almacena cadenas de texto. se debe declarar o asignar el valor entre "comillas" 
int: almacena numeros enteros
double: almacena numeros reales
boolean:almacena valores de verdad(true, false)
*/
/*declarar variables
declarar una variable es crear, decirle al lenguaje como se llama la varible e indicarle que ya existe.
para declarar una variable se puede utilizar ya sea la palabra reservada var o let
*/ 
var nombre;
console.log(nombre)
/*inicializar: para inicializar variables es necesario asignar un valor cuando se crea variables
*/
var apellido ="zamora";
console.log(apellido);
/*asignar un valor:
se hace mediante el signo = se debe hacer una variable que ya fue declarado
*/
nombre= "Gabriela";
console.log(nombre+" "+ apellido);
//desde otra variable 
var edad =15;
var edadEstudiante= edad;
// desde el teclado
var gradoEstudiante= prompt ("ingrese un grado");
console.log (" el grado es: "+ gradoEstudiante);
/* constante: son valores que una vez inicializados no puede cambiar lo que almacena. se crea con la palabra reservada const, el nombre de las constantes se escribe todo en mayusculas  para diferenciarlos de las variables*/
const PI =3.1416;
PI=5;
// imprimir por consola
//simple
console.log("mensaje");
console.log(nombre);
//concatenado
console.log("la edad es" + edad +"años");


