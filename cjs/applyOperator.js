"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyOperator = applyOperator;
const error_js_1 = require("./error.js");
const operations_js_1 = require("./operations.js");
const operatorFunctions = {
    "+": operations_js_1.add,
    "-": operations_js_1.subtract,
    "*": operations_js_1.multiply,
    "/": operations_js_1.divide,
};
function applyOperator(numberStack, operatorStack) {
    const operator = operatorStack.pop();
    const right = numberStack.pop();
    const left = numberStack.pop();
    if (operator === undefined || right === undefined || left === undefined)
        return (0, error_js_1.getErrorMessage)('resultIsNan');
    const result = operatorFunctions[operator](left, right);
    if (Number.isNaN(result))
        (0, error_js_1.getErrorMessage)('resultIsNan');
    numberStack.push(result);
}
//# sourceMappingURL=applyOperator.js.map