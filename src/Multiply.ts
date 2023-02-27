import { MakeRange } from './MakeRange';
import { SubtractOne } from './SubtractOne';

type _Multiply<
  n extends number,
  x extends number,
  productArray extends any[] = []
> = x extends 0
  ? productArray['length']
  : _Multiply<n, SubtractOne<x>, [...MakeRange<n>, ...productArray]>;

// n = 2, x = 2, productArray = []
// For each iter,
//     `n` should not change and is used to create a tuple with `n` length: `[...MakeRange<n>]`
//     `x` will be decremented by 1 until it reaches Zero: `SubtractOne<x>`
//
// The base case: `x extends 0`
// The recursive case: `Multiply<n, SubtractOne<x>, [...MakeRange<n>, ...productArray]>`

// 1st iter: n = 2, x = 2, productArray = []
// `MakeRange<2>` = [N, N]
// `SubtractOne<2>` = 1
// `[...MakeRange<n>, ...productArray]` = [N, N]

// 2nd iter: n = 2, x = 1, productArray = [N, N]
// `MakeRange<2>` = [N, N]
// `SubtractOne<1>` = 0
// `[...MakeRange<n>, ...productArray]` = [N, N, N, N]

// 3rd iter: n = 2, x = 0, productArray = [N, N, N, N]
// `0 extends 0` = true (terminate)
// `productArray["length"]` = 4

// Therefore, `type Multiply<2, 2> = 4`

export type Multiply<a extends number, b extends number> = _Multiply<a, b>;

// -- test Multiply
const twoTimesZero: Multiply<2, 0> = 0;
const twoTimesOne: Multiply<2, 1> = 2;
const twoTimesTwo: Multiply<2, 2> = 4;
const twoTimesThree: Multiply<2, 3> = 6;
const tenTimesTen: Multiply<10, 10> = 100;
// --
