import tilesData from "../data/tiles.json";
import type { TileFromJSON, TileProps } from "../types/TileProps";

export const generateTiles = (): TileProps[] => {
  return (tilesData as TileFromJSON[]).map((tile, index) => ({
    ...tile,
    id: index,
    owner: null,
  }));
};
