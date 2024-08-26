import {getErrorMessage} from "./error.js";
import {add, divide, multiply, subtract} from "./operations.js";

export type OperatorType = "+" | "-" | "*" | "/";
type OperatorFunction = (a: number, b: number) => number;

const operatorFunctions: Record<OperatorType, OperatorFunction> = {
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

    if (operator === undefined || right === undefined || left === undefined) return getErrorMessage('resultIsNan');

    const result = operatorFunctions[operator](left, right);
    if (Number.isNaN(result)) getErrorMessage('resultIsNan');
    numberStack.push(result);
}