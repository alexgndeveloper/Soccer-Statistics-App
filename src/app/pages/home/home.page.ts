import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';
import { WebpathService } from 'src/app/services/webpath.service';

import { OptionMenu } from 'src/app/models/option-menu.interface';
import { Competition, CompetitionList } from 'src/app/models/competition';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public optionsMenu: OptionMenu[] = [];

  constructor(
    private httpSrv: HttpService,
    public authSrv: AuthService
  ) { }

  ngOnInit() {
    // Cargo el menu
    this.httpSrv.getHttpClient(WebpathService.MENU, (responseOptionsMenu: OptionMenu[]) => {
      this.optionsMenu = responseOptionsMenu;
    }, false);
  }

}
