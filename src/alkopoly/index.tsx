import { useEffect, useState } from "react";
import Board from "./components/Board";
import type { TileProps } from "./types/TileProps";
import tilesData from "./data/tiles.json";

const Alkopoly = () => {
  const [tiles, setTiles] = useState<TileProps[]>([]);

  useEffect(() => {
    const parsed: TileProps[] = tilesData.map((tile) => {
      return tile as TileProps;
    });

    setTiles(parsed);
  }, []);

  return (
    <div className="alkopoly-theme">
      <Board tiles={tiles} />
    </div>
  );
};

export default Alkopoly;
