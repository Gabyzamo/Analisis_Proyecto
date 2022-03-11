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
//PI=5;
// imprimir por consola
//simple
console.log("mensaje");
console.log(nombre);
//concatenado
console.log("la edad es" + edad +"años");

suma= 5+3
console.log(suma);
let a = 10
suma =8+a
suma = a + 8
console.log(suma)
let b = 20;
suma= a+b
console.log (suma)
//resta
let resultado;
resultado= a - b;
console.log (resultado)
resultado=b - a;
console.log (resultado)
//Multiplicacion
var producto 
producto = a *b
console .log (producto);
//Division
var division;
division = b/a
console.log (division);
//residuo
var residuo;
residuo = 12 % 2;//0
//INCREMENTO
var incre=1;
console.log(incre);//1
incre= incre+1;
console.log(incre);//2
incre+=1;
console.log(incre);//3
incre++;
console.log(incre);//4
//Decremento
var decre=1;
console.log(decre);//1
decre= decre - 1
console.log(decre);//2
decre=decre-1
console.log(decre);//3
decre--;
console.log(decre);//4
/*operaciones aumentadas
son operciones que se le 
realizan a una variable y 
el resultado se guarda en
si misma.
La variable debe tener 
un valor antes de realizar la 
operacion 
*/
var sumaAumento=0
sumaAumento+=1;
sumaAumento+=48;
console.log(sumaAumento)

var restaAumento=0
restaAumento-=1;
restaAumento-=48;
console.log(restaAumento)


var productoAumento=0
productoAumento*=1;
productoAumento*=48;
console.log(productoAumento)

var cocienteAumento=0
cocienteAumento/=1;
cocienteAumento/=48;
console.log(cocienteAumento)

//potencia 
var exp 
exp= 3**2;///3^2
console.log(exp);//9
exp=3**3;//3^
console.log(exp);//27
//cadenas o texto 
//suma de cadenas
var Nombre="Alejandra"
var Apellido="Zamora"
var nomcompleto= Nombre+" "+ Apellido;
console.log (nomcompleto)

/*para encontrar el caracter en la ultima posicion 
de una cadena o vector de debe buscar la longitud -1*/







