function greet() {
  return "Hello";
}
type Return<T> = T extends (...arg: any[]) => infer U ? U : never;
type R = Return<typeof greet>;

function Greet(name: string, age: number) {
  return `Hello! I'm ${name}. ${age} years old.`;
}

type A1<T> = T extends (...arg: [infer U, ...any[]]) => any ? U : never;
type A2<T> = T extends (...arg: [any, infer U, ...any[]]) => any ? U : never;
type AA<T> = T extends (...arg: infer U) => any ? U : never;

type X = A1<typeof Greet>;
type Y = A2<typeof Greet>;
type Z = AA<typeof Greet>;

async function aGreet() {
  return "Hello";
}

type ResolveArg<T> = T extends () => Promise<infer U> ? U : never;
type x = typeof aGreet;
type y = ResolveArg<typeof aGreet>;
