export type Points = {
  teamImmunity: number;
  individualImmunity: number;
  advantage: number;
  idolFound: number;
  idolUsed: number;
  placement: number;
};

export type Player = {
  name: string;
  weeks: Array<Points>;
};

export const PLAYERS: Record<string, Player> = {
  JEM: {
    name: 'Jemila "Jem" Hussain-Adams',
    weeks: [
      {
        teamImmunity: 0,
        individualImmunity: 0,
        advantage: 0,
        idolFound: 0,
        idolUsed: 0,
        placement: 0,
      },
    ],
  },
  BEN: {
    name: "Ben Katzman",
    weeks: [
      {
        teamImmunity: 0,
        individualImmunity: 0,
        advantage: 0,
        idolFound: 0,
        idolUsed: 0,
        placement: 0,
      },
    ],
  },
  JESS: {
    name: 'Jessica "Jess" Chong',
    weeks: [
      {
        teamImmunity: 0,
        individualImmunity: 0,
        advantage: 0,
        idolFound: 0,
        idolUsed: 0,
        placement: 0,
      },
    ],
  },
  BHANU: {
    name: "Bhanu Gopal",
    weeks: [
      {
        teamImmunity: 0,
        individualImmunity: 0,
        advantage: 0,
        idolFound: 0,
        idolUsed: 0,
        placement: 0,
      },
    ],
  },
  KENZIE: {
    name: "Kenzie Petty",
    weeks: [
      {
        teamImmunity: 0,
        individualImmunity: 0,
        advantage: 0,
        idolFound: 0,
        idolUsed: 0,
        placement: 0,
      },
    ],
  },
  CHARLIE: {
    name: "Charlie Davis",
    weeks: [
      {
        teamImmunity: 0,
        individualImmunity: 0,
        advantage: 0,
        idolFound: 0,
        idolUsed: 0,
        placement: 0,
      },
    ],
  },
  LIZ: {
    name: "Liz Wilcox",
    weeks: [
      {
        teamImmunity: 0,
        individualImmunity: 0,
        advantage: 0,
        idolFound: 0,
        idolUsed: 0,
        placement: 0,
      },
    ],
  },
  JELINSKY: {
    name: 'David "Jelinsky" Jelinsky',
    weeks: [
      {
        teamImmunity: 0,
        individualImmunity: 0,
        advantage: 0,
        idolFound: 0,
        idolUsed: 0,
        placement: 0,
      },
    ],
  },
  MARIA: {
    name: "Maria Shrime Gonzalez",
    weeks: [
      {
        teamImmunity: 0,
        individualImmunity: 0,
        advantage: 0,
        idolFound: 0,
        idolUsed: 0,
        placement: 0,
      },
    ],
  },
  HUNTER: {
    name: "Hunter McKnight",
    weeks: [
      {
        teamImmunity: 0,
        individualImmunity: 0,
        advantage: 0,
        idolFound: 0,
        idolUsed: 0,
        placement: 0,
      },
    ],
  },
  MORIAH: {
    name: "Moriah Gaynor",
    weeks: [
      {
        teamImmunity: 0,
        individualImmunity: 0,
        advantage: 0,
        idolFound: 0,
        idolUsed: 0,
        placement: 0,
      },
    ],
  },
  Q: {
    name: "Q Burdette",
    weeks: [
      {
        teamImmunity: 0,
        individualImmunity: 0,
        advantage: 0,
        idolFound: 0,
        idolUsed: 0,
        placement: 0,
      },
    ],
  },
  SODA: {
    name: "Soda Thompson",
    weeks: [
      {
        teamImmunity: 0,
        individualImmunity: 0,
        advantage: 0,
        idolFound: 0,
        idolUsed: 0,
        placement: 0,
      },
    ],
  },
  RANDEN: {
    name: "Randen Montalvo",
    weeks: [
      {
        teamImmunity: 0,
        individualImmunity: 0,
        advantage: 0,
        idolFound: 0,
        idolUsed: 0,
        placement: 0,
      },
    ],
  },
  TIFFANY: {
    name: "Tiffany Nicole Ervin",
    weeks: [
      {
        teamImmunity: 0,
        individualImmunity: 0,
        advantage: 0,
        idolFound: 0,
        idolUsed: 0,
        placement: 0,
      },
    ],
  },
  TEVIN: {
    name: "Tevin Davis",
    weeks: [
      {
        teamImmunity: 0,
        individualImmunity: 0,
        advantage: 0,
        idolFound: 0,
        idolUsed: 0,
        placement: 0,
      },
    ],
  },
  VENUS: {
    name: "Venus Vafa",
    weeks: [
      {
        teamImmunity: 0,
        individualImmunity: 0,
        advantage: 0,
        idolFound: 0,
        idolUsed: 0,
        placement: 0,
      },
    ],
  },
  TIM: {
    name: "Tim Spicer",
    weeks: [
      {
        teamImmunity: 0,
        individualImmunity: 0,
        advantage: 0,
        idolFound: 0,
        idolUsed: 0,
        placement: 0,
      },
    ],
  },
};

export const players: Array<Player> = Object.values(PLAYERS);

export function computePlayerScore(player: Player) {
  let score = 0;
  for (const week of player.weeks) {
    score +=
      week.teamImmunity +
      week.individualImmunity +
      week.advantage +
      week.idolFound +
      week.idolUsed +
      week.placement;
  }

  return score;
}
