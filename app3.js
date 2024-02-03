let numeroUsuario = parseInt(prompt('Ingresa el número que quieres calcular:'))

tablaMultiplicar(numeroUsuario);

function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero*i}`);
    }
}

/*
let radioUsurio = parseFloat(prompt('Ingresa el radio:'));

areaPerimetroCirculo(radioUsurio);

function areaPerimetroCirculo(radio) {
    perimetro = Math.PI * 2 * radio;
    area      = Math.PI * Math.pow(radio,2);
    return alert(`El area es de ${area}m2 y el perimetro es de ${perimetro}m`);
}



let largoUsuario = parseFloat(prompt('Ingresa las medidas de largo:'));
let anchoUsuario = parseFloat(prompt('Ingresa las medidas de ancho:'));

areaPerimetroRectangulo(largoUsuario, anchoUsuario);

function areaPerimetroRectangulo(largo, ancho) {
    area      = largo * ancho;
    perimetro = (largo * 2) + (ancho * 2);

    return alert(`El area es de ${area}m2 y el perimetro es de ${perimetro}m`)
}


let dolarUsuario = parseInt(prompt('Ingresa cuantos dolares deseas convertir:'));

alert(`${dolarUsuario} ${(dolarUsuario === 1) ? 'dolar' : 'dolares'} son ${convertirDolaresReales(dolarUsuario)} ${(convertirDolaresReales(dolarUsuario) === 1) ? 'real' : 'reales'}`)

function convertirDolaresReales(dolar) {
    return dolar * 4.95;
}


let numeroUsuario = prompt('Ingresa un numero:');

alert(`El factorial de ${numeroUsuario} es: ${factorialNumero(numeroUsuario)}`);

function factorialNumero(num) {
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    } else 
        if (num == 0) {
            return 1;
        } else {
            return (num * factorialNumero(num - 1));
      }
  }



let pesoUsuario     = prompt('Ingresa tu peso en Kg:');
let estaturaUsuario = prompt('Ingresa tu estatura en metros:');

let inMaCo          = indiceMasaCorporal(pesoUsuario, estaturaUsuario);
alert(`Tu indice de masa corporal es de ${inMaCo}`);

function indiceMasaCorporal(peso, estatura){
    return peso/(estatura*estatura);
}

let rangoInMaCo     = rangoMasaCorporal(inMaCo);
function rangoMasaCorporal(imc){
    
    if(imc < 16){
        alert('Delgadez severa');
    } else
        if(imc >= 16.00 && imc <= 16.99){
            alert('Delgadez moderada');
        } else
            if(imc >= 17.00 && imc <= 18.49){
            alert('Delgadez aceptable');
            } else
                if(imc >= 18.50 && imc <= 24.99){
                alert('Peso normal');
                } else 
                    if(imc >= 25.00 && imc <= 29.99){
                        alert('Sobrepeso');
                    } else 
                        if(imc >= 30.00 && imc <= 34.99){
                            alert('Obesidad tipo 1');
                        } else 
                            if(imc >= 35.00 && imc <= 40.00){
                                alert('Obesidad tipo 2');
                            } else 
                                if(imc >= 40.01 && imc <= 49.99){
                                    alert('Obesidad tipo 3');
                                } else 
                                    if(imc >50){
                                    alert('Obesidad tipo 4');
                                } else {
                                    alert('Error');
                                }
}
*/