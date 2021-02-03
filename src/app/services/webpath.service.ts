import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebpathService {
  // Opciones Menu
  public static MENU = 'assets/data/menu.json';
  // Login
  public static LOGIN = 'login';
  // Home
  public static HOME = 'home';
  // Seleccionar Equipo
  public static SELECTED_TEAM = '/selected-team/';

  // Competiciones
  public static COMPETITIONS = `${environment.apiFootballData}/competitions`;
  // Equipos de una competicion
  public static COMPETITIONS_ID_TEAMS(id: number): string { return `${environment.apiFootballData}/competitions/${id}/teams`; }

  // Estadisticas de la competicion
  public static COMPETITIONS_ID_STANDINGS(id: number): string { return `${environment.apiFootballData}/competitions/${id}/standings`; }
  public static COMPETITIONS_ID_STANDINGS_HOME(id: number): string { return `${environment.apiFootballData}/competitions/${id}/standings?standingType=HOME`; }
  public static COMPETITIONS_ID_STANDINGS_AWAY(id: number): string { return `${environment.apiFootballData}/competitions/${id}/standings?standingType=AWAY`; }
}
