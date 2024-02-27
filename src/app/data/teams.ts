import { Player, PLAYERS } from "./players";
import { computePlayerScore } from "./weeks";

export type Team = {
  name: string;
  winner: Player;
  players: Array<Player>;
};

export const teams: Array<Team> = [
  {
    name: "First Time in Fiji",
    winner: PLAYERS.MORIAH,
    players: [
      PLAYERS.MORIAH,
      PLAYERS.JESS,
      PLAYERS.BHANU,
      PLAYERS.CHARLIE,
      PLAYERS.RANDEN,
      PLAYERS.TEVIN,
    ],
  },
  {
    name: "Momma J",
    winner: PLAYERS.TIM,
    players: [
      PLAYERS.TIM,
      PLAYERS.MORIAH,
      PLAYERS.BEN,
      PLAYERS.VENUS,
      PLAYERS.BHANU,
      PLAYERS.JESS,
    ],
  },
  {
    name: "Sandy's Spynest",
    winner: PLAYERS.MORIAH,
    players: [
      PLAYERS.MORIAH,
      PLAYERS.TEVIN,
      PLAYERS.KENZIE,
      PLAYERS.BEN,
      PLAYERS.HUNTER,
      PLAYERS.TIFFANY,
    ],
  },
  {
    name: "4BlackCats",
    winner: PLAYERS.VENUS,
    players: [
      PLAYERS.VENUS,
      PLAYERS.JESS,
      PLAYERS.CHARLIE,
      PLAYERS.HUNTER,
      PLAYERS.KENZIE,
      PLAYERS.JEM,
    ],
  },
  {
    name: "Leafs Nation",
    winner: PLAYERS.HUNTER,
    players: [
      PLAYERS.HUNTER,
      PLAYERS.LIZ,
      PLAYERS.VENUS,
      PLAYERS.CHARLIE,
      PLAYERS.JELINSKY,
      PLAYERS.KENZIE,
    ],
  },
  {
    name: "Wendy's Chickens",
    winner: PLAYERS.TIFFANY,
    players: [
      PLAYERS.TIFFANY,
      PLAYERS.JEM,
      PLAYERS.JELINSKY,
      PLAYERS.MORIAH,
      PLAYERS.SODA,
      PLAYERS.TEVIN,
    ],
  },
  {
    name: "Dean's M List (Money Team)",
    winner: PLAYERS.MARIA,
    players: [
      PLAYERS.MARIA,
      PLAYERS.MORIAH,
      PLAYERS.Q,
      PLAYERS.RANDEN,
      PLAYERS.SODA,
      PLAYERS.TEVIN,
    ],
  },
  {
    name: "Hang in there, Jeremy!",
    winner: PLAYERS.SODA,
    players: [
      PLAYERS.SODA,
      PLAYERS.Q,
      PLAYERS.TEVIN,
      PLAYERS.TIFFANY,
      PLAYERS.MORIAH,
      PLAYERS.TIM,
    ],
  },
  {
    name: "Challenge Beasts",
    winner: PLAYERS.HUNTER,
    players: [
      PLAYERS.HUNTER,
      PLAYERS.BEN,
      PLAYERS.JESS,
      PLAYERS.KENZIE,
      PLAYERS.TEVIN,
      PLAYERS.TIFFANY,
    ],
  },
];

export function computeTeamScore(team: Team, weekNumber: number) {
  let score = 0;

  for (const player of team.players) {
    score += computePlayerScore(player, weekNumber, "total");
  }

  return score;
}

export function getTeamScore(team: Team, weekNumber: number) {
  return computeTeamScore(team, weekNumber) || "-";
}
