type IsString<T> = T extends string ? true : false;
type X = IsString<"test">;
type Y = IsString<0>;

interface Properties {
  name: string;
  age: number;
  flag: boolean;
}
type IsType<T, U> = {
  [K in keyof T]: T[K] extends U ? true : false;
};
type isString = IsType<Properties, string>;
type isNumber = IsType<Properties, number>;
type isBoolean = IsType<Properties, boolean>;
