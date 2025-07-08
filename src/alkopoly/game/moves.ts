import type { AlkopolyState } from "../types/GameState";

export const moves = {
  startGame(G: AlkopolyState) {
    G.gameStarted = true;
  },
};
