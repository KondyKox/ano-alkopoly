import type { Pawn } from "../../common/types/GameState";
import type { AlkopolyPlayer, AlkopolyState } from "../types/GameState";
import { generateTiles } from "../utils/generateTiles";

export const alkopolyState: AlkopolyState = {
  players: {},
  currentPlayerId: "",
  gameStarted: false,
  tiles: generateTiles(),
};

export const addAlkopolyPlayer = (id: string, name: string, pawn: Pawn) => {
  if (alkopolyState.players[id]) return; // exists

  const newPlayer: AlkopolyPlayer = {
    id,
    name,
    pawn,
    money: 2000,
    properties: [],
    position: 0,
    jailed: false,
  };

  alkopolyState.players[id] = newPlayer;

  if (!alkopolyState.currentPlayerId) alkopolyState.currentPlayerId = id;
};
