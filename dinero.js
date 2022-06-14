/*Desarrollar un programa que le permita al usuario conocer cuanto dinero le queda (saldo) luego de cobrar por los trabajos realizados y gastar dinero por las compras efectuadas. Para lograr esto el programa debe presentar un menú como el siguiente:
1.	Un botonIngresos por trabajos realizados (boton:azul)
2.Div con tres input (tipo de ingreso, descripción,monto)
3.	Egresos por compras realizadas (boton: rojo)
4.div con tres input (tipo de ingreso, descripción, monto)
5.	listo (agregar sonido de herstone (troll))
Cada ingreso percibido por el usuario, se acumulará y su saldo crecerá. 
Cada egreso que el usuario genere, se restará del saldo, el cual decrecerá. 
Luego de realizada cada operación deberá mostrarse en pantalla el valor actual del saldo disponible.
Cuando el usuario elija la opción salir del programa se deberá visualizar:
1.	La cantidad de operciones realizadas en concepto de ingresos.
2.	La cantidad de operaciones realizadas en concepto de egresos.
3.	La cantidad de pesos percibidos considerando todos los ingresos.
4.	La cantidad de pesos erogados (gastados) considerando todos los egresos.
5.	El ingreso que más dinero representó y que lugar ocupó (1ero, 2do, 3ero etc)
6.	El egreso que más dinero representó y que lugar ocupó (1ero, 2do, 3ero etc)
7.	El promedio de pesos por ingresos.
8.	El promedio de pesos por egresos. 
9.	El saldo (dinero que le quedó al usuario). Si el saldo del usuario es mayor o igual a cero se deberá mostrar en verde. Si es menor que cero en rojo.*/

const botonIngresar = document.getElementById ("ingresar");
const botonEgresar = document.getElementById ("egresar");
const monto = document.getElementById ("numero");
const descripcion = document.getElementById ("descripcion");
const botonSalir = document.getElementById("salir");
const mostrarDatosDelUsuario = document.getElementById("listaIngresosyEgresos");
const totales = document.getElementById("listaTotales")
const audioListo = document.getElementById ("listo");  

let conjuntoIngresos=[];
let conjuntoGastos =[];

let presionarSalir = false;

const cargarIngresos =()=>{
conjuntoIngresos.push({
    tipoTransaccion: "Ingreso",
    descripcion: descripcion.value,
    monto: (Number(monto.value)),
})
mostrarSaldoTotal ();
} 

const cargarGastos=()=>{
    conjuntoGastos.push ({
    tipoTransaccion: "Egreso",
    descripcion: descripcion.value,
    monto: (Number(monto.value)),
})
mostrarSaldoTotal();
}

const mostrarSaldoTotal = ()=>{
    let totalIngresos = conjuntoIngresos.reduce((acc, ingresos) => acc + ingresos.monto, 0);
    let totalEgresos = conjuntoGastos.reduce((acc, gastos)=> acc + gastos.monto, 0);
    document.getElementById ("saldo").innerHTML= (`$ ${totalIngresos - totalEgresos}`);
    console.log(conjuntoIngresos, conjuntoGastos);
}

const mostrarDatosDeLasOperaciones=()=>{
    if(presionarSalir == false){
        audioListo.play();
        mostrarDatosDelUsuario.style.display ="flex";
        totales.style.display="flex";
        presionarSalir = true;
        cantidadDeingresosyEgresos();
}
    else{
    mostrarDatosDelUsuario.style.display ="none";
    totales.style.display="none"
    presionarSalir = false
}
}

const cantidadDeingresosyEgresos= ()=>{
    listaDeingresos = "";
    descripcionesDeIngresos ="";
    conjuntoIngresos.map ((ingresos)=>{
        listaDeingresos = listaDeingresos + `${ingresos.monto}<br>`
        descripcionesDeIngresos = descripcionesDeIngresos + `${ingresos.descripcion}<br>`
    })
    document.getElementById ("listaIngresos").innerHTML = `${descripcionesDeIngresos}...${listaDeingresos}`
}



botonIngresar.addEventListener ("click", cargarIngresos);
botonEgresar.addEventListener ("click", cargarGastos);
botonSalir.addEventListener ("click",mostrarDatosDeLasOperaciones);