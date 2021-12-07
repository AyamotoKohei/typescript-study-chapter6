function pick<T, K extends keyof T>(props: T, key: K) {
  return props[key];
}
const obj = {
  name: "Taro",
  amount: 0,
  flag: false,
};
const value1 = pick(obj, "name");
const value2 = pick(obj, "amount");
const value3 = pick(obj, "flag");
const value4 = pick(obj, "test"); // Error
