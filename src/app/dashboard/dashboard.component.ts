import { Component, OnInit } from '@angular/core';
import { AppTopbarService } from '../app.topbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashBoardTitle: string;
  dashBoardAttr: string;

  constructor(private _appTopBarService: AppTopbarService) { }

  ngOnInit() {
    this.dashBoardTitle = 'Dashboard';
    this.dashBoardAttr = 'dashboard';
    this._appTopBarService.changeHeaderTitle(this.dashBoardTitle, this.dashBoardAttr);
  }

}
