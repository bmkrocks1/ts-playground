import { IsNever } from './IsNever';
import { IsPlainObject } from './IsPlainObject';

/**
 * Returns the type of the values in the object.
 *
 * If the type `T` is a plain object, meaning it is not a built-in JavaScript
 * object, then the type of the values in the object is returned.
 *
 * If `T` is not a plain object, the `never` type is returned.
 *
 * `T[keyof T]` is an indexed access type that retrieves the type of the values
 * in the object.
 *
 * `keyof T` is a built-in TypeScript type that represents all valid property
 * names of the object `T`.
 *
 * Therefore, `T[keyof T]` retrieves the type of any value in the object `T`.
 */
export type TypesOfValuesInObject<T> = IsPlainObject<T> extends true
  ? T[keyof T]
  : never;

// type Foo123Literal = "foo" | 123
type Foo123Literal = TypesOfValuesInObject<{ prop1: 'foo'; prop2: 123 }>;

const test_f123_1: Foo123Literal = 'foo';
const test_f123_2: Foo123Literal = 123;
const test_f123_3: IsNever<TypesOfValuesInObject<{}>> = true;
const test_f123_4: IsNever<TypesOfValuesInObject<[]>> = true;
