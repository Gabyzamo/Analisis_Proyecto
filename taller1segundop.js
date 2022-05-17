//taller 2 periodo//
//nombre: Gabriela  Alejandra Zamora Roa 10B//


//1
var contadorWhile1 = 0;
 
while(contadorWhile1 < 5){
    console.log (2);
    contadorWhile1 += 1;
}

//2
var contadorWhile2 = 0;
 
while(contadorWhile2 < 8){
    console.log("El contador va en "+contadorWhile2);
    contadorWhile2 += 1;
}
//3
var contadorWhile3 = 0;
 
while(contadorWhile3 < 20){
    console.log(contadorWhile3);
    contadorWhile3 += 2;
}

//4
var contadorWhile4 = "no"
 
while(contadorWhile4 != "ok"){
    contadorWhile4= prompt("ingrese ok para parar");
    console.log("dijo"+contadorWhile4);
}

//5
console.log("punto 5")
var contadorWhile5 = 0;
 
while(contadorWhile5>= 0){
    contadorWhile5=prompt("ingrese un negativo para parar")
    console.log (" El numero es " + contadorWhile5);
}

//6
console.log("punto 6");
var contadorWhile61;
var contadorWhile62;
var resultado6=0;
while(resultado6 <= 20){
  contadorWhile61=parseInt(prompt("valor1"));
  contadorWhile61=parseInt(prompt("valor2"));
  resultado6=contadorWhile61 + contadorWhile62
  console.log ("la suma es "+ resultado6)
}
  //7
  console.log("punto 7");
  var contraseña= "Gabriela2"
  var intento=prompt ("ingrese una contrasña")

  while(intento!=contraseña){
      console.log("la contraseña es incorrecta");
      intento=prompt("ingrese una contraseña nueva:")
  }
  console.log("contraseña incorrecta")

  //8
  console.log("punto 8");
  var contraseña= "Gabriela2"
  var intento=prompt ("ingrese una contrasña")
  var numintentos =1;

  while((intento!=contraseña)&& numintentos< 4){
      console.log("la contraseña es incorrecta");
      intento=prompt("ingrese una contraseña nueva:")
      numintentos += 1
  }
  console.log("contraseña incorrecta")
