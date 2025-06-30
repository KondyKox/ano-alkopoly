export interface PlayerProps {
  id: number;
  name: string;
  pawn: Pawn;
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

export interface Pawn {
  name: string;
  imageSrc: string;
  person: Person;
}

export interface PawnFromJSON extends Omit<Pawn, "person"> {
  person: string;
}
