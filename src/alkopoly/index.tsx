import { useEffect, useState } from "react";
import Board from "./components/Board";
import type { TileProps } from "./types/TileProps";
import JoinModal from "../common/components/modal/join-modal";
import Lobby from "../common/components/modal/Lobby";
import { generateTiles } from "./utils/generateTiles";

const testPlayers = [
  {
    id: "1",
    name: "Test 1",
    pawn: {
      name: "Pionek 1",
      imageSrc: "./pawns/rudy_chuj.png",
    },
  },
  {
    id: "2",
    name: "Test 2",
    pawn: {
      name: "Pionek 2",
      imageSrc: "./pawns/rudy_chuj.png",
    },
  },
  {
    id: "3",
    name: "Test 3",
    pawn: {
      name: "Pionek 3",
      imageSrc: "./pawns/rudy_chuj.png",
    },
  },
  {
    id: "4",
    name: "Test 4",
    pawn: {
      name: "Pionek 4",
      imageSrc: "./pawns/rudy_chuj.png",
    },
  },
];

const Alkopoly = () => {
  const [tiles, setTiles] = useState<TileProps[]>([]);
  const [joined, setJoined] = useState<boolean>(false);

  useEffect(() => {
    setTiles(generateTiles());
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
