import type { PlayerProps } from "./GameState";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface JoinModalProps {
  joined: boolean;
  setJoined: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface LobbyProps {
  joined: boolean; // display lobby when joined
  players: PlayerProps[];
}
