import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from 'src/app/services/http.service';
import { WebpathService } from 'src/app/services/webpath.service';

import { Team } from 'src/app/models/team.interface';
import { CompetitionStanding, Table } from 'src/app/models/competition-standing';

@Component({
  selector: 'app-selected-team',
  templateUrl: './selected-team.page.html',
  styleUrls: ['./selected-team.page.scss'],
})
export class SelectedTeamPage implements OnInit {

  public teams: Team[] = [];
  public competitionStanding: Table[] = [];
  public competitionStandingHome: Table[] = [];
  public competitionStandingAway: Table[] = [];
  public teamStanding: Table;
  public teamStandingHome: Table;
  public teamStandingAway: Table;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpSrv: HttpService
  ) { }

  ngOnInit() {
    const competitionId = +this.activatedRoute.snapshot.paramMap.get('competitionId');

    this.httpSrv.getHttpClient(WebpathService.COMPETITIONS_ID_TEAMS(competitionId), (res) => {
      this.teams = res.teams;
    }, false);

    this.httpSrv.getHttpClient(WebpathService.COMPETITIONS_ID_STANDINGS(competitionId), (res: CompetitionStanding) => {
      this.competitionStanding = res.standings[0].table;

      console.log('TOTAL', this.competitionStanding);

    }, false);

    this.httpSrv.getHttpClient(WebpathService.COMPETITIONS_ID_STANDINGS_HOME(competitionId), (res: CompetitionStanding) => {
      this.competitionStandingHome = res.standings[0].table;

      console.log('HOME', this.competitionStandingHome);

    }, false);

    this.httpSrv.getHttpClient(WebpathService.COMPETITIONS_ID_STANDINGS_AWAY(competitionId), (res: CompetitionStanding) => {
      this.competitionStandingAway = res.standings[0].table;

      console.log('AWAY', this.competitionStandingAway);

    }, false);
  }

  selectedTeam(event) {
    this.competitionStanding.forEach((element: Table) => {
      if (element.team.id === event.detail.value) {
        this.teamStanding = element;
      }
    });

    this.competitionStandingHome.forEach((element: Table) => {
      if (element.team.id === event.detail.value) {
        this.teamStandingHome = element;
      }
    });

    this.competitionStandingAway.forEach((element: Table) => {
      if (element.team.id === event.detail.value) {
        this.teamStandingAway = element;
      }
    });
  }

}
