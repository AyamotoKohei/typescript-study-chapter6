function boxed<T>(props: T) {
  return { value: props };
}
const box0 = boxed("test");
const box1 = boxed(0);
const box2 = boxed(false as boolean | null);
const box3 = boxed<string | null>(null);

const boxed1 = <T>(props: T) => ({ value: props });

function boxed2<T extends string>(props: T) {
  return { value: props };
}
const box4 = boxed2(0); // Error
const box5 = boxed2("test");

interface Props {
  amount: number;
}
function boxed3<T extends Props>(props: T) {
  return { value: props.amount.toFixed(1) };
}
const box6 = boxed3({ amount: 0 });
const box7 = boxed3({ value: 0 }); // Error
const box8 = boxed3({ amount: "test" }); // Error
