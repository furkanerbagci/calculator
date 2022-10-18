const calculatorKeys = document.querySelector(`.calculator_keys`)
const input = document.querySelector(`.input`)


let displayValue = "0";
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

updateDisplayValue();

function updateDisplayValue(){
    input.value = displayValue ;
}

calculatorKeys.addEventListener("click",function(e){
    let element = e.target ;
    if(element.classList.contains("operator")){
        inputOperator(element.value);
        updateDisplayValue();
    }
    else if(element.classList.contains("decimal")){
        if(!displayValue.includes(".")){
            inputDecimal();
            updateDisplayValue();
        }

    }
    else if(element.classList.contains("clear")){
        inputClear();
        updateDisplayValue();

    }else if(element.classList.contains("equal")){
        showResult(parseFloat(displayValue),firstValue);
        updateDisplayValue();
        firstValue = displayValue
        
    }
    else{
        inputNumber(element.value)
        updateDisplayValue();
    }
    console.log(displayValue,firstValue,operator,waitingForSecondValue)
    
});

function inputNumber(num){
    if(waitingForSecondValue){
        displayValue = num
        waitingForSecondValue = false
    }
    else{
        displayValue = displayValue === "0" ? num : displayValue + num ;
    }
    
}

function inputDecimal(dec){
    displayValue += `.`
}

function inputClear(){
    displayValue = "0"
    firstValue = null
}

function inputOperator(opr){
    let value = parseFloat(displayValue);
    if(firstValue === null){
        firstValue = value;
    }
    
    waitingForSecondValue = true
    operator = opr;
}


function showResult(second,first){
    if (operator === "+"){
        result = first + second
    }else if(operator === "-"){
        result = first - second
    }else if(operator === "*"){
        result = first * second
    }else if(operator === "/"){
        result = first / second
    }else if(operator === "%"){
        result = first % second
    }
    displayValue = result
}

