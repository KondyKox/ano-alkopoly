import type {
  GameState,
  Pawn,
  PlayerProps,
} from "../../common/types/GameState";
import type { Property, TileProps } from "./TileProps";

export interface AlkopolyState extends GameState<AlkopolyPlayer> {
  tiles: TileProps[];
}

export interface AlkopolyPlayer extends PlayerProps {
  pawn: Pawn;
  money: number;
  properties: Property[];
  position: number;
  jailed: boolean;
}

export interface Alcohol {
  type: "beer" | "vodka";
  taxBonus: number;
}
