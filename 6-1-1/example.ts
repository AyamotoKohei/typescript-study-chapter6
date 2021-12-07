interface Box<T> {
  value: T;
}
const box0: Box = { value: "test" }; // Error
const box1: Box<string> = { value: "test" };
const box2: Box<number> = { value: "test" }; // Error

interface Box1<T = string> {
  value: T;
}
const box4: Box1 = { value: "test" };
const box5: Box1 = { value: "test" };
const box6: Box1<number> = { value: "test" }; // Error

interface Box2<T extends string | number> {
  value: T;
}
const box7: Box2<string> = { value: "test" };
const box8: Box2<number> = { value: 0 };
const box9: Box2<boolean> = { value: false }; // Error
