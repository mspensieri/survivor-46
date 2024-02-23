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
    name: 'Jemila "Jem" Hussain-Adams',
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
    name: "Ben Katzman",
    status: "eliminated",
    weeks: [
      {
        individualImmunity: 3,
      },
    ],
  },
  JESS: {
    name: 'Jessica "Jess" Chong',
    status: "jury",
    weeks: [
      {
        advantage: 5,
      },
    ],
  },
  BHANU: {
    name: "Bhanu Gopal",
    status: "winner",
    weeks: [{}, { idolFound: 10 }],
  },
  KENZIE: {
    name: "Kenzie Petty",
    status: "active",
    weeks: [
      {},
      {
        idolUsed: 1,
      },
    ],
  },
  CHARLIE: {
    name: "Charlie Davis",
    status: "active",
    weeks: [
      {},
      {
        placement: 3,
      },
    ],
  },
  LIZ: {
    name: "Liz Wilcox",
    status: "active",
    weeks: [{}],
  },
  JELINSKY: {
    name: 'David "Jelinsky" Jelinsky',
    status: "active",
    weeks: [{}],
  },
  MARIA: {
    name: "Maria Shrime Gonzalez",
    status: "active",
    weeks: [{}],
  },
  HUNTER: {
    name: "Hunter McKnight",
    status: "active",
    weeks: [{}],
  },
  MORIAH: {
    name: "Moriah Gaynor",
    status: "active",
    weeks: [{}, {}],
  },
  Q: {
    name: "Q Burdette",
    status: "active",
    weeks: [{}],
  },
  SODA: {
    name: "Soda Thompson",
    status: "active",
    weeks: [{}],
  },
  RANDEN: {
    name: "Randen Montalvo",
    status: "active",
    weeks: [{}],
  },
  TIFFANY: {
    name: "Tiffany Nicole Ervin",
    status: "active",
    weeks: [{}],
  },
  TEVIN: {
    name: "Tevin Davis",
    status: "active",
    weeks: [{}],
  },
  VENUS: {
    name: "Venus Vafa",
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
    name: "Tim Spicer",
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
