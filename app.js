
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero es menor');
        }else {
            asignarTextoElemento('p', 'El numero es mayor');

        }
        intentos++;
        limpiarCaja();  
    } 
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya se sortearon todos 

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros');
        
    } else{
            //si el numero está incluido en la lista, se hace
    
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}
 function reiniciarJuego(){
         //limpiar la caja
        limpiarCaja();
        condicionesIniciales();
        // deshabilitar otra vez el boton
        document.querySelector('#reiniciar').setAttribute('disabled', true);
 }

function condicionesIniciales(){
    console.log(numeroSecreto);
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Ingresa un numero del 1-${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();