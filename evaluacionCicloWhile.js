console.log("punto 1");

var contadorWhile1= 0;
var numerito=prompt("Ingrese un numero");
while(contadorWhile1<= numerito) {
  if(contadorWhile1%5==0)
  console.log(contadorWhile1+ " es multiplo de 5 ")
  else console.log(contadorWhile1+" no es multiplo de 5 ")
  contadorWhile1 += 1;
}


console.log("punto 2");

var contadorWhile2=0;
var cajero=prompt("¿cuántos artículos va a registrar?");
var pfinal=0; 
while(contadorWhile2<cajero){
    var preciosArt=parseFloat(prompt("Ingrese el precio de sus articulos uno a uno"));
    pfinal=preciosArt+pfinal
    contadorWhile2+=1
}
console.log("el total a pagar de sus productos es de $ " +pfinal);



console.log("punto 3");
 
var cantidad="n";
var pfinal=0;
while (cantidad!="si"){
    var preciosArt=parseFloat(prompt("por favor ingrese el precio de sus articulos uno a uno"));
    pfinal=preciosArt+pfinal
    cantidad=prompt("si desea parar con la compra diga 'si' ");
}
console.log("el total a pagar de sus productos es de $ " +pfinal);


console.log("punto 4");

var cantidad="n";
var pfinal=0;
var contadorWhile4= 0;
while (cantidad!="si"){
    var preciosArt=parseFloat(prompt("por favor ingrese el precio de sus articulos uno a uno"));
    pfinal=preciosArt+pfinal
    cantidad=prompt("si desea parar con la compra diga 'si' ");
    contadorWhile4 += 1;

    console.log("el precio del articulo "+contadorWhile4+" es "+ preciosArt);
}

if(contadorWhile4 >= 8){
  pfinal*=0.90;
}  
else if(contadorWhile4>=15){
  pfinal*=0.85;
  
}
else if(contadorWhile4>=25){
  pfinal*=0.80;
  
}
console.log("el total a pagar por sus productos es de $ " +pfinal);

console.log("punto 5");
