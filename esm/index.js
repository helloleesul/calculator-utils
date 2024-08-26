import { getErrorMessage } from "./error.js";
import { applyOperator } from "./applyOperator.js";
export function calculate(value) {
    const operators = ["+", "-", "*", "/"];
    let tokenValue = value.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
    if (!tokenValue)
        getErrorMessage('emptyArgument');
    let numberStack = [];
    let operatorStack = [];
    function isOperatorType(value) {
        return operators.includes(value);
    }
    if (tokenValue)
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
//# sourceMappingURL=index.js.map