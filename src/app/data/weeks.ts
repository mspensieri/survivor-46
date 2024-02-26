import { PlayerKeys, Player } from "./players";

export type Points = {
  teamImmunity?: number;
  individualImmunity?: number;
  advantage?: number;
  idolFound?: number;
  idolUsed?: number;
  placement?: number;
};

export const weeks: Array<Partial<Record<PlayerKeys, Points>>> = [
  {
    [PlayerKeys.BEN]: {
      individualImmunity: 3,
    },
    [PlayerKeys.BHANU]: { idolFound: 10 },
  },
  {
    [PlayerKeys.JEM]: {
      teamImmunity: 2,
    },
    [PlayerKeys.KENZIE]: {
      idolUsed: 1,
    },
    [PlayerKeys.CHARLIE]: {
      placement: 3,
    },
    [PlayerKeys.TEVIN]: {
      advantage: 5,
    },
  },
  {
    [PlayerKeys.VENUS]: {
      idolFound: 20,
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
        (week[player.key]?.idolUsed || 0) +
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
