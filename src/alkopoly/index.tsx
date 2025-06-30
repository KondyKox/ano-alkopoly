import { useEffect, useState } from "react";
import Board from "./components/Board";
import type { TileFromJSON, TileProps } from "./types/TileProps";
import tilesData from "./data/tiles.json";
import JoinModal from "../common/components/join-modal";
import Lobby from "../common/components/Lobby";
import type { Person } from "../common/types/PlayerProps";

const testPlayers = [
  {
    id: 1,
    name: "Test 1",
    pawn: {
      name: "Pionek 1",
      imageSrc: "./pawns/rudy_chuj.png",
      person: "Ozzi" as Person,
    },
  },
  {
    id: 2,
    name: "Test 2",
    pawn: {
      name: "Pionek 2",
      imageSrc: "./pawns/rudy_chuj.png",
      person: "Ozzi" as Person,
    },
  },
  {
    id: 3,
    name: "Test 3",
    pawn: {
      name: "Pionek 3",
      imageSrc: "./pawns/rudy_chuj.png",
      person: "Ozzi" as Person,
    },
  },
  {
    id: 4,
    name: "Test 4",
    pawn: {
      name: "Pionek 4",
      imageSrc: "./pawns/rudy_chuj.png",
      person: "Ozzi" as Person,
    },
  },
];

const Alkopoly = () => {
  const [tiles, setTiles] = useState<TileProps[]>([]);
  const [joined, setJoined] = useState<boolean>(false);

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
      {!joined ? (
        <JoinModal joined={joined} setJoined={setJoined} />
      ) : (
        <Lobby joined={joined} players={testPlayers} />
      )}
      <Board tiles={tiles} />
    </div>
  );
};

export default Alkopoly;
