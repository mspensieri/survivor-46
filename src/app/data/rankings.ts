import { Team, teams, computeTeamScore } from "./teams";
import { Player, players } from "./players";
import { weeks, Points, computePlayerScore } from "./weeks";

export type TeamScore = {
  team: Team;
  total: number;
  rank: number;
};

export type PlayerScore = {
  player: Player;
  total: number;
  points: Points;
  rank: number;
};

export type TeamRankings = Array<TeamScore>;
export type PlayerRankings = Array<PlayerScore>;

function getWeeklyTeamRankings(weekNumber: number): TeamRankings {
  const partialRankings = [...teams]
    .map((team) => {
      return {
        team,
        total: computeTeamScore(team, weekNumber),
      };
    })
    .sort((a, b) => {
      return b.total - a.total;
    });

  const rankings: TeamRankings = [
    {
      ...partialRankings[0],
      rank: 0,
    },
  ];

  for (let i = 1; i < partialRankings.length; i++) {
    const curr = partialRankings[i];
    const prev = rankings[i - 1];

    rankings.push({
      ...curr,
      rank: curr.total === prev.total ? prev.rank : prev.rank + 1,
    });
  }

  return rankings;
}

export function getTeamRankings(): Array<TeamRankings> {
  return new Array(weeks.length).fill(undefined).map((_, weekNumber) => {
    return getWeeklyTeamRankings(weekNumber);
  });
}

function getWeeklyPlayerRankings(weekNumber: number): PlayerRankings {
  const partialRankings = [...players]
    .map((player) => {
      return {
        player,
        total: computePlayerScore(player, weekNumber, "total"),
        points: {
          teamImmunity: computePlayerScore(player, weekNumber, "teamImmunity"),
          individualImmunity: computePlayerScore(
            player,
            weekNumber,
            "individualImmunity"
          ),
          advantage: computePlayerScore(player, weekNumber, "advantage"),
          idolFound: computePlayerScore(player, weekNumber, "idolFound"),
          idolUsed: computePlayerScore(player, weekNumber, "idolUsed"),
          placement: computePlayerScore(player, weekNumber, "placement"),
        },
      };
    })
    .sort((a, b) => {
      return b.total - a.total;
    });

  const rankings: PlayerRankings = [
    {
      ...partialRankings[0],
      rank: 0,
    },
  ];

  for (let i = 1; i < partialRankings.length; i++) {
    const curr = partialRankings[i];
    const prev = rankings[i - 1];

    rankings.push({
      ...curr,
      rank: curr.total === prev.total ? prev.rank : prev.rank + 1,
    });
  }

  return rankings;
}

export function getPlayerRankings(): Array<PlayerRankings> {
  return new Array(weeks.length).fill(undefined).map((_, weekNumber) => {
    return getWeeklyPlayerRankings(weekNumber);
  });
}
