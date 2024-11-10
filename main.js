const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn0 = document.getElementById("0");
const btnF = document.getElementById(".");
const btnC = document.getElementById("clear");
const btnSQRT = document.getElementById("sqrt");
const btnPOW = document.getElementById("pow");
const abtnD = document.getElementById("division");
const abtnM = document.getElementById("multiply");
const abtnDec = document.getElementById("decrease");
const abtnInc = document.getElementById("increase");
const btnRes = document.getElementById("count");

let numResult = document.getElementById("main");
let displayAction = document.getElementById("aDisplay");
let doNum = document.getElementById("toDoNum");

let wasFunc;
let whatFunc;

let FCount;
let maxlength = 11;

//Кнопка единицы
btn1.onclick = () => {
    if(wasFunc) {
        numResult.textContent = "1";
    }
    else if(numResult.textContent.length === maxlength) {
        return;
    }
    else {
        numResult.textContent += "1";
    }

    wasFunc = false;
}

//Кнопка двух
btn2.onclick = () => {
    if(wasFunc) {
        numResult.textContent = "2";
    }
    else if(numResult.textContent.length === maxlength) {
        return;
    }
    else {
        numResult.textContent += "2";
    }


    wasFunc = false;
}

//Кнопка 3ех
btn3.onclick = () => {
    if(wasFunc) {
        numResult.textContent = "3";
    }
    else if(numResult.textContent.length === maxlength) {
        return;
    }
    else {
        numResult.textContent += "3";
    }

    wasFunc = false;
}

//Кнопка 4ех
btn4.onclick = () => {
    if(wasFunc) {
        numResult.textContent = "4";
    }
    else if(numResult.textContent.length === maxlength) {
        return;
    }
    else {
        numResult.textContent += "4";
    }

    wasFunc = false;
}

//Кнопка 5ти
btn5.onclick = () => {
    if(wasFunc) {
        numResult.textContent = "5";
    }
    else if(numResult.textContent.length === maxlength) {
        return;
    }
    else {
        numResult.textContent += "5";
    }

    wasFunc = false;
}

//Кнопка 6ти
btn6.onclick = () => {
    if(wasFunc) {
        numResult.textContent = "6";
    }
    else if(numResult.textContent.length === maxlength) {
        return;
    }
    else {
        numResult.textContent += "6";
    }

    wasFunc = false
}

//Кнопка 7ми
btn7.onclick = () => {
    if(wasFunc) {
        numResult.textContent = "7";
    }
    else if(numResult.textContent.length === maxlength) {
        return;
    }
    else {
        numResult.textContent += "7";
    }

    wasFunc = false;
}

//Кнопка 8ми
btn8.onclick = () => {

    if(wasFunc) {
        numResult.textContent = "8";
    }
    else if(numResult.textContent.length === maxlength) {
        return;
    }
    else {
        numResult.textContent += "8";
    }

    wasFunc = false;
}

//Кнопка 9ти
btn9.onclick = () => {
    if(wasFunc) {
        numResult.textContent = "9";
    }
    else if(numResult.textContent.length === maxlength) {
        return;
    }
    else {
        numResult.textContent += "9";
    }

    wasFunc = false;
}

//Кнопка нуля
btn0.onclick = () => {

    if(wasFunc) {
        numResult.textContent = "0";
    }
    else {
        if(numResult.textContent.length >= 1 && numResult.textContent[0] !== "0" && numResult.textContent.length !== maxlength) {
            numResult.textContent += "0";
        }
        else if(numResult.textContent.length === maxlength) {
            return;
        }
        else {
            numResult.textContent = "0";
        }
    }

    wasFunc = false;
}

//Кнопка запятой
let countCommas;
btnF.onclick = () => {
    if(wasFunc) {
        numResult.textContent = "";
    }
    else {
        countCommas = numResult.textContent.split(".").length - 1;

        if(countCommas > 0 || numResult.textContent.length === 0) {
            return;
        }
        else {
            numResult.textContent += ".";
        }
    }

    wasFunc = false;
}

//Кнопка clear
btnC.onclick = () => {
    numResult.textContent = "";
    displayAction.textContent = "action";
    doNum.textContent = "";

    wasFunc = false;
}

//Кнопка корня
let ForSQRT;
btnSQRT.onclick = () => {
    ForSQRT = Number(numResult.textContent);
    FCount = ForSQRT**0.5;
    if(String(FCount).length > maxlength) {
        numResult.textContent = "LONG NUM";
    }
    else if(Number(numResult.textContent) < 0) {
        numResult.textContent = "ERROR";
    }
    else {
        numResult.textContent = FCount;
    }

    wasFunc = true;
}

//Кнопка возведения в квадрат
let ForPOW;
btnPOW.onclick = function() {
    ForPOW = Number(numResult.textContent);
    FCount = ForPOW**2;
    if(String(FCount).length > maxlength) {
        numResult.textContent = "LONG NUM";
    }
    else {
        numResult.textContent = FCount;
    }
};


//Конпка деления
let delimoe;
abtnD.onclick = function() {
    if(numResult.textContent === "" || numResult.textContent === "-" || numResult.textContent === "0.") {
        return;
    }
    else {
        displayAction.textContent = "/";
        doNum.textContent = numResult.textContent;
        delimoe = Number(numResult.textContent);
        numResult.textContent = "";
        whatFunc = "/";
    }

    wasFunc = false;
}

//Кнопка умножения
let umnozaemoe;
abtnM.onclick = function() {
    if(numResult.textContent === "" || numResult.textContent === "-" || numResult.textContent === "0.") {

    }
    else {
        displayAction.textContent = "x";
        doNum.textContent = numResult.textContent;
        umnozaemoe = Number(numResult.textContent);
        numResult.textContent = "";
        whatFunc = "x";
    }
}

//Кнопка минус
let umensaemoe;
abtnDec.onclick = () => {
    if(numResult.textContent === "" || numResult.textContent === "0.") {
        numResult.textContent = "-";
    }
    else {
        displayAction.textContent = "-";
        doNum.textContent = numResult.textContent;
        umensaemoe = Number(numResult.textContent);
        numResult.textContent = "";
        whatFunc = "-";
    }
}

//Кнопка плюс
let uvelitivaemoe;
abtnInc.onclick = () => {
    if(numResult.textContent === "" || numResult.textContent === "-" || numResult.textContent === "0.") {

    }
    else {
        displayAction.textContent = "+";
        doNum.textContent = numResult.textContent;
        uvelitivaemoe = Number(numResult.textContent);
        numResult.textContent = "";
        whatFunc = "+";
    }
}

//Кнопка равно
let mnozitel;
let delitel;
let vichitaemoe;
let pribavlyaemoe;
btnRes.onclick = function() {
    FCount = 0;

    function clear() {
        displayAction.textContent = "action";
        doNum.textContent = "";
    }

    if(whatFunc === "/") {
        if(delimoe === 0) {
            numResult.textContent = "Division By Zero";
        }
        else {
            clear();
            delitel = Number(numResult.textContent);
            FCount = delimoe / delitel;
            if(String(FCount).length > maxlength && FCount > 1) {
                numResult.textContent = "LONG NUM";
            }
            else if(FCount < 1) {
                numResult.textContent = FCount.toFixed(9);
            }
            else {
                numResult.textContent = FCount;
            }
        }

        whatFunc = "";
    }

    else if(whatFunc === "x") {
        clear();
        mnozitel = Number(numResult.textContent);
        FCount = umnozaemoe * mnozitel;
        if(String(FCount).length > maxlength && FCount > 1) {
            numResult.textContent = "LONG NUM";
        }
        else if(FCount < 1) {
            numResult.textContent = FCount.toFixed(9);
        }
        else {
            numResult.textContent = FCount;
        }

        whatFunc = "";
    }

    else if(whatFunc === "-") {
        clear();
        vichitaemoe = Number(numResult.textContent);
        FCount = umensaemoe - vichitaemoe;
        if(String(FCount).length > maxlength && FCount > 1) {
            numResult.textContent = "LONG NUM";
        }
        else if(FCount < 1) {
            numResult.textContent = FCount.toFixed(9);
        }
        else {
            numResult.textContent = FCount;
        }

        whatFunc = "";
    }

    else if(whatFunc === "+") {
        clear();
        pribavlyaemoe = Number(numResult.textContent);
        FCount = uvelitivaemoe + pribavlyaemoe;
        if(String(FCount).length > maxlength && FCount > 1) {
            numResult.textContent = "LONG NUM";
        }
        else if(FCount < 1) {
            numResult.textContent = FCount.toFixed(9);
        }
        else {
            numResult.textContent = FCount;
        }

        whatFunc = "";

    }
    else {

    }
}
