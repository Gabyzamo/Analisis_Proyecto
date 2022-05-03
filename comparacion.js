x=5;
console.log(x>7);//FALSE
console.log(x<7);//TRUE
console.log(x==5);//TRUE
console.log(x==="5");//FALSE
console.log(x>=1);//TRUE
console.log(x!=10);//FALSE


console.log(2 < 12 );//TRUE
console.log(2 < "12");// TRUE
console.log(2 < "John");//FALSE
console.log(2 > "John");//FALSE
console.log(2 == "John");//FALSE
console.log("John" == "John");//TRUE
console.log("john" == "John");//FALSE
console.log("2" < "12");//FALSE
console.log("2" > "12");//TRUE
console.log("2" == "12");//FALSE


x=12;   
y=7;
x<15 && y!=7//false
y>8 && x<20//false
x==12 && x<18//true
//("lunes" == "Lunes") || (y!=9)//false
!(x==10) && y>=6//true
x>6 && y==12 && 2>3//false
(x*2)>22 && y<(2*4)//true
(x>10 || x<10) && !(y!=7 && y<21)//true
((x/2)<=(2*3) || (x*2)>23 ) && (15==="15" && y!=="7")//false

var tocaEduFisica= "si";
var uniforme = "diario";
 
if(tocaEduFisica == "si"){
    uniforme = "edu. física";
}
console.log("Mañana debe vestir el uniforme de " + uniforme);

var diaSiguiente= "lunes";
var uniforme = "diario";
 
if(diaSiguiente == "lunes" || diaSiguiente == "miercoles"){
    uniforme = "edu. física";
}
 
console.log("Mañana debe vestir el uniforme de " + uniforme);

var hayGaseosa = "no";
var bebida;
 
if(hayGaseosa == "no"){
    bebida = "gaseosa";
}else{
    bebida = "refresco de fruta"
}
 
console.log("la bebida que acompaña su pedido es " + bebida);


var diaSiguiente="viernes";
var cuaderno;
 
if(diaSiguiente == "lunes" || diaSiguiente == "martes"){
    cuaderno="Análisis";
}else if(diaSiguiente == "miercoles"){
    cuaderno="Tecnología";
}else if(diaSiguiente == "jueves"){
    cuaderno="Desarrollo"
}else{
    cuaderno="Ninguno";
}
 
console.log("Para la clase de mañana con el profesor Andres debe guardar el cuaderno de" +cuaderno);

