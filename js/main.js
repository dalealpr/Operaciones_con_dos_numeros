//SIMULADOR INTERACTIVO
//Contiene: 
// - Variables
// - Funciones
// - Ciclos
// - Validaciones

//*******************************************************//

//FUNCION VALIDAR VACIO
function validar(variable1, variable2){
    //Validacion condicional 1
    if(isNaN(variable1)|| isNaN(variable2)){
        alert('ERROR! Ingrese un numero Valido')
    }else{
        alert("Los numeros ingresados son " + variable1 + " y " + variable2);
        operaciones();
    }
}

//FUNCION INGRESO DE VARIABLES
function solicitarNombre(){
    window.numero1 = parseInt(prompt("Ingrese el primer numero"))
    window.numero2 = parseInt(prompt("Ingrese el segundo numero"))

    validar(numero1, numero2);
}

//Ejecucuion de la funcion solicitarNombre()
solicitarNombre(); 


//FUNCION OPERACIONES
function operaciones(){

    //CICLO
    let opcion = parseInt(prompt("OPCIÓNES\n 1.- Sumar\n 2.- Restar\n 3.- Multiplicar\n 4.- Dividir\n 5.- Promedio\n\n Ingrese el numero de la opcion que desea realizar:"))

    //Validacion condicional 2
    if(opcion >=1 && opcion <=5){

        //Ciclo
        switch(opcion){
            
            case 1:
                alert("Opcion 1 SUMAR")
                function sumar(numero1, numero2) {
                    return numero1 + numero2;
                }
                alert(' '+ numero1 +' + '+ numero2 +' = '+ (sumar(numero1, numero2)))
                console.log('el resultado de la suma es: '+sumar(numero1, numero2))
            break;
        
            case 2:
                alert("Opcion 2 RESTAR")
                function restar(numero1, numero2) {
                    return numero1 - numero2;
                }
                alert(' '+ numero1 +' - '+ numero2 +' = '+ (restar(numero1, numero2)))
                console.log('el resultado de la resta es: '+restar(numero1, numero2))
            break;
        
            case 3:
                alert("Opcion 3 MULTIPLICAR")
                function multiplicar(numero1, numero2) {
                    return numero1 * numero2;
                }
                alert(' '+ numero1 +' * '+ numero2 +' = '+ (multiplicar(numero1, numero2)))
                console.log('el resultado de la multiplicacion es: '+multiplicar(numero1, numero2))
            break;
        
            case 4:
                alert("Opcion 4 DIVIDIR")
                function dividir(numero1, numero2) {
                    return numero1 / numero2;
                }
                alert(' '+ numero1 +' / '+ numero2 +' = '+ (dividir(numero1, numero2)))
                console.log('el resultado de la division es: '+dividir(numero1, numero2))
            break;
        
            case 5:
                alert("Opcion 5 PROMEDIO")
                function promedio(numero1, numero2) {
                    return (numero1  + numero2) / 2;
                }
                alert('promedio de '+ numero1 + ' y ' + numero2 + ' = '+(promedio(numero1, numero2)))
                console.log('el promedio es: '+promedio(numero1, numero2))
        break;
        }

    }
    else{
        alert("ERROR! Ingrese un numero de opcion valido");

    }
}


