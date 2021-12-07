interface User {
  name: string;
  age: number;
  gender: "male" | "female" | "other";
  birth: {
    day: Date;
    place?: {
      country?: string | null;
      state?: string;
    };
  };
}

type Unbox<T> = T extends { [k: string]: infer U }
  ? U
  : T extends (infer U)[]
  ? U
  : T;
type isPrimitive<T> = T extends Unbox<T> ? T : never;

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends isPrimitive<T[P]>
    ? T[P]
    : DeepReadonly<T[P]>;
};
type DeepReadonlyWrapUser = DeepReadonly<User>;

type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends isPrimitive<T[P]> ? T[P] : DeepReadonly<T[P]>;
};
type DeepRequiredWrapUser = DeepRequired<User>;

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends isPrimitive<T[P]> ? T[P] : DeepPartial<T[P]>;
};
type DeepPartialWrapUser = DeepPartial<User>;

type DeepNullable<T> = {
  [P in keyof T]?: T[P] extends isPrimitive<T[P]>
    ? T[P] | null
    : DeepNullable<T[P]>;
};
type DeepNullableWrapUser = DeepNullable<User>;

type DeepNonNullable<T> = {
  [P in keyof T]-?: T[P] extends isPrimitive<T[P]>
    ? Exclude<T[P], null | undefined>
    : DeepNonNullable<T[P]>;
};
type DeepNonNullableWrapUser = DeepNonNullable<User>;
