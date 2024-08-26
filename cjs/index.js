"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = calculate;
const error_js_1 = require("./error.js");
const applyOperator_js_1 = require("./applyOperator.js");
function calculate(value) {
    const operators = ["+", "-", "*", "/"];
    let tokenValue = value.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
    if (!tokenValue)
        (0, error_js_1.getErrorMessage)('emptyArgument');
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
                (0, applyOperator_js_1.applyOperator)(numberStack, operatorStack);
            }
            operatorStack.push(token);
        });
    if (operatorStack.length) {
        (0, applyOperator_js_1.applyOperator)(numberStack, operatorStack);
    }
    return numberStack[0].toString();
}
//# sourceMappingURL=index.js.map