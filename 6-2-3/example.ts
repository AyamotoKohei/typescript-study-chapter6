interface DeepNest {
  deep: { nest: { value: string } };
}
interface ShallowNest {
  shallow: { value: string };
}
interface Properties {
  deep: DeepNest;
  shallow: ShallowNest;
}

type Salvage<T extends DeepNest> = T["deep"]["nest"]["value"];
type DeepDive<T> = {
  [K in keyof T]: T[K] extends DeepNest ? Salvage<T[K]> : never;
}[keyof T];

type X = DeepDive<Properties>;
