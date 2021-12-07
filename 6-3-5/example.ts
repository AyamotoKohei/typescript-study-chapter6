type Unbox<T> = T extends { [K in keyof T]: infer U } ? U : never;
type T = Unbox<{ a: "A"; b: "B"; c: "C" }>;

type UTI<T> = T extends any ? (args: T) => void : never;
type UnionToIntersection<T> = UTI<T> extends (args: infer I) => void
  ? I
  : never;
type A_or_B = { a: "A" } | { b: "B" };
type A_and_B = UnionToIntersection<A_or_B>;

type NonEmptyList<T> = [T, ...T[]];
const list1: NonEmptyList<string> = []; // Error
const list2: NonEmptyList<string> = ["test"];

type PickSet<T> = T extends Set<infer I> ? I : never;
const set = new Set([1, 2] as const);
type SetValue = PickSet<typeof set>;

const map = new Map([
  [0, "foo"],
  [1, "bar"],
] as const);
type PickMap<T> = T extends Map<infer K, any> ? K : never;
type MapKeys = PickMap<typeof map>;
