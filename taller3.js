//taller3
/*Una manguera arroja 145 litros de agua en una hora. 
Dada la cantidad de litros de agua que caben en una piscina,
retorne el tiempo en horas que tarda en llenarse con el agua
de la manguera.*/

var litdeagua
litdeagua = parseFloat( prompt("Favor Ingresar cuantos litros de agua le caben a la piscina"));
console.log("El tiempo que demoro la picsina fue de" + litdeagua / 145 );

/* Dada una longitud en metros, conviértala en milímetros*/
var metro
var milimetro
metro = prompt("ingrese los metros");
milimetro= (metro/1000)/1
console.log("es" +milimetro+ "mm" );

/*Convierta el resultado del punto anterior en decímetros*/
var milimetro
var decimetro
milimetro= prompt("ingrese los milimetros");
decimetro= milimetro * (1/100);
console.log("es" +decimetro+ "dm" );

/* Convierta el resultado en decímetros del punto anterior a kilómetro.*/
var decimetro
var kilometro
decimetro= prompt("ingrese el decimetro");
kilometro= decimetro * (1.0/10.000);
console.log("es" +kilometro+ "km" );
 
/*El minuto de una llamada telefónica cuesta 120 pesos. 
Dada una duración de llamada en horas, calcule qué costo tiene la llamada*/
/*
1  120*60

2  120*60*2

3  120*60*3
*/
var horas
var costo
horas= prompt("ingrese las horas que estuvo en llamada");
costo= 120* 60* horas;
console.log("su costo por la llamada seria de" +costo+", gracias" );






