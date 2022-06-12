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

let conjuntoIngresos=[];

const sumarIngresos = ()=>{
    let totalIngresos = 0;
    conjuntoIngresos.push(Number(monto.value));
    for (let i = 0; i<conjuntoIngresos.length; i++){
        totalIngresos = totalIngresos + conjuntoIngresos[i]
    }
    //document.getElementById ("saldo").innerHTML = (` $ ${total}`);//
    return totalIngresos
}

const restarIngresos = ()=>{
    let totalEgresos = 0;
    conjuntoIngresos.push(Number(monto.value));
    for (let i=0; i<conjuntoIngresos.length;i++){
        totalEgresos= totalEgresos - conjuntoIngresos[i]
    }
    //document.getElementById ("saldo").innerHTML= (`$ ${total}`);//
    return totalEgresos
}

const hacerLasCuentas =()=>{
    const nuevoIngreso = sumarIngresos();
    const nuevoGasto = restarIngresos();
    saldo = totalIngresos - totalEgresos;
    return saldo
}

const tuSaldo=()=>{
    const saldo = hacerLasCuentas();
    document.getElementById ("saldo").innerHTML= (`$ ${saldo}`);
}

botonIngresar.addEventListener ("click", sumarIngresos);
botonEgresar.addEventListener ("click", restarIngresos);
