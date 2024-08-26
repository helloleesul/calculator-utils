import { getErrorMessage } from "./error.js";
import { add, divide, multiply, subtract } from "./operations.js";
const operatorFunctions = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
};
export function applyOperator(numberStack, operatorStack) {
    const operator = operatorStack.pop();
    const right = numberStack.pop();
    const left = numberStack.pop();
    if (operator === undefined || right === undefined || left === undefined)
        return getErrorMessage('resultIsNan');
    const result = operatorFunctions[operator](left, right);
    if (Number.isNaN(result))
        getErrorMessage('resultIsNan');
    numberStack.push(result);
}
//# sourceMappingURL=applyOperator.js.map