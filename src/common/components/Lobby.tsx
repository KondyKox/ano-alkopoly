import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

const Lobby = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleStartGame = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => console.log("Nie tak się grę startuje.")}
    >
      <h3>Lobby</h3>
      <Button onClick={() => handleStartGame}>Start</Button>
    </Modal>
  );
};

export default Lobby;
