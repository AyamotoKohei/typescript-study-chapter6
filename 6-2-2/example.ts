interface Properties {
  name: string;
  age: number;
  walk: () => void;
  jump: () => Promise<void>;
}
type Filter<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

type stringKeys = Filter<Properties, string>;
type numberKeys = Filter<Properties, number>;
type functionKeys = Filter<Properties, Function>;
type returnPromiseKeys = Filter<Properties, () => Promise<any>>;

type StringKeys<T> = Filter<T, string>;
type NumberKeys<T> = Filter<T, number>;
type FunctionKeys<T> = Filter<T, Function>;
type ReturnPromiseKeys<T> = Filter<T, () => Promise<any>>;

type Strings = Pick<Properties, StringKeys<Properties>>;
type Numbers = Pick<Properties, NumberKeys<Properties>>;
type Functions = Pick<Properties, FunctionKeys<Properties>>;
type ReturnPromises = Pick<Properties, ReturnPromiseKeys<Properties>>;
