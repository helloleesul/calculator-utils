"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
const error_js_1 = require("./error.js");
const add = (a, b) => a + b;
exports.add = add;
const subtract = (a, b) => a - b;
exports.subtract = subtract;
const multiply = (a, b) => a * b;
exports.multiply = multiply;
const divide = (a, b) => {
    if (b === 0) {
        (0, error_js_1.getErrorMessage)('divisionByZero');
    }
    return a / b;
};
exports.divide = divide;
//# sourceMappingURL=operations.js.map