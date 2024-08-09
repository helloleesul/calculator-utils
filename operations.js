// 덧셈
export const add = (a, b) => a + b;
// 뺄셈
export const subtract = (a, b) => a - b;
// 곱셈
export const multiply = (a, b) => a * b;
// 나눗셈
export const divide = (a, b) => {
  if (b === 0) {
    throw new Error("나눌 수 없는 숫자입니다.");
  }
  return a / b;
};
