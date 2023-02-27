// ====================

import { MakeRange } from '../MakeRange';

interface Fn {
  input: unknown;
  output: unknown;
}

type Call<fn extends Fn, input> = (fn & { input: input })['output'];

type Stringifiable = string | number | boolean | bigint | null | undefined;

// generic array operations

// Reduce
type Reduce<xs, acc, fn extends Fn> = xs extends [infer first, ...infer rest]
  ? Reduce<rest, Call<fn, { acc: acc; item: first }>, fn>
  : acc;

// Define Map in terms of Reduce
interface MapFn<fn extends Fn> extends Fn {
  output: this['input'] extends {
    acc: infer acc extends any[];
    item: infer item;
  }
    ? [...acc, Call<fn, item>]
    : never;
}

type ListMap<xs, fn extends Fn> = Reduce<xs, [], MapFn<fn>>;

// Define Filter in terms of Reduce
interface FilterFn<fn extends Fn> extends Fn {
  output: this['input'] extends {
    acc: infer acc extends any[];
    item: infer item;
  }
    ? Call<fn, item> extends true
      ? [...acc, item]
      : acc
    : never;
}

type Filter<xs, fn extends Fn> = Reduce<xs, [], FilterFn<fn>>;

interface ToPhrase extends Fn {
  output: `number is ${Extract<this['input'], string | number | boolean>}`;
}

type ys = ListMap<[1, 2, 3], ToPhrase>;

type AddNumbers<a, b> = [...MakeRange<a>, ...MakeRange<b>]['length'];

const three: AddNumbers<1, 2> = 3;

type StringToNumber<str> = str extends `${infer n extends number}` ? n : never;

type Number1 = StringToNumber<'1'>;
type Number2 = StringToNumber<'2'>;
type NumberFoo = StringToNumber<'foo'>;

interface Add extends Fn {
  output: this['input'] extends {
    acc: infer acc;
    item: infer item;
  }
    ? AddNumbers<acc, item>
    : never;
}

interface Join<sep extends string> extends Fn {
  output: this['input'] extends {
    acc: infer acc extends Stringifiable;
    item: infer item extends Stringifiable;
  }
    ? `${acc}${sep}${item}`
    : never;
}

type JoinByDash = Join<'-'>;

type sum = Reduce<[1, 2, 3, 4], 0, JoinByDash>;
