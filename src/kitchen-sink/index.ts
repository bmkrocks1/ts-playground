import { Equal } from '../Equal';

type UnionToIntersection<union> = (
  union extends any ? (k: union) => void : never
) extends (k: infer intersection) => void
  ? intersection
  : never;

type UnionToTuple<union, output extends any[] = []> = UnionToIntersection<
  union extends any ? (t: union) => union : never
> extends (_: any) => infer elem
  ? UnionToTuple<Exclude<union, elem>, [elem, ...output]>
  : output;

type ValueOf<a> = a extends any[] ? a[number] : a[keyof a];
type Values<a extends object> = UnionToTuple<ValueOf<a>>;

const ex1: Equal<UnionToTuple<1 | 2>, [1, 2]> = true;
const ex2: Equal<UnionToTuple<'a' | 'b'>, ['a', 'b']> = true;
const ex3: Equal<UnionToTuple<string | number>, [string, number]> = true;
