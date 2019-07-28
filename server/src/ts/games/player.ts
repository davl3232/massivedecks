import * as user from "../user";
import { Hand } from "./cards/hand";
import { Game } from "./game";

/**
 * A player in the game.
 */
export interface Player {
  hand: Hand;
  score: Score;
}

/**
 * A player containing only state all users can see.
 */
export interface Public {
  score: Score;
}

/**
 * The role the player currently has in the game.
 */
export type Role = "Czar" | "Player";

/**
 * How many points the player has scored.
 * @TJS-type integer
 * @minimum 0
 */
export type Score = number;

/**
 * Produce a public version of the given player.
 */
export const censor = (player: Player): Public => ({
  score: player.score
});

/**
 * Get the given player's role in the game.
 * @param game The game.
 * @param player The player's id.
 */
export const role = (game: Game, player: user.Id): Role =>
  game.round.czar === player ? "Czar" : "Player";