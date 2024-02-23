import { Player, PLAYERS, computePlayerScore } from "./players";

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
];

export function computeTeamScore(team: Team, weekNumber: number) {
  let score = 0;

  for (const player of team.players) {
    score += computePlayerScore(player, weekNumber, "total");
  }

  return score;
}
