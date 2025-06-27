import { useEffect, useState } from "react";
import type { Pawn, PawnFromJSON, Person } from "../types/PlayerProps";
import pawnsData from "../data/pawns.json";
import styles from "../styles/JoinModal.module.css";
import Modal from "../../common/components/Modal";
import InputGroup from "../../common/components/InputGroup";
import Button from "../../common/components/Button";

const JoinModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [pawns, setPawns] = useState<Pawn[]>([]);
  const [playerName, setPlayerName] = useState<string>("");
  const [playerPawn, setPlayerPawn] = useState<Pawn | null>(null);

  useEffect(() => {
    const parsed: Pawn[] = (pawnsData as PawnFromJSON[]).map((pawn) => ({
      ...pawn,
      person: pawn.person as Person,
    }));

    setPawns(parsed);
  }, []);

  const handlePawnClick = (pawn: Pawn) => {
    if (playerPawn) setPlayerPawn(null);
    else setPlayerPawn(pawn);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!playerName || !playerPawn) {
      alert("No ale we wszystko zrób dobrze a nie...");
      return;
    }

    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => alert("Jak ty chcesz debilu grać bez pionka i nazwy?")}
    >
      <form
        className={styles.join__container}
        onSubmit={(e) => handleSubmit(e)}
      >
        <h3>Dołączanie do gry</h3>
        <InputGroup
          inputId="playerName"
          label="Nazwa gracza"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Wpisz swoją nazwę..."
        />
        <div className={styles.pawns__container}>
          {pawns.map((pawn, index) => (
            <div
              key={index}
              className={`${styles.pawn} ${
                pawn === playerPawn ? styles.active : ""
              }`}
              onClick={() => handlePawnClick(pawn)}
            >
              <img
                src={`./alkopoly/${pawn.imageSrc}`}
                alt={pawn.name}
                className={styles.pawn__image}
              />
              <span className={styles.pawn__name}>{pawn.name}</span>
            </div>
          ))}
        </div>
        <Button className={styles.join__btn}>Dołącz</Button>
      </form>
    </Modal>
  );
};

export default JoinModal;
