import type { ModalProps } from "../../common/types/ModalProps";
import type { AlkopolyPlayer } from "./PlayerProps";

export interface TileProps {
  id: number;
  name: string;
  type: TileType;
  imageSrc: string;
  owner: AlkopolyPlayer | null;
  price?: number; // buying property
  tax?: number;
}

export type TileType =
  | "start"
  | "property"
  | "fine"
  | "chance"
  | "jail"
  | "reward";

export interface Property extends TileProps {
  type: "property";
  alcohol: Alcohol[];
}

export interface Alcohol {
  type: "beer" | "vodka";
  taxBonus: number;
}

// Tile Modal
export interface TileModalProps extends Omit<ModalProps, "children"> {
  tile: TileProps;
}
