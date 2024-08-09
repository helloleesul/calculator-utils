// 덧셈
export const add = (a: number, b: number) => a + b;
// 뺄셈
export const subtract = (a: number, b: number) => a - b;
// 곱셈
export const multiply = (a: number, b: number) => a * b;
// 나눗셈
export const divide = (a: number, b: number) => {
  if (b === 0) {
    throw new Error("나눌 수 없는 숫자입니다.");
  }
  return a / b;
};
