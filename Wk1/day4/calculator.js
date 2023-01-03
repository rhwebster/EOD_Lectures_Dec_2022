function calculator(num1, operator, num2) {
    if (operator === "+") {
        let result = num1 + num2;
        return result;
    }
    else if (operator === "-") {
        let result = num1 - num2;
        return result;
    }
    else if (operator === "*") {
        let result = num1 * num2;
        return result;
    }
    else if (operator === "/") {
        let result = num1 / num2;
        return result;
    }
    return 'Invalid Operator';
}