import styles from "../styles/Board.module.css";
import type { BoardProps } from "../types/BoardProps";
import Tile from "./Tile";

const Board = ({ tiles }: BoardProps) => {
  return (
    <div className={styles.board}>
      {tiles.map((tile) => (
        <div key={tile.id}>
          <Tile tile={tile} />
        </div>
      ))}
    </div>
  );
};

export default Board;
