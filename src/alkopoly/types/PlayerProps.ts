import type { Property, TileProps } from "./TileProps";

export interface AlkopolyPlayer {
  id: number;
  name: string;
  pawn: Pawn;
  money: number;
  properties: Property[];
  currentTile: TileProps;
}

export interface Pawn {
  name: string;
  imageSrc: string;
  person: Person;
}

export interface PawnFromJSON extends Omit<Pawn, "person"> {
  person: string;
}

export type Person =
  | "kondy"
  | "kamcio"
  | "olga"
  | "wika"
  | "ozzi"
  | "kamil"
  | "szczepan"
  | "wiktor";
