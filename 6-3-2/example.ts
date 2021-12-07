type X = Exclude<"a" | "b", "b">;
type Y = Exclude<"a" | (() => void), Function>;

type x = Extract<"a" | "b", "b">;
type y = Extract<"a" | (() => void), Function>;

type Z = NonNullable<string | null | undefined>;

type A = ReturnType<() => string>;
type a = ReturnType<string>; // Error

class C {
  x = 0;
  y = 0;
}
type B = InstanceType<typeof C>;
const b = {} as B;
