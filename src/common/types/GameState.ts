export interface GameState<P extends PlayerProps = PlayerProps> {
  players: Record<string, P>;
  currentPlayerId: string;
  gameStarted: boolean;
}

export interface PlayerProps {
  id: string;
  name: string;
  pawn: Pawn;
}

export interface Pawn {
  name: string;
  imageSrc: string;
}
