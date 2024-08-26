import {getErrorMessage} from "./error.js";

// 덧셈
export const add = (a: number, b: number) => a + b;
// 뺄셈
export const subtract = (a: number, b: number) => a - b;
// 곱셈
export const multiply = (a: number, b: number) => a * b;
// 나눗셈
export const divide = (a: number, b: number) => {
  if (b === 0) {
   getErrorMessage('divisionByZero')
  }
  return a / b;
};
