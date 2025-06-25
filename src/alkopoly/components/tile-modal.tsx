import Modal from "../../common/components/Modal";
import type { TileModalProps } from "../types/TileProps";
import styles from "../styles/TileModal.module.css";
import Button from "../../common/components/Button";
import { useState } from "react";
import { buyProperty } from "../utils/property";

const TileModal = ({ isOpen, onClose, tile }: TileModalProps) => {
  if (!isOpen) return null;

  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false);

  const handleBuyProperty = () => {
    buyProperty(tile);
    setConfirmOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className={styles.tileModal__container}
        style={{ backgroundImage: `url("/alkopoly/${tile.imageSrc}")` }}
      >
        <div className={styles.tileModal__hero}>
          <h3 className={styles.tileModal__header}>{tile.name}</h3>
          {tile.owner && (
            <div className={styles.tileModal__owner}>
              <img
                src={tile.owner.pawn.imageSrc}
                alt={`Pionek ${tile.owner.name}`}
              />
              <span>{tile.owner.name}</span>
            </div>
          )}
        </div>
        <div className={styles.tileModal__content}>
          <p className={styles.tileModal__description}>
            <i>{tile.description}</i>
          </p>
          <div className={styles.tileModal__info}>
            {tile.type === "property"
              ? !tile.owner && (
                  <>
                    Zakup:{" "}
                    <span className={styles.tileModal__price}>
                      {tile.price}
                    </span>
                    zł
                  </>
                )
              : tile.tax && (
                  <>
                    Podatek:{" "}
                    <span className={styles.tileModal__tax}>{tile.tax}</span>
                    zł
                  </>
                )}
          </div>
        </div>
      </div>
      <Button
        onClick={() => setConfirmOpen(true)}
        className={styles.tileModal__btn}
      >
        Kup {tile.name}
      </Button>
      <Modal isOpen={isConfirmOpen} onClose={() => setConfirmOpen(false)}>
        <div className={styles.confirm__container}>
          Czy zakupić <span>{tile.name}</span> za <span>{tile.price}</span>zł?
          <div className={styles.confirm__btns}>
            <Button onClick={() => setConfirmOpen(false)}>NIE</Button>
            <Button onClick={() => handleBuyProperty()}>TAK</Button>
          </div>
        </div>
      </Modal>
    </Modal>
  );
};

export default TileModal;
