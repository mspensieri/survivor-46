export type PlayerStatus = "active" | "eliminated" | "jury" | "winner";

export enum PlayerKeys {
  JEM = "JEM",
  BEN = "BEN",
  JESS = "JESS",
  BHANU = "BHANU",
  KENZIE = "KENZIE",
  CHARLIE = "CHARLIE",
  LIZ = "LIZ",
  JELINSKY = "JELINSKY",
  MARIA = "MARIA",
  HUNTER = "HUNTER",
  MORIAH = "MORIAH",
  Q = "Q",
  SODA = "SODA",
  RANDEN = "RANDEN",
  TIFFANY = "TIFFANY",
  TEVIN = "TEVIN",
  VENUS = "VENUS",
  TIM = "TIM",
}

export type Player = {
  key: PlayerKeys;
  name: string;
  status: PlayerStatus;
};

export const PLAYERS: Record<PlayerKeys, Player> = {
  [PlayerKeys.JEM]: {
    key: PlayerKeys.JEM,
    name: "Jem",
    status: "active",
  },
  [PlayerKeys.BEN]: {
    key: PlayerKeys.BEN,
    name: "Ben",
    status: "eliminated",
  },
  [PlayerKeys.JESS]: {
    key: PlayerKeys.JESS,
    name: "Jess",
    status: "jury",
  },
  [PlayerKeys.BHANU]: {
    key: PlayerKeys.BHANU,
    name: "Bhanu",
    status: "winner",
  },
  [PlayerKeys.KENZIE]: {
    key: PlayerKeys.KENZIE,
    name: "Kenzie",
    status: "active",
  },
  [PlayerKeys.CHARLIE]: {
    key: PlayerKeys.CHARLIE,
    name: "Charlie",
    status: "active",
  },
  [PlayerKeys.LIZ]: {
    key: PlayerKeys.LIZ,
    name: "Liz",
    status: "active",
  },
  [PlayerKeys.JELINSKY]: {
    key: PlayerKeys.JELINSKY,
    name: "Jelinsky",
    status: "active",
  },
  [PlayerKeys.MARIA]: {
    key: PlayerKeys.MARIA,
    name: "Maria",
    status: "active",
  },
  [PlayerKeys.HUNTER]: {
    key: PlayerKeys.HUNTER,
    name: "Hunter",
    status: "active",
  },
  [PlayerKeys.MORIAH]: {
    key: PlayerKeys.MORIAH,
    name: "Moriah",
    status: "active",
  },
  [PlayerKeys.Q]: {
    key: PlayerKeys.Q,
    name: "Q",
    status: "active",
  },
  [PlayerKeys.SODA]: {
    key: PlayerKeys.SODA,
    name: "Soda",
    status: "active",
  },
  [PlayerKeys.RANDEN]: {
    key: PlayerKeys.RANDEN,
    name: "Randen",
    status: "active",
  },
  [PlayerKeys.TIFFANY]: {
    key: PlayerKeys.TIFFANY,
    name: "Tiffany",
    status: "active",
  },
  [PlayerKeys.TEVIN]: {
    key: PlayerKeys.TEVIN,
    name: "Tevin",
    status: "active",
  },
  [PlayerKeys.VENUS]: {
    key: PlayerKeys.VENUS,
    name: "Venus",
    status: "active",
  },
  [PlayerKeys.TIM]: {
    key: PlayerKeys.TIM,
    name: "Tim",
    status: "active",
  },
};

export const players: Array<Player> = Object.values(PLAYERS);
