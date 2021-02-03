import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';
import { WebpathService } from 'src/app/services/webpath.service';

import { Competition, CompetitionList } from 'src/app/models/competition.interface';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.page.html',
  styleUrls: ['./competition.page.scss'],
})
export class CompetitionPage implements OnInit {

  public competitions: Competition[] = [];
  public competitionsBackup: Competition[] = [];
  public textFind = '';

  constructor(private httpSrv: HttpService) { }

  ngOnInit() {
    this.httpSrv.getHttpClient(WebpathService.COMPETITIONS, (competitionList: CompetitionList) => {
      this.competitions = competitionList.competitions;
      this.competitionsBackup = competitionList.competitions;
    }, true, true);
  }

  filterList(event: any) {
    this.competitions = this.competitionsBackup;
    const searchTerm = event.detail.value;

    if (!searchTerm) {
      return;
    }

    this.competitions = this.competitions.filter(item => {
      if (item.name && searchTerm) {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.area.name.toLowerCase().includes(searchTerm.toLowerCase());
      }
    });
  }

}