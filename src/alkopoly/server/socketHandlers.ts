import type { Socket } from "socket.io";
import type { Pawn } from "../../common/types/GameState";
import { addAlkopolyPlayer, alkopolyState } from "./gameState";

export const handleAlkopolySocket = (socket: Socket) => {
  socket.on("joinGame", ({ name, pawn }: { name: string; pawn: Pawn }) => {
    addAlkopolyPlayer(socket.id, name, pawn);
    console.log(`🟢 ${name} joined Alkopoly!`);

    socket.emit("gameState", alkopolyState);

    socket.broadcast.emit("playerJoined", { id: socket.id, name, pawn });
  });

  socket.on("disconnect", () => {
    console.log(`🔴 ${socket.id} eliminated`);
    delete alkopolyState.players[socket.id];
  });
};
