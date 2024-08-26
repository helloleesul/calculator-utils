declare const ERROR_MESSAGE: {
    readonly divisionByZero: "나눌 수 없는 숫자입니다.";
    readonly emptyArgument: "계산할 값을 입력해 주세요.";
    readonly resultIsNan: "올바르지 않은 계산입니다.";
};
type ERROR_MESSAGE_KEY = keyof typeof ERROR_MESSAGE;
export declare function getErrorMessage(message: ERROR_MESSAGE_KEY): void;
export {};
//# sourceMappingURL=error.d.ts.map