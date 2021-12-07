interface User {
  name: string;
  age: number | null;
  gender: "male" | "female" | "other";
  birthplace?: string;
}

type ReadonlyWrapUser = Readonly<User>;

type PartialWrapUser = Partial<User>;

type RequireWrapUser = Required<User>;

type UserRecord = Record<"user", User>;

type UserGender = Pick<User, "gender">;

type WithoutBirthplace = Omit<User, "birthplace">;
