"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMessage = getErrorMessage;
const ERROR_MESSAGE = {
    divisionByZero: '나눌 수 없는 숫자입니다.',
    emptyArgument: '계산할 값을 입력해 주세요.',
    resultIsNan: '올바르지 않은 계산입니다.'
};
function getErrorMessage(message) {
    const errorMessage = ERROR_MESSAGE[message];
    throw new Error(errorMessage);
}
//# sourceMappingURL=error.js.map