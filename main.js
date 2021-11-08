//'use strict'

/*
Ejercicio usando this en contexto
Estrictos y descuidados

1. Ejecute el código y observe la consola.
2. Active el 'use strict' y ejecutelo de nuevo
3. ¿Qué ha cambiado?
4. ¿Qué se puede decir del cambio?
5. ¿Qué podría inferirse o generalizarse del comportamiento del this?
*/

console.log("Llamado global:");
console.log(this);

function funcionGlobal() {
    console.log("Llamado función global:");
    console.log(this);
}
funcionGlobal();

const expGlobal = function () {
    console.log("Llamado expresión global:");
    console.log(this);
}
expGlobal();

function GeneradorFunciones() {
    return function () {
        console.log("Llamado generadorFunciones:");
        console.log(this);
    }
}
const funcionGenerada = new GeneradorFunciones();
funcionGenerada();


function FabricaObjetos() {
    return {
        mostrar: function () {
            console.log("Llamado FabricaObjetos:");
            console.log(this);
        }
    }
}
const objetoFabricado = new FabricaObjetos();
objetoFabricado.mostrar();

class Prueba{
    constructor(){
        console.log("Desde constructor:");
        console.log(this);
    }
    mostrar(){
        console.log("Desde método de clase:");
        console.log(this);
    }
}
let obj = new Prueba();
obj.mostrar();

let litObj = {
    mostrar:function(){
    console.log("Desde objeto literal:");
    console.log(this);
    }
}
litObj.mostrar();