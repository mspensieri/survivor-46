import { PlayerKeys, Player } from "./players";

export type Points = {
  teamImmunity?: number;
  individualImmunity?: number;
  advantage?: number;
  idolFound?: number;
  voteNullified?: number;
  placement?: number;
};

export const weeks: Array<Partial<Record<PlayerKeys, Points>>> = [
  {
    [PlayerKeys.BEN]: {
      teamImmunity: 1,
    },
    [PlayerKeys.CHARLIE]: {
      teamImmunity: 1,
    },
    [PlayerKeys.HUNTER]: {
      teamImmunity: 1,
    },
    [PlayerKeys.JEM]: {
      teamImmunity: 1,
    },
    [PlayerKeys.LIZ]: {
      teamImmunity: 1,
    },
    [PlayerKeys.MARIA]: {
      teamImmunity: 1,
      advantage: 1,
    },
    [PlayerKeys.MORIAH]: {
      teamImmunity: 1,
    },
    [PlayerKeys.RANDEN]: {
      teamImmunity: 1,
    },
    [PlayerKeys.SODA]: {
      teamImmunity: 1,
    },
    [PlayerKeys.TEVIN]: {
      teamImmunity: 1,
      advantage: 1,
    },
    [PlayerKeys.TIFFANY]: {
      advantage: 1,
      idolFound: 2,
    },
    [PlayerKeys.TIM]: {
      teamImmunity: 1,
    },
    [PlayerKeys.VENUS]: {
      teamImmunity: 1,
    },
  },
  {
    [PlayerKeys.BEN]: {
      teamImmunity: 1,
    },
    [PlayerKeys.CHARLIE]: {
      teamImmunity: 1,
    },
    [PlayerKeys.HUNTER]: {
      teamImmunity: 1,
    },
    [PlayerKeys.JEM]: {
      teamImmunity: 1,
    },
    [PlayerKeys.LIZ]: {
      teamImmunity: 1,
    },
    [PlayerKeys.MARIA]: {
      teamImmunity: 1,
    },
    [PlayerKeys.MORIAH]: {
      teamImmunity: 1,
    },
    [PlayerKeys.RANDEN]: {
      teamImmunity: 1,
      advantage: 1,
    },
    [PlayerKeys.SODA]: {
      teamImmunity: 1,
    },
    [PlayerKeys.TEVIN]: {
      teamImmunity: 1,
    },
    [PlayerKeys.TIM]: {
      teamImmunity: 1,
    },
    [PlayerKeys.VENUS]: {
      teamImmunity: 1,
    },
  },
  {
    [PlayerKeys.BEN]: {
      teamImmunity: 1,
    },
    [PlayerKeys.CHARLIE]: {
      teamImmunity: 1,
    },
    [PlayerKeys.HUNTER]: {
      teamImmunity: 1,
    },
    [PlayerKeys.JEM]: {
      teamImmunity: 1,
      advantage: 1,
    },
    [PlayerKeys.LIZ]: {
      teamImmunity: 1,
    },
    [PlayerKeys.MARIA]: {
      teamImmunity: 1,
    },
    [PlayerKeys.MORIAH]: {
      teamImmunity: 1,
    },
    [PlayerKeys.RANDEN]: {
      teamImmunity: 1,
    },
    [PlayerKeys.SODA]: {
      teamImmunity: 1,
    },
    [PlayerKeys.TEVIN]: {
      teamImmunity: 1,
    },
    [PlayerKeys.TIM]: {
      teamImmunity: 1,
    },
    [PlayerKeys.VENUS]: {
      teamImmunity: 1,
    },
  },
  {
    [PlayerKeys.BEN]: {
      teamImmunity: 1,
    },
    [PlayerKeys.CHARLIE]: {
      teamImmunity: 1,
    },
    [PlayerKeys.HUNTER]: {
      teamImmunity: 1,
    },
    [PlayerKeys.JEM]: {
      teamImmunity: 1,
    },
    [PlayerKeys.LIZ]: {
      teamImmunity: 1,
    },
    [PlayerKeys.MARIA]: {
      teamImmunity: 1,
    },
    [PlayerKeys.MORIAH]: {
      teamImmunity: 1,
    },
    [PlayerKeys.SODA]: {
      teamImmunity: 1,
    },
    [PlayerKeys.TEVIN]: {
      teamImmunity: 1,
    },
    [PlayerKeys.TIM]: {
      teamImmunity: 1,
    },
    [PlayerKeys.VENUS]: {
      teamImmunity: 1,
    },
  },
  {
    [PlayerKeys.HUNTER]: {
      teamImmunity: 1,
      advantage: 1,
    },
    [PlayerKeys.LIZ]: {
      teamImmunity: 1,
    },
    [PlayerKeys.SODA]: {
      teamImmunity: 1,
    },
    [PlayerKeys.TEVIN]: {
      teamImmunity: 1,
    },
    [PlayerKeys.VENUS]: {
      teamImmunity: 1,
    },
    [PlayerKeys.Q]: {
      teamImmunity: 1,
    },
    [PlayerKeys.TIFFANY]: {
      teamImmunity: 1,
    },
    [PlayerKeys.KENZIE]: {
      teamImmunity: 1,
    },
    [PlayerKeys.JEM]: {
      idolFound: 2,
    },
  },
  {
    [PlayerKeys.HUNTER]: {
      teamImmunity: 1,
      idolFound: 2,
    },
    [PlayerKeys.TIFFANY]: {
      teamImmunity: 1,
    },
    [PlayerKeys.KENZIE]: {
      teamImmunity: 1,
    },
    [PlayerKeys.Q]: {
      teamImmunity: 1,
    },
    [PlayerKeys.TEVIN]: {
      teamImmunity: 1,
    },
    [PlayerKeys.TIM]: {
      teamImmunity: 1,
    },
    [PlayerKeys.BEN]: {
      teamImmunity: 1,
    },
  },
];

export function computePlayerScore(
  player: Player,
  weekNumber: number,
  scoreKey: keyof Points | "total"
) {
  let score = 0;

  for (const week of weeks.slice(0, weekNumber + 1)) {
    if (scoreKey === "total") {
      score +=
        (week[player.key]?.teamImmunity || 0) +
        (week[player.key]?.individualImmunity || 0) +
        (week[player.key]?.advantage || 0) +
        (week[player.key]?.idolFound || 0) +
        (week[player.key]?.voteNullified || 0) +
        (week[player.key]?.placement || 0);
    } else {
      score += week[player.key]?.[scoreKey] || 0;
    }
  }

  return score;
}

export function getPlayerScore(
  player: Player,
  weekNumber: number,
  scoreKey: keyof Points | "total"
) {
  return computePlayerScore(player, weekNumber, scoreKey) || "-";
}
