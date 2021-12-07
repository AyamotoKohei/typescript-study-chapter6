class Person<T extends string> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}
const person = new Person("Taro");
const personName = person.name;

interface PersonProps {
  name: string;
  age: number;
  gender: "male" | "female" | "other";
}
class Person1<T extends PersonProps> {
  name: T["name"];
  age: T["age"];
  gender: T["gender"];

  constructor(props: T) {
    this.name = props.name;
    this.age = props.age;
    this.gender = props.gender;
  }
}
const person1 = new Person1({
  name: "Taro",
  age: 28,
  gender: "male",
});
