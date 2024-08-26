import {getErrorMessage} from "./error.js";
import {add, divide, multiply, subtract} from "./operations.js";

export type OperatorType = "+" | "-" | "*" | "/";

const operatorFunctions = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
};

// 계산 함수
export function applyOperator(numberStack:number[], operatorStack:OperatorType[]) {
    const operator = operatorStack.pop();
    const right = numberStack.pop();
    const left = numberStack.pop();

    if (operator !== undefined) {
        if (
            isNaN(
                operatorFunctions[operator](Number(left), Number(right))
            )
        ) {
            getErrorMessage('resultIsNan')
        }
        numberStack.push(
            operatorFunctions[operator](Number(left), Number(right))
        );
    }
}