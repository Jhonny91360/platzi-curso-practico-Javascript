alert("HOla hpta");

// codigo del cuadrado
console.group("Cuadrados")

const  ladoCuadrado= 5;

console.log("Los lados del cuadrado son de: " +ladoCuadrado+" cm" );

const perimetroCuadrado= 4*ladoCuadrado;

console.log("El perimetro del cuadrado es de: " +perimetroCuadrado+" cm" );

const areaCuadrado= ladoCuadrado *  ladoCuadrado;

console.log("El area del cuadrado es de : " +areaCuadrado+" cm^2" );

console.groupEnd();

//codigo del triangulo

console.group("Triangulo")

const  ladoTriangulo1= 6;
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
 );

 console.log("La altura del triangulo es  de: " +alturaTriangulo+" cm" );

 const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;

 console.log("El perimetro del triangulo es  de: " +perimetroTriangulo+" cm" );

 const areatriangulo= (baseTriangulo*alturaTriangulo) / 2 ;

 console.log("El area del triangulo es  de: " +areatriangulo+" cm" );


 console.groupEnd();


 console.group("Circulo");

const radioCirculo= 4;
const pi= Math.PI;
const diametro= 2* radioCirculo;
const perimetroCirculo= Math.floor (diametro * pi);
const areaCirculo= Math.floor (  pi* radioCirculo*radioCirculo);

console.log("El radio del circulo es de: " +radioCirculo+" cm" );

console.log("El diametro del circulo es de: " +diametro+" cm" );

console.log("El perimetro del circulo es de: " +perimetroCirculo+" cm" );

console.log("El area del circulo es de: " +areaCirculo+" cm" );


 console.groupEnd();
