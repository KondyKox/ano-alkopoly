import type { Pawn, Player } from "../../common/types/PlayerProps";
import type { Property, TileProps } from "./TileProps";

export interface AlkopolyPlayer extends Player {
  pawn: Pawn;
  money: number;
  properties: Property[];
  currentTile: TileProps;
}
