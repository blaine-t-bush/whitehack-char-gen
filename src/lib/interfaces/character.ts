import type { Attributes } from './attribute';

interface Character {
  name: string;
  xp: number;
  level: number;
  class: string;
  species: string;
  vocation: string;
  hitPoints: number;
  attackValue: number;
  savingThrow: number;
  slotCount: number;
  groupCount: number;
  raiseCount: number;
  attributes: Attributes;
};

export type { Character };