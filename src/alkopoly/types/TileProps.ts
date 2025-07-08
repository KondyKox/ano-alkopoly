import type { ModalProps } from "../../common/types/ModalProps";
import type { Alcohol, AlkopolyPlayer } from "./GameState";

export interface TileProps {
  id: number;
  name: string;
  type: TileType;
  imageSrc: string;
  owner: AlkopolyPlayer | null;
  description: string;
  price?: number; // buying property
  tax?: number;
}

export type TileFromJSON = Omit<TileProps, "id">;

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

// Tile Modal
export interface TileModalProps extends Omit<ModalProps, "children"> {
  tile: TileProps;
}
