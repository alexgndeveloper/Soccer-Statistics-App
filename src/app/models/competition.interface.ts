export interface CompetitionList {
  count: number;
  filters: Filters;
  competitions: Competition[];
}

export interface Competition {
  id: number;
  area: Area;
  name: string;
  code: null | string;
  emblemUrl: null | string;
  plan: Plan;
  currentSeason: CurrentSeason | null;
  numberOfAvailableSeasons: number;
  lastUpdated: string;
}

export interface Area {
  id: number;
  name: string;
  countryCode: string;
  ensignUrl: null | string;
}

export interface CurrentSeason {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number | null;
  winner: Winner | null;
}

export interface Winner {
  id: number;
  name: string;
  shortName: null | string;
  tla: null | string;
  crestUrl: null | string;
}

export enum Plan {
  TierFour = 'TIER_FOUR',
  TierOne = 'TIER_ONE',
  TierThree = 'TIER_THREE',
  TierTwo = 'TIER_TWO',
}

export interface Filters {
}
