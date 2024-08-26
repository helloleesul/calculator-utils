const ERROR_MESSAGE = {
    divisionByZero: '나눌 수 없는 숫자입니다.',
    emptyArgument: '계산할 값을 입력해 주세요.',
    resultIsNan: '올바르지 않은 계산입니다.'
} as const;

type ERROR_MESSAGE_KEY = keyof typeof ERROR_MESSAGE;

export function getErrorMessage(message:ERROR_MESSAGE_KEY) {
    const errorMessage = ERROR_MESSAGE[message];
    throw new Error(errorMessage);
}