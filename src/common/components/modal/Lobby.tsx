import Modal from "./Modal";
import { useState } from "react";
import styles from "../../styles/Lobby.module.css";
import Player from "../Player";
import Button from "../Button";
import type { LobbyProps } from "../../types/ModalProps";

const Lobby = ({ joined, players }: LobbyProps) => {
  if (!joined) return null;
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const handleStartGame = () => {
    console.log("GAME STARTED!");
    setGameStarted(true);
  };

  return (
    <Modal
      isOpen={!gameStarted}
      onClose={() => console.log("Nie tak się grę startuje.")}
    >
      <div className={styles.lobby}>
        <h3>Lobby</h3>
        <div className={styles.players__container}>
          {players.map((player) => (
            <div key={player.id}>
              <Player player={player} />
            </div>
          ))}
        </div>
        <Button onClick={() => handleStartGame()}>Start</Button>
      </div>
    </Modal>
  );
};

export default Lobby;
