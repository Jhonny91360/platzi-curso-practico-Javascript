alert("HOla hpta");

//////////////////// codigo del cuadrado/////////////////////

console.group("Cuadrados")

//const  ladoCuadrado= 5;

//console.log("Los lados del cuadrado son de: " +ladoCuadrado+" cm" );

function perimetroCuadrado(lado){
return  4*lado;
}

//console.log("El perimetro del cuadrado es de: " +perimetroCuadrado+" cm" );

function areaCuadrado(lado){
return lado *  lado;
}

//console.log("El area del cuadrado es de : " +areaCuadrado+" cm^2" );

console.groupEnd();

///////////////codigo del triangulo ///////////////

console.group("Triangulo")

/*const  ladoTriangulo1= 6;
const  ladoTriangulo2= 6;
const  baseTriangulo= 4;
const  alturaTriangulo= 5.5;


console.log(
    "Los lados del traingulo son de: " 
    +ladoTriangulo1
    +" cm, "
    +ladoTriangulo2
    +" cm, "
    +baseTriangulo
    +" cm "
 );*/

 //console.log("La altura del triangulo es  de: " +alturaTriangulo+" cm" );

 function perimetroTriangulo(lado1,lado2,base){
  return lado1+lado2+base;
 } 

 //console.log("El perimetro del triangulo es  de: " +perimetroTriangulo+" cm" );

 function areatriangulo(base, altura){
return  (base*altura) / 2 ;
 }

 //console.log("El area del triangulo es  de: " +areatriangulo+" cm" );


 console.groupEnd();


///////////////codigo del circulo ///////////////

 console.group("Circulo");

/*const radioCirculo= 4;
const pi= Math.PI;*/

function diametroCirculo(radio){
return  2* radio;
}

function perimetroCirculo(diametro){
return Math.floor (diametro * Math.PI);
}

function areaCirculo(radio){
return Math.floor (  Math.PI * radio*radio);
}

/*console.log("El radio del circulo es de: " +radioCirculo+" cm" );

console.log("El diametro del circulo es de: " +diametro+" cm" );

console.log("El perimetro del circulo es de: " +perimetroCirculo+" cm" );

console.log("El area del circulo es de: " +areaCirculo+" cm" );*/


 console.groupEnd();
