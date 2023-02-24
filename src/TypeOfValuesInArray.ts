/**
 * Returns the type of the values in the array `T`.
 * 
 * This type alias is useful when you want to extract the type
 * of the elements in an array without knowing the length or
 * specific values of the array at compile time.
 * 
 * `T[number]` is an indexed access type that retrieves the type
 * of the elements in the array.
 * 
 * `number` is a built-in TypeScript type that represents all 
 * valid numeric values, so
 * 
 * `T[number]` retrieves the type of any element in the array `T`.
 */
export type TypesOfValuesInArray<T extends any[]> = T[number];

// type FooBarStringLiteral = "foo" | "bar"
type FooBarStringLiteral = TypesOfValuesInArray<['foo', 'bar']>;

const test_fbsl_1: FooBarStringLiteral = 'foo';
const test_fbsl_2: FooBarStringLiteral = 'bar';