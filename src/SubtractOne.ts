import { MakeRange } from './MakeRange';

// https://github.com/microsoft/TypeScript/issues/25719#issuecomment-727280094
export type Tail<T extends any[]> = T extends [any, ...infer U] ? U : never;

export type Length<T extends any[]> = T extends (infer U)[] & {
  length: infer L;
}
  ? L
  : never;
export type LengthMinusOne<T extends any[]> = Length<Tail<T>>;
export type SubtractOne<n extends number> = LengthMinusOne<MakeRange<n>>;

// -- test SubtractOne
const oneMinusOne: SubtractOne<1> = 0;
const threeMinusOne: SubtractOne<3> = 2;
const fiveMinusOne: SubtractOne<5> = 4;
const oneHundredMinusOne: SubtractOne<100> = 99;
// --