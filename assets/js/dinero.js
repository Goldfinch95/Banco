/*Desarrollar un programa que le permita al usuario conocer cuanto dinero le queda (saldo) luego de cobrar por los trabajos realizados y gastar dinero por las compras efectuadas. Para lograr esto el programa debe presentar un menú como el siguiente:
1.	Un botónIngresos por trabajos realizados (botón:azul)
2.Div con tres input (tipo de ingreso, descripción,monto)
3.	Egresó por compras realizadas (botón: rojo)
4.div con dos input (descripción, monto)
5.	listo (agregar sonido de herstone (troll))
Cada ingreso percibido por el usuario, se acumulará y su saldo crecerá. 
Cada egreso que el usuario genere, se restará del saldo, el cual decrecerá. 
Luego de realizada cada operación deberá mostrarse en pantalla el valor actual del saldo disponible.
Cuando el usuario elija la opción salir del programa se deberá visualizar:
1.	La cantidad de operaciones realizadas en concepto de ingresos.
2.	La cantidad de operaciones realizadas en concepto de egresó.
3.	La cantidad de pesos percibidos considerando todos los ingresos.
4.	La cantidad de pesos erogados (gastados) considerando todos los egresó.
5.	El ingreso que más dinero representó y que lugar ocupó (1ero, 2do, 3ero etc)
6.	El egreso que más dinero representó y que lugar ocupó (1ero, 2do, 3ero etc)
7.	El promedio de pesos por ingresos.
8.	El promedio de pesos por egresó.
9.	El saldo (dinero que le quedó al usuario). Si el saldo del usuario es mayor o igual a cero se deberá mostrar en verde. Si es menor que cero en rojo.*/
const inputDescription = document.getElementById ("input__description");
const inputAmount = document.getElementById ("input__amount");
const btnDeposit = document.getElementById ("button__deposit");
const btnSpend = document.getElementById ("button__spend");
const TotalBalance = document.getElementById("total__balance");
const btnNextGlass = document.getElementById("button__next-glass");
const audioReady = document.getElementById ("sound__ready");
const firstGlass = document.getElementById("first__container");
const secondGlass = document.getElementById ("second__container");
const ulAmountIncome = document.getElementById("ul__amount-of-money-income");
const ulAmountOfOuts = document.getElementById("ul__amount-of-money-outs");
const ulTotalMoneyIncome = document.getElementById("ul__total-money-income");
const ulTotalMoneyOut = document.getElementById("ul__total-outflows-of-money");
const ulPlacesOfIncome = document.getElementById("ul__places-of-income");
const ulPlacesOfMoneyOutflows = document.getElementById("ul__places-of-money-outflows");
const ulAverageMoneyIncome = document.getElementById("ul__average-money-income");
const ulAverageMoneyDischarged = document.getElementById("ul__average-of-the-discharges");
const ulEndingBalance = document.getElementById("ul__ending-balance");


let pressNext = false;

let incomeMoney = [];
let moneyOut = [];


const loadRevenueToIncomeMoneyArray = ()=>{
    incomeMoney.push({
        typeOfTransition: "Ingreso",
        description: inputDescription.value,
        amount: (Number(inputAmount.value))
    })
}

const loadExpensesToMonetaryArrayOfExpenses = ()=>{
    moneyOut.push({
        typeOfTransition: "Egreso",
        description: inputDescription.value,
        amount: (Number(inputAmount.value))
    })
}

const addMoneyIncome = ()=>{
    let totalIncome = incomeMoney.reduce((acc, income) => acc + income.amount, 0);
    return totalIncome
}

const addMoneyOut = ()=>{
    let totalSpends = moneyOut.reduce((acc, spend) => acc + spend.amount, 0);
    return totalSpends
}

const showTotalBalance = (total) =>{
    if(total > 1){
        TotalBalance.style.color = "green";
        TotalBalance.innerHTML= (`$ ${total}`);
        ulEndingBalance.style.color = "green";
        ulEndingBalance.innerHTML= (`${total}`);
    }
    else{
        TotalBalance.style.color = "red";
        TotalBalance.innerHTML = (`$ ${total}`);
        ulEndingBalance.style.color = "red";
        ulEndingBalance.innerHTML= (`${total}`);
    }
}

const amountOfIncome = ()=>{
    incomeList = "";
    incomeMoney.map ((income)=>{
        incomeList = incomeList +  `$${income.amount} - ${income.description}<br>`
    })
    return incomeList
}

const sortIncome = ()=>{
    incomeList = "";
    incomeMoney.sort((incomeA,incomeB)=> (incomeB.amount - incomeA.amount));
    incomeMoney.map ((income)=>{
        incomeList = incomeList +  `$${income.amount} - ${income.description}<br>`
    });
    return incomeList
}

const sortOutFlows = ()=>{
    outFlowList= "";
    moneyOut.sort((dischargeA,dischargeB)=> (dischargeB.amount - dischargeA.amount));
    moneyOut.map ((discharge)=>{
        outFlowList = outFlowList + `$${discharge.amount} - ${discharge.description}<br>` 
    });
    return outFlowList
}

const getAverageIncome = (totalIncomeMoney)=>{
    let averageIncome = Number(((totalIncomeMoney / incomeMoney.length)||0).toFixed(2));
    return averageIncome
}

const getAverageDischarged = (totalMoneyOut)=>{
    let averageDischarged = Number(((totalMoneyOut / moneyOut.length)||0).toFixed(2));
    return averageDischarged
}

const showSecondGlassAndHideFirstGlass = ()=>{
    if(pressNext == false){
        firstGlass.style.display="none"
        secondGlass.style.display ="flex"
        pressNext = true;
    }
    else{
        firstGlass.style.display="flex";
        secondGlass.style.display ="none";
        pressNext = false;
    }
}

const displayDataInSecondGlass = (totalIncomeMoney, totalMoneyOut, incomePosition, outFlowsPosition, averageIncome, averageDischarged)=>{
    ulAmountIncome.textContent = `Cantidad de ingresos : ${incomeMoney.length}`
    ulAmountOfOuts.textContent = `Cantidad de egreso : ${moneyOut.length}`
    ulTotalMoneyIncome.innerHTML = `Valor total de ingresos: $${totalIncomeMoney}`;
    ulTotalMoneyOut.innerHTML = `Valor total de egreso: $${totalMoneyOut}`;
    ulPlacesOfIncome.innerHTML = `Posición de los ingresos: <br>${incomePosition}`;
    ulPlacesOfMoneyOutflows.innerHTML = `Posición de los egreso: <br>${outFlowsPosition}`
    ulAverageMoneyIncome.innerHTML= (`Promedio de ingresos: $${averageIncome}`);
    ulAverageMoneyDischarged.innerHTML=(`Promedio de egreso: $${averageDischarged}`);
};

btnDeposit.addEventListener("click", ()=>{
    loadRevenueToIncomeMoneyArray();
    const totalIncomeMoney = addMoneyIncome();
    const totalMoneyOut = addMoneyOut();
    showTotalBalance(totalIncomeMoney - totalMoneyOut)
})

btnSpend.addEventListener("click", ()=>{
    loadExpensesToMonetaryArrayOfExpenses();
    const totalMoneyOut = addMoneyOut();
    const totalIncomeMoney = addMoneyIncome();
    showTotalBalance(totalIncomeMoney - totalMoneyOut)
})

btnNextGlass.addEventListener("click",()=>{
    audioReady.play();
    amountOfIncome();
    const totalIncomeMoney = addMoneyIncome();
    const totalMoneyOut = addMoneyOut();
    const incomePosition = sortIncome();
    const outFlowsPosition = sortOutFlows();
    const averageIncome = getAverageIncome(totalIncomeMoney);
    const averageDischarged = getAverageDischarged(totalMoneyOut);
    showSecondGlassAndHideFirstGlass();
    displayDataInSecondGlass(totalIncomeMoney, totalMoneyOut, incomePosition, outFlowsPosition, averageIncome, averageDischarged);
    showTotalBalance(totalIncomeMoney - totalMoneyOut)
})
