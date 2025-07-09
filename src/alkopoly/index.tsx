import { useEffect, useState } from "react";
import Board from "./components/Board";
import type { TileProps } from "./types/TileProps";
import JoinModal from "../common/components/modal/join-modal";
import Lobby from "../common/components/modal/Lobby";
import type { AlkopolyPlayer } from "./types/GameState";
import socket from "../common/sockets";

const Alkopoly = () => {
  const [tiles, setTiles] = useState<TileProps[]>([]);
  const [players, setPlayers] = useState<AlkopolyPlayer[]>([]);
  const [joined, setJoined] = useState<boolean>(false);

  useEffect(() => {
    socket.on("gameState", (state) => {
      const playersArray: AlkopolyPlayer[] = Object.values(state.players);
      setPlayers(playersArray);
      setTiles(state.tiles);
    });

    return () => {
      socket.off("gameState");
    };
  }, []);

  return (
    <div className="alkopoly-theme">
      {!joined ? (
        <JoinModal joined={joined} setJoined={setJoined} />
      ) : (
        <Lobby joined={joined} players={players} />
      )}
      <Board tiles={tiles} />
    </div>
  );
};

export default Alkopoly;
