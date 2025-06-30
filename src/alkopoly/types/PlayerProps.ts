import type { Pawn, PlayerProps } from "../../common/types/PlayerProps";
import type { Property, TileProps } from "./TileProps";

export interface AlkopolyPlayer extends PlayerProps {
  pawn: Pawn;
  money: number;
  properties: Property[];
  currentTile: TileProps;
}
