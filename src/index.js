import { getErrorMessage } from "./error.js";
import { applyOperator } from "./applyOperator.js";
export function calculate(value) {
    const operators = ["+", "-", "*", "/"];
    let tokenValue = value.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
    if (!tokenValue)
        return getErrorMessage('emptyArgument');
    let numberStack = [];
    let operatorStack = [];
    function isOperatorType(value) {
        return operators.includes(value);
    }
    tokenValue.forEach((token) => {
        if (!isOperatorType(token)) {
            return numberStack.push(parseFloat(token));
        }
        if (operatorStack.length) {
            applyOperator(numberStack, operatorStack);
        }
        operatorStack.push(token);
    });
    if (operatorStack.length) {
        applyOperator(numberStack, operatorStack);
    }
    return numberStack[0].toString();
}
console.log(calculate("1+2*10-1"));
console.log(calculate("1.1+2"));
console.log(calculate("1/0"));
console.log(calculate("+2"));
console.log(calculate(""));
//# sourceMappingURL=index.js.map