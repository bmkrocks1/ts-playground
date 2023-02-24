/**
 * A union type that includes several built-in JavaScript objects:
 * - Function: the function object
 * - Date: the date object
 * - RegExp: the regular expression object
 * - Generator: the generator object
 * - { readonly [Symbol.toStringTag]: string; }: an object that has a Symbol.toStringTag property that is a string
 * - any[]: an array of any type
 */
export type BuiltInObjects =
  | Function
  | Date
  | RegExp
  | Generator
  | {
      readonly [Symbol.toStringTag]: string;
    }
  | any[];

/**
 * A conditional type that checks whether the type `T` is a plain JavaScript object.
 * It returns `true` if `T` is an object type that is not a built-in JavaScript object, 
 * and `false` otherwise. 
 * 
 * Note that this type check is based on the assumption that 
 * plain objects have no constructor other than `Object`. If `T` has a constructor 
 * other than `Object`, it will be treated as a non-plain object.
 */
export type IsPlainObject<T> = T extends object
  ? T extends string | BuiltInObjects
    ? false
    : true
  : false;

const test_ispo_1: IsPlainObject<{}> = true;
const test_ispo_2: IsPlainObject<[]> = false;
const test_ispo_3: IsPlainObject<null> = false;
const test_ispo_4: IsPlainObject<"str"> = false;
const test_ispo_5: IsPlainObject<123> = false;
const test_ispo_6: IsPlainObject<false> = false;
const test_ispo_7: IsPlainObject<() => void> = false;
const test_ispo_8: IsPlainObject<typeof Date> = false;
const test_ispo_9: IsPlainObject<typeof Object> = false;

class Person {
  constructor() {
    //
  }
}

const test_ispo_10: IsPlainObject<Person> = true;