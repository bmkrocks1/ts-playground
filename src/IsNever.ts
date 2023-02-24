// https://github.com/microsoft/TypeScript/issues/31751#issuecomment-498526919
export type IsNever<T> = [T] extends [never] ? true : false;