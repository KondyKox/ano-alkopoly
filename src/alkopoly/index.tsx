import { useEffect, useState } from "react";
import Board from "./components/Board";
import type { TileFromJSON, TileProps } from "./types/TileProps";
import tilesData from "./data/tiles.json";
import JoinModal from "./components/join-modal";

const Alkopoly = () => {
  const [tiles, setTiles] = useState<TileProps[]>([]);

  useEffect(() => {
    const parsed: TileProps[] = (tilesData as TileFromJSON[]).map(
      (tile, index) => ({
        ...tile,
        id: index,
      })
    );

    setTiles(parsed);
  }, []);

  return (
    <div className="alkopoly-theme">
      <JoinModal />
      <Board tiles={tiles} />
    </div>
  );
};

export default Alkopoly;
