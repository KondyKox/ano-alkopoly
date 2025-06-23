import type { TileProps } from "../types/TileProps";
import styles from "../styles/Board.module.css";

const Tile = ({ tile }: { tile: TileProps }) => {
  return (
    <div
      className={styles.tile}
      style={{ backgroundImage: `url("/alkopoly/${tile.imageSrc}")` }}
    >
      <h6 className={styles.tile__header}>{tile.name}</h6>
      <div className={styles.tile__info}>
        {tile.price && !tile.owner && (
          <>
            <span className={styles.tile__price}>{tile.price}</span>
            zł
          </>
        )}
        {tile.tax && tile.owner && (
          <>
            <span className={styles.tax}>{tile.tax}zł</span>
            zł
          </>
        )}
      </div>
    </div>
  );
};

export default Tile;
