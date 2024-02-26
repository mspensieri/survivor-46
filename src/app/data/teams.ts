import { Player, PLAYERS } from "./players";
import { computePlayerScore } from "./weeks";

export type Team = {
  name: string;
  players: Array<Player>;
};

export const teams: Array<Team> = [
  {
    name: "First Time in Fiji",
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
    name: "Survivor Vanguard",
    players: [
      PLAYERS.MORIAH,
      PLAYERS.JESS,
      PLAYERS.JEM,
      PLAYERS.CHARLIE,
      PLAYERS.HUNTER,
      PLAYERS.VENUS,
    ],
  },
  {
    name: "Survivor Vanguard2",
    players: [
      PLAYERS.MORIAH,
      PLAYERS.JESS,
      PLAYERS.JEM,
      PLAYERS.CHARLIE,
      PLAYERS.HUNTER,
      PLAYERS.VENUS,
    ],
  },
  {
    name: "Survivor Vanguard3",
    players: [
      PLAYERS.MORIAH,
      PLAYERS.JESS,
      PLAYERS.JEM,
      PLAYERS.CHARLIE,
      PLAYERS.HUNTER,
      PLAYERS.VENUS,
    ],
  },
  {
    name: "Survivor Vanguard4",
    players: [
      PLAYERS.MORIAH,
      PLAYERS.JESS,
      PLAYERS.JEM,
      PLAYERS.CHARLIE,
      PLAYERS.HUNTER,
      PLAYERS.VENUS,
    ],
  },
  {
    name: "Survivor Vanguard5",
    players: [
      PLAYERS.MORIAH,
      PLAYERS.JESS,
      PLAYERS.JEM,
      PLAYERS.CHARLIE,
      PLAYERS.HUNTER,
      PLAYERS.VENUS,
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
