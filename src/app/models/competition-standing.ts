import { Competition, Filters } from './competition';
import { Team } from './team.interface';

export interface CompetitionStanding {
  filters: Filters;
  competition: Competition;
  season: Season;
  standings: Standing[];
}

export interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: null;
}

export interface Standing {
  stage: string;
  type: string;
  group: null;
  table: Table[];
}

export interface Table {
  position: number;
  team: Team;
  playedGames: number;
  form: null;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}
