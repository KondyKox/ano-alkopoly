import type { Pawn, PlayerProps } from "../../common/types/GameState";
import type { Property } from "./TileProps";

export interface AlkopolyPlayer extends PlayerProps {
  pawn: Pawn;
  money: number;
  properties: Property[];
  position: number;
  jailed?: boolean;
}
