import type { PlayerProps } from "../types/PlayerProps";
import styles from "../styles/Player.module.css";

const Player = ({ player }: { player: PlayerProps }) => {
  return (
    <div className={styles.player}>
      <img
        src={`./${player.pawn.imageSrc}`}
        alt={`Pionek gracza ${player.name}`}
        className={styles.player__image}
      />
      <span className={styles.player__name}>{player.name}</span>
    </div>
  );
};

export default Player;
