/**
 * Here's how it works:
 *
 * - The `Equal` type alias takes two type parameters, `A` and `B`.
 *
 * - The type alias defines a new type using a conditional type that
 * checks whether a function type, which is defined as
 * `<T>() => T extends A ? 1 : 2`, is equal to another function type
 * `<T>() => T extends B ? 1 : 2`.
 *
 * - The function types are generic, which means they take no arguments
 * and return a number either 1 or 2 based on whether their generic
 * type parameter `T` extends the type `A` or `B`.
 *
 * - If the two function types are equal, then the `Equal` type alias
 * evaluates to `true`. Otherwise, it evaluates to `false`.
 */
export type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends 
  <T>() => T extends B ? 1 : 2
    ? true
    : false;
