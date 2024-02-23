export type Points = {
  teamImmunity?: number;
  individualImmunity?: number;
  advantage?: number;
  idolFound?: number;
  idolUsed?: number;
  placement?: number;
};

export type PlayerStatus = "active" | "eliminated" | "jury" | "winner";

export type Player = {
  name: string;
  status: PlayerStatus;
  weeks: Array<Points>;
};

export const PLAYERS: Record<string, Player> = {
  JEM: {
    name: "Jem",
    status: "active",
    weeks: [
      {},
      {
        teamImmunity: 2,
      },
      {},
    ],
  },
  BEN: {
    name: "Ben",
    status: "eliminated",
    weeks: [
      {
        individualImmunity: 3,
      },
    ],
  },
  JESS: {
    name: "Jess",
    status: "jury",
    weeks: [],
  },
  BHANU: {
    name: "Bhanu",
    status: "winner",
    weeks: [{}, { idolFound: 10 }],
  },
  KENZIE: {
    name: "Kenzie",
    status: "active",
    weeks: [
      {},
      {
        idolUsed: 1,
      },
    ],
  },
  CHARLIE: {
    name: "Charlie",
    status: "active",
    weeks: [
      {},
      {
        placement: 3,
      },
    ],
  },
  LIZ: {
    name: "Liz",
    status: "active",
    weeks: [{}],
  },
  JELINSKY: {
    name: "Jelinsky",
    status: "active",
    weeks: [{}],
  },
  MARIA: {
    name: "Maria",
    status: "active",
    weeks: [{}],
  },
  HUNTER: {
    name: "Hunter",
    status: "active",
    weeks: [{}],
  },
  MORIAH: {
    name: "Moriah",
    status: "active",
    weeks: [{}, {}],
  },
  Q: {
    name: "Q",
    status: "active",
    weeks: [{}],
  },
  SODA: {
    name: "Soda",
    status: "active",
    weeks: [{}],
  },
  RANDEN: {
    name: "Randen",
    status: "active",
    weeks: [{}],
  },
  TIFFANY: {
    name: "Tiffany",
    status: "active",
    weeks: [{}],
  },
  TEVIN: {
    name: "Tevin",
    status: "active",
    weeks: [
      {
        advantage: 5,
      },
    ],
  },
  VENUS: {
    name: "Venus",
    status: "active",
    weeks: [
      {},
      {},
      {
        idolFound: 20,
      },
    ],
  },
  TIM: {
    name: "Tim",
    status: "active",
    weeks: [{}],
  },
};

export const players: Array<Player> = Object.values(PLAYERS);

export function computePlayerScore(
  player: Player,
  weekNumber: number,
  scoreKey: keyof Points | "total"
) {
  let score = 0;

  for (const week of player.weeks.slice(0, weekNumber)) {
    if (scoreKey === "total") {
      score +=
        (week.teamImmunity || 0) +
        (week.individualImmunity || 0) +
        (week.advantage || 0) +
        (week.idolFound || 0) +
        (week.idolUsed || 0) +
        (week.placement || 0);
    } else {
      score += week[scoreKey] || 0;
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
