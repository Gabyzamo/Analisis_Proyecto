//Evaluacion


5.//
/*Diseñe un algoritmo que reciba 5 artículos de tienda y los almacene en un arreglo,
una vez termine de ingresar los productos, cree otro ciclo for que recorra el
arreglo y solicite al usuario el precio de cada artículo con sus respectivo nombre
para que el usuario sepa a qué artículo le está asignando el precio; almacene los 
precios en otro arreglo.*/


var arreglo1=[] 
var productos; 
var arreglo2=[]
var precios
for(var i=0; i<=5; i++){ 
    productos=prompt("Ingrese el nombre del producto "+i)
    arreglo1.push(productos); 
}
for(var i=0; i<=5; i++){ 
    precios=prompt("Ingrese el precio del producto "+arreglo1 [i])
    arregloNombres.push(precios); 
}


