function saludo(){
    alert("Bienvenido Usuari@ ");
}
function Suma(){


    let A = 0;
    let B = 0;
    let Suma = 0;


    alert("Este boton realizara la suma de dos valores ingresados por usted ")
    A =parseInt(prompt("ingrese el primer valor a sumar:"));
    B =parseInt(prompt("ingrese el primer valor a sumar:"));
    
    Suma = A + B;   



    alert("El resultado de la suma es: " +  Suma  +  " , todo bien")
}
function OpBasicas(){
    let A = 0;
    let B = 0;
    let suma = 0;
    let C = 0;
    let D = 0;
    let resta = 0;
    let E = 0;
    let F = 0;
    let multi = 0;
    let G = 0;
    let H = 0;
    let division = 0;


    alert("Este boton realizara las operaciones (suma,resta,multi,division) con los datos ingresados por usted")
    A =parseInt(prompt("Ingrese el primer valor a sumar"));
    B =parseInt(prompt("Ingrese el segundo valor a sumar"));

    suma = A + B;
    alert("La respuesta de la suma es " + suma)

    C =parseInt(prompt("Ingrese el primer valor de la resta"));
    D =parseInt(prompt("Ingrese el segundo valor de la resta"));

    resta = C - D;
    
    alert("La respuesta de la resta es " + resta) 

    E =parseInt(prompt("Ingrese el primer valor de la multiplicacion"));
    F =parseInt(prompt("Ingrese el segundo valor de la multiplicacion"));

    multi = E * F;

    alert("La respuesta de la multipliacion es " + multi)

    G =parseInt(prompt("Ingrese el primer valor de la division"));
    H =parseInt(prompt("Ingrese el segundo valor de la division"));

    division = G / H;
    
    alert("La respuesta de la divicion es " + division)
}

function ValorCuadrado() {
    let numero = 0;
    alert("Este boton realizara el proceso de mostrar el cuadrado de un numero")

    numero =parseInt(prompt("Ingrese un numero "));
    const cuadrado = numero * numero;
    alert("El cuadrado de " + numero + " es el numero " + cuadrado);

}

function AreaTriangulo() {
    //DECLARAR VARIABLES
    let base = 0;
    let altura = 0;
    let area = 0;
    // SOLICITAR DATOS
    alert("En este boton se realizara el calculo del area de un triangulo");

    base =parseInt(prompt("Ingrese la base del triangulo"));
    altura =parseInt(prompt("Ingrese la altura del triangulo"));

    area = (base * altura)/2;

    //MOSTRAR RESULTADOS
    alert("El are del triangulo es: " + area);
    
}

function NumMayor(){
    let A = 0;
    let B = 0;

    alert("Este boton realizara  la operacion de demostrar que numero es mayor y que numero es menor");

    A =parseInt(prompt("Ingrese el primer valor"));
    B =parseInt(prompt("Ingrese el segundo valor"));

    if (A == B){
        alert("Los valores ingresados son iguales");
    }
    else if(A > B){
        alert(A + "Es mayor que " + B);
    }
    else{
        alert(B + "Es mayor que " + A);
    }
}

function UniMedidas() {
    let a = 0;
    let pies = 0;
    let kilometros = 0;
    let pulgadas = 0;
    
    alert ("Este boton realizara la operacion de conversion de unidades de kilometros, pies y pulgadas");

    a = parseInt(prompt("Ingrese un valor que desee"));

    kilometros = a/1000;
    pies = a * 3,281;
    pulgadas = a * 39,37;

    alert("El valor en (mts) ingresado es :" + a + "m\n" + "Se mostrara la diferencia entre las conversiones"+ "\n"
    + "kilometros:" + kilometros + "\n"
    + "pies:" + pies + "\n"
    + "pulgadas:" + pulgadas);

    
 }

function UniTemperaturas() {
   let GradoCentigrado = 0;
   let fahrenheit = 0;

   alert("Este boton realizara la conversion de las unidades de temperatura");

   GradoCentigrado = parseInt(prompt("Ingrese los grados celsius:"));

   fahrenheit = (GradoCentigrado * 9/5 ) + 32;

   alert("La conversion de °C:" + GradoCentigrado + " a grados fahrenheit es: " + fahrenheit);

}

function PromNotas() {

    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;
    let nota4 = 0;
    let nota5 = 0;

    alert("En este boton se mostrara el promedio de un estudiante que hara ver si paso o no")

    nota1 =parseInt(prompt("ingrese la primera nota"));
    nota2 =parseInt(prompt("ingrese la segunda nota"));
    nota3 =parseInt(prompt("ingrese la tercera nota"));
    nota4 =parseInt(prompt("ingrese la cuarta nota"));
    nota5 =parseInt(prompt("ingrese la quinta nota"));
    
    promedio = (nota1 + nota2 +nota3 + nota4 + nota5) /5;
    
    if(promedio >65){
        alert("Su nota promedio es:" + promedio + "Usted aprobo la asignatura");
    } 
    else if(promedio ==65){
        alert("Su nota promedio es:" + promedio + "Usted aprobo con la nota minima de la asignatura");
    }
    else{
        alert("Su nota promedio es:" + promedio + "Usted reprobo la asignatura");
    }
    
}

function CompraDescuento(){

    let pesoProducto = 0;
    let totalApagar = 0;
    let precio = 0;

    alert("Este boton realizara el proceso de realizacion del descuento de una compra")

    precio =parseInt(prompt("Ingrese el valor de su compra"));
    pesoProducto =parseInt(prompt("Ingrese el numero de Gramos"));

    if(pesoProducto >=10){
        totalApagar = precio - (precio * (20/100));
        alert("Se le aplica un descuento del 20% \n El total a pagar es:" + totalApagar);
    }
    else if (pesoProducto > 6 && pesoProducto <10){
        totalApagar =precio - (precio * (15/100));
        alert("Se le aplica un descuento del 15% \n El total a pagar es:" + totalApagar);
    }
    else if (pesofruta > 3 &&pesofruta <5){
        totalApagar = precio - (precio * (10/100));
        alert("Se le aplica un descuento del 10% \n El total a pagar es:" + totalApagar);
    }
    else {
        alert("Usted no recibe ningun descuento en la compra" /n ,"El total a pagar es:" + precio)
    }

}

function ParesImpares(){
    let numero = 0;

    alert("Este boton realizara el proceso de mostrar los numeros pares e impares")

    numero =parseInt(prompt("Ingrese un numero "));

    if(numero % 2 == -0){
    alert("El numero " +  numero  + " Es par");
    }
    else{
        alert("El numero " +  numero  + " Es impar");
    }
    numero =parseInt(prompt("Ingrese otro numero que desee "))
}


function SalarioMin(){
        let horaTrabajo = 0;
        let salarioRecibido = 0;
        let salariosemanal = 0;
        let horaExtra = 0;

        alert("Este boton realizara el calculo del salario minimo segun las horas extras de trabajo")

        horaTrabajo =parseInt(prompt("ingrese las horas de trabajo"));

        if(horaTrabajo == 0){
            alert("Usted no a trabajado esta semana")
        }
        else if(horaTrabajo <= 40 || horaTrabajo == 40){
            salarioRecibido = salariosemanal * horaTrabajo;
            alert("usted ha trabajado las 40 horas o menos de las 40 horas en total \n Usted recibira: $" + salarioRecibido);
        }
        else{
            horaExtra = parseInt(prompt("cuantas horas Extras a trabajado en la semana"));
            salarioRecibido = 650000 + (40000 * horaExtra);
            alert("usted trabaja" + horaExtra + "horas Extras esta semana  \n ustede recibira: $" + salarioRecibido);
        }
}

function NumMenor(){
        let numA = 0;
        let numB = 0;
        let numC = 0;

        alert("Este boton mostrara el numero mayor ingresados por usted")
    
        numA =parseInt(prompt("Ingrese el primer numero"));
        numB =parseInt(prompt("Ingrese el segundo numero"));
        numC =parseInt(prompt("Ingrese el tercer numero"));

        if(numA < numB && numA < numC){
            alert("El numero menor es " + numA);
        }
        else if(numB < numA && numB < numC){
            alert("El numero menor es " + numB);
        }
        else if(numA == numB && numB == numC){
            alert("los numeros son iguales  " + numA + "a:"+ numB + "y" + numC);
        }
        else{
            alert("El numero menor es " + numC)
        }
}


        /* Nuevos Algoritmos */

function OpBasicas2(){
        let num1 = 0;
        let num2 = 0;
        let suma = 0;
        let resta = 0;
        let multi = 0;
        let division = 0;
        
        
         alert("Este boton realizara las operaciones (suma,resta,multi,division) con los datos ingresados por usted")
        num1 =parseInt(prompt("Ingrese el primer valor a sumar"));
        num2 =parseInt(prompt("Ingrese el segundo valor a sumar"));
        
        suma = num1 + num2;
        alert("La respuesta de la suma es " + suma)
        
        resta = num1 - num2;
            
        alert("La respuesta de la resta es " + resta) 
        
        
         multi = num1 * num2;
    
         alert("La respuesta de la multipliacion es " + multi)
        
        
         division = num1 / num2;
            
        alert("La respuesta de la division es " + division)
}

        function NumMayor2(){
            let num1 = 0;
            let num2 = 0;
        
            alert("Este boton realizara  la operacion de demostrar que numero es mayor y que numero es menor");
        
            num1 =parseInt(prompt("Ingrese el primer valor"));
            num2 =parseInt(prompt("Ingrese el segundo valor"));
        
            if (num1 == num2){
                alert("Los valores ingresados son iguales");
            }
            else if(num1 > num2){
                alert( num1 + "Es mayor que " + num2);
            }
            else{
                alert(num2 + "Es mayor que " + num1);
            }
        }
        
        function NumMenor2(){
            let NUMA = 0;
            let NUMB = 0;
            let NUMC = 0;
    
            alert("Este boton mostrara el numero mayor ingresados por usted")
        
            NUMA =parseInt(prompt("Ingrese el primer numero"));
            NUMB =parseInt(prompt("Ingrese el segundo numero"));
            NUMC =parseInt(prompt("Ingrese el tercer numero"));
    
            if(NUMA < NUMB && NUMA < NUMC){
                alert("El numero menor es " + NUMA);
            }
            else if(NUMB < NUMA && NUMB < NUMC){
                alert("El numero menor es " + NUMB);
            }
            else if(NUMA == NUMB && NUMB == NUMC){
                alert("los numeros son iguales  " + NUMA + "a:"+ NUMB + "y" + NUMC);
            }
            else{
                alert("El numero menor es " + NUMC)
            }
            }

            function ParesImpares2() {
            let numero = 0;
            alert("Este boton realizara el proceso de mostrar los numeros pares e impares")

            numero =parseInt(prompt("Ingrese un numero "));
            numero =parseInt(prompt("Ingrese un segundo numero"));
           
                if (numero % 2 === 0) {
                  alert(numero + " Es un numero par")
                } else {
                  alert(numero + " Es un numero impar");
                }
              }
              

              function ValorCuadrado2() {
                let numero = 0;
                alert("Este boton realizara el proceso de mostrar el cuadrado de un numero")

                numero =parseInt(prompt("Ingrese un numero "));
                const cuadrado = numero * numero;
                alert("El cuadrado de " + numero + " es el numero " + cuadrado);
              }


              function AreaTriangulo2() {
                let base = 0;
                let altura = 0;
                let area = 0;
                alert("En este boton se realizara el calculo del area de un triangulo");
            
                base =parseInt(prompt("Ingrese la base del triangulo"));
                altura =parseInt(prompt("Ingrese la altura del triangulo"));
            
                area = (base * altura)/2;
            
                alert("El are del triangulo es: " + area);
                
            }

            function conversorMtCM() {

                alert("Este boton realizara el proceso de mostrar la conversion de cm a mts")

                
                var metros = 0.88,
                centimetros =0;
                metros =parseInt(prompt("Ingrese un numero "));
                centimetros = metros * 100;
                    alert(centimetros + 'm');
              }
              
              function AñoNacimiento(){
                
                alert("Este boton realizara el proceso de mostrar el año de nacimiento")

                edad = parseInt(prompt("Ingrese su edad"));

                let edad = 0;
                let añoActual = 2023;
                let añoNacimiento = 0;
                 edad = añoActual - añoNacimiento;
                alert("Si tienes " + edad + " años, probablemente naciste en el año" + añoNacimiento );
              }


function InversionCapt(capital,años){
    const tasainteres = 0.02;
    const tasadeinteresmensual = tasainteres / 12;
    const meses = años * 12;
    
    for (let i = 0; i < meses; i++) {
        capital += capital * tasadeinteresmensual;
    }

    return capital;
}

const capital = parseFloat(prompt("Ingrese el monto que desea invertir: "));
const años = parseInt(prompt("Ingrese la cantidad de años que desea mantener su inversión: "));

const earnings = investmentEarnings(capital, años);
console.log(`Después de ${años} años, el capital invertido en el banco generará un total de $${earnings.toFixed(2)}.`);
alert("Su ganancia es de " + capital);





function PromNotas2() {

    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;
    let nota4 = 0;
    let nota5 = 0;

    alert("En este boton se mostrara el promedio de un estudiante que hara ver si paso o no")

    nota1 =parseInt(prompt("ingrese la primera nota"));
    nota2 =parseInt(prompt("ingrese la segunda nota"));
    nota3 =parseInt(prompt("ingrese la tercera nota"));
    nota4 =parseInt(prompt("ingrese la cuarta nota"));
    nota5 =parseInt(prompt("ingrese la quinta nota"));
    
    promedio = (nota1 + nota2 +nota3 + nota4 + nota5) /5;
    
    if(promedio > 65){
        alert("Su nota promedio es: " +  promedio  + " Usted aprobo la asignatura");
    } 
    else if(promedio == 65){
        alert("Su nota promedio es: " +  promedio  + " Usted aprobo con la nota minima de la asignatura");
    }
    else{
        alert("Su nota promedio es: " +  promedio  + " Usted reprobo la asignatura");
    }
    
}

function CompraDescuento2(){

    let pesoProducto = 0;
    let totalApagar = 0;
    let precio = 0;

    alert("Este boton realizara el proceso de realizacion del descuento de una compra")

    precio =parseInt(prompt("Ingrese el valor de su compra"));
    pesoProducto =parseInt(prompt("Ingrese el numero de Gramos"));

    if(pesoProducto >=10){
        totalApagar = precio - (precio * (20/100));
        alert("Se le aplica un descuento del 20% \n El total a pagar es:" + totalApagar);
    }
    else if (pesoProducto > 6 && pesoProducto <10){
        totalApagar =precio - (precio * (15/100));
        alert("Se le aplica un descuento del 15% \n El total a pagar es:" + totalApagar);
    }
    else if (pesofruta > 3 &&pesofruta <5){
        totalApagar = precio - (precio * (10/100));
        alert("Se le aplica un descuento del 10% \n El total a pagar es:" + totalApagar);
    }
    else {
        alert("Usted no recibe ningun descuento en la compra" /n ,"El total a pagar es:" + precio)
    }

}

function sumaEntradas() {
    let limit = 0;
    let suma = 0;
    var limiteEntradas = 0;
  
    alert("Este boton realizara el proceso de realizacion del limite de entradas")

    for (let i = 0; i < limit; i++) {
      const valorAleatorio = Math.floor(Math.random() * 100) + 1;
      suma += valorAleatorio;
    }
    const limiteEntradas = parseInt(prompt("Ingresa el límite de entradas para sumar:"));
  
    if (!isNaN(limiteEntradas) && limiteEntradas > 0) {
    const resultado = sumaAleatoria(limiteEntradas);
    console.log(`La suma de ${limiteEntradas} valores aleatorios es: ${resultado}`);
  } else {
    console.log("Por favor, ingresa un número válido mayor que cero.");
  }
    return suma;
    
  

}