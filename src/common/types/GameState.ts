export interface GameState {
  players: PlayerProps[];
  currentPlayer: PlayerProps;
  gameStarted: boolean;
}

export interface PlayerProps {
  id: number;
  name: string;
  pawn: Pawn;
}

export interface Pawn {
  name: string;
  imageSrc: string;
}
