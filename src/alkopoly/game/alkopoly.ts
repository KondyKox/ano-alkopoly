import type { AlkopolyPlayer, AlkopolyState } from "../types/GameState";
import { generateTiles } from "../utils/generateTiles";

export const setup = (): AlkopolyState => {
  const tiles = generateTiles();

  const players: Record<string, AlkopolyPlayer> = {
    "0": {
      id: "0",
      name: "Kondy",
      position: 0,
      money: 1500,
      jailed: false,
      properties: [],
      pawn: {
        name: "Pionek 1",
        imageSrc: "./pawns/rudy_chuj.png",
      },
    },
    "1": {
      id: "1",
      name: "Ziomek",
      position: 0,
      money: 1500,
      jailed: false,
      properties: [],
      pawn: {
        name: "Pionek 1",
        imageSrc: "./pawns/rudy_chuj.png",
      },
    },
  };

  return {
    tiles,
    players,
    currentPlayerId: "0",
    gameStarted: true,
  };
};
