import { MakeRange } from './MakeRange';
import { Multiply } from './Multiply';
import { SubtractOne } from './SubtractOne';

type Factorial<n extends number, productArray extends any[] = [0]> =
  (() => SubtractOne<n>) extends (() => infer m extends number)
    ? n extends 0 | 1
      ? productArray["length"]
      : Factorial<m, [...MakeRange<Multiply<n, productArray["length"]>>]>
    : never;

type zero_factorial = Factorial<0>;  // 1
type one_factorial = Factorial<1>;   // 1
type two_factorial = Factorial<2>;   // 2
type three_factorial = Factorial<3>; // 6
type four_factorial = Factorial<4>;  // 24
type five_factorial = Factorial<5>;  // 120