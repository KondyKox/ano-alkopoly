import type { Property, TileProps } from "./TileProps";

export interface AlkopolyPlayer {
  id: number;
  name: string;
  pawn: Pawn;
  money: number;
  properties: Property[];
  currentTile: TileProps;
}

interface Pawn {
  name: string;
  imageSrc: string;
}
