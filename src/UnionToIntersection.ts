import { Equal } from './Equal';

/**
 * This type alias takes a union type `U` as its input
 * and returns an intersection type.
 *
 * It works by using a
 * conditional type to convert the union type into a
 * function type that takes a single argument of type `U`.
 *
 * By defining the function type in this way,
 * it allows the TypeScript compiler to infer an intersection
 * type for `U` based on the types of the function parameters.
 *
 * E.g.
 *
 * ```
 *  type MyUnion = string | number;
 *  type MyIntersection = UnionToIntersection<MyUnion>;
 *  // type MyIntersection = string & number
 * ```
 */
export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

type StringOrNumber = string | number;
type StringAndNumber = string & number;

const test_uti_1: Equal<
  UnionToIntersection<StringOrNumber>,
  StringAndNumber
> = true;

type SNFunc = UnionToIntersection<(arg: StringOrNumber) => StringOrNumber>;
// type SNFunc = (arg: StringOrNumber) => StringOrNumber

type ReturnType<Fn> = Fn extends (_: any) => infer R ? R : never;
type SNFuncReturnType = ReturnType<SNFunc>;
// type SNFuncReturnType = string | number

// NOTE TO SELF: come back to this later after trying recursive types
