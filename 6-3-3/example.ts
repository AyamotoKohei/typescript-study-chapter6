type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";

type T0 = TypeName<string>;
type T1 = TypeName<0>;
type T2 = TypeName<true>;
type T3 = TypeName<() => void>;
type T4 = TypeName<[]>;

interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
}

type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type FunctioProperties<T> = Pick<T, FunctionPropertyNames<T>>;

type X = FunctionPropertyNames<Part>;
type Y = FunctioProperties<Part>;

type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

type NonFunctioProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

type x = NonFunctionPropertyNames<Part>;
type y = NonFunctioProperties<Part>;

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...arg: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;

type t0 = Unpacked<string>;
type t1 = Unpacked<string[]>;
type t2 = Unpacked<() => string>;
type t3 = Unpacked<Promise<string>>;
type t4 = Unpacked<Promise<string>[]>;
type t5 = Unpacked<Unpacked<Promise<string>[]>>;
