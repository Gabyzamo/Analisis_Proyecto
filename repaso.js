//solicitar datos al usuario
metros=prompt("porfavor ingrese el valor en metros");

//realizar operacion
kilometros=metros/1000;

//mostrar mensaje con resultado
console.log(metros+ "m equivalen a"+ kilometros+"ka");

//punto 2
var distancia;
var litrosgastados;
distancia=prompt("porfavor ingrese la distancia del avion");
litrosgastados= (distancia/100)* 290
console.log(litrosgastados+"fue elcombustible que consumio el avion en"+distancia"km");