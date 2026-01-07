//Array to store calculation history
const calculationHistory = [];

//function to add the hisory
function addtoHistory(num1, operator, num2, result) {
    const calculation = {
        operand1: num1,
        operator: operator,
        operand2: num2,
        result: result,
    }
    calculationHistory.push(calculation);
}

//Addition
function add(num1, num2) {
    const result = num1 + num2;
    addtoHistory(num1, '+', num2, result);
    return result;
}
//subtracton
function subtract(num1, num2) {
    const result = num1 - num2;
    addtoHistory(num1, '-', num2, result);
    return result;
}
//multipication
function multiply(num1, num2) {
    const result = num1 * num2;
    addtoHistory(num1, '*', num2, result);
    return result;
}
//division
function divide(num1, num2) {
    if (num2 === 0) {
        console.log("Error Cannot divide by zero")
        return null;
    }
    const result = num1 / num2;
    addtoHistory(num1, '/', num2, result);
    return result;
}
//function to display history
function displayHistory() {
    if (calculationHistory.length === 0) {
        console.log("No calculations done yet.");
        return;
    }
    console.log("=== Calculation History ===");
    calculationHistory.forEach((calc, index) => {
        console.log(
            `${index + 1}: ${calc.operand1} ${calc.operator} ${calc.operand2} = ${calc.result}`
        );
    })
};

//tests
console.log(add(8, 1233));
console.log(subtract(5234, 4129847));
console.log(multiply(3213,12321));
console.log(divide(123123,0));
console.log(divide(123123,3));
displayHistory();
