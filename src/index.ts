import {getErrorMessage} from "./error.js";
import {applyOperator, OperatorType} from "./applyOperator.js";

export function calculate(value: string) {
  // 연산자 종류와 함수 할당
  const operators:string[] = ["+", "-", "*", "/"];

  // 숫자와 연산자 구분하여 배열로 반환
  let tokenValue = value.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
  if (!tokenValue) return getErrorMessage('emptyArgument')

  // 숫자 스택
  let numberStack: number[] = [];
  // 연산자 스택
  let operatorStack: OperatorType[]   = [];

  // 타입 가드 함수 정의
  function isOperatorType(value: string): value is OperatorType {
    return operators.includes(value);
  }

  // 해당하는 스택에 보내거나 중간 계산하기
  tokenValue.forEach((token) => {
      // 숫자
      if (!isOperatorType(token)) {
        numberStack.push(parseFloat(token));
        return;
      }
      // 연산자
      if (operatorStack.length) {
        // 중간 연산자의 계산
        applyOperator(numberStack, operatorStack);
      }
      // 연산자 스택에 추가
      operatorStack.push(token);
  });

  if (operatorStack.length) {
    // 마지막 연산자의 계산
    applyOperator(numberStack, operatorStack);
  }

  // 총 계산 결과값
  return numberStack[0].toString();
}