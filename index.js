import { add, subtract, multiply, divide } from "./operations.js";

export function calculate(value) {
  // 연산자 종류와 함수 할당
  const operators = ["+", "-", "*", "/"];
  const operatorFunctions = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
  };

  // 숫자와 연산자 구분하여 배열로 반환
  let tokenValue = value.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
  if (!tokenValue) return "계산할 값을 입력해 주세요.";

  // 숫자 스택
  let numberStack = [];
  // 연산자 스택
  let operatorStack = [];

  // 계산 함수
  const applyOperator = () => {
    const operator = operatorStack.pop();
    const right = numberStack.pop();
    const left = numberStack.pop();
    try {
      if (isNaN(operatorFunctions[operator](left, right)))
        throw new Error("올바르지 않은 계산입니다.");
      numberStack.push(operatorFunctions[operator](left, right));
    } catch (error) {
      numberStack.push(error.message);
    }
  };

  // 해당하는 스택에 보내거나 중간 계산하기
  tokenValue.forEach((token) => {
    // 숫자일 때
    if (!isNaN(token)) {
      // 숫자 스택에 추가
      numberStack.push(parseFloat(token));
    } else if (operators.includes(token)) {
      // 연산자일 때
      if (operatorStack.length) {
        // 중간 연산자의 계산
        applyOperator();
      }
      // 연산자 스택에 추가
      operatorStack.push(token);
    }
  });

  if (operatorStack.length) {
    // 마지막 연산자의 계산
    applyOperator();
  }

  // 총 계산 결과값
  return numberStack[0].toString();
}
