const calculatorScreen = document.querySelector('.calculator-screen')

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

//PROSES UPDATE LAYAR
const updateScreen = (number) => {
    calculatorScreen.value = number
}

//INPUT ANGKA
const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number
    } else{
        currentNumber += number
    }
    
}
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (Event) => {
        inputNumber(Event.target.value)
        updateScreen(currentNumber);
    })
    
});

//INPUT OPERATOR
const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}
const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (Event) =>{
        inputOperator(Event.target.value)
    })
});

//KALKULASI
const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
});

//TOMBOL AC
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
});

//FLOAT UNTUK ANGKA DECIMAL
inputDecimal = (dot) =>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', () => {
    inputDecimal(Event.target.value)
    updateScreen(currentNumber)
});
