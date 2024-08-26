import { getErrorMessage } from "./error.js";
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => {
    if (b === 0) {
        getErrorMessage('divisionByZero');
    }
    return a / b;
};
//# sourceMappingURL=operations.js.map