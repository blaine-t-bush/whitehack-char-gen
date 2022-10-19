interface Attribute {
  name: string;
  score: number;
  groups: string[];
};

interface Attributes {
  str: Attribute;
  dex: Attribute;
  con: Attribute;
  int: Attribute;
  wis: Attribute;
  cha: Attribute;
}

export type { Attribute, Attributes };