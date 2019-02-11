import {Component, OnInit, ViewChild} from '@angular/core';
import { TasksComponent } from '../../tasks/tasks.component';
import {ModalComponent} from 'angular-custom-modal';
import { AppTopbarService } from '../../app.topbar.service';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.scss']
})
export class TopheaderComponent implements OnInit {

  tasksManagementVisible: boolean;
  titleMessage: string;
  titleAttr: string;

  constructor(private _appTopServiceBar: AppTopbarService) {
  }

  ngOnInit() {
    this._appTopServiceBar.headerTitle.subscribe(titleMessage => this.titleMessage = titleMessage);
    this._appTopServiceBar.attrTitle.subscribe(titleAttr => this.titleAttr = titleAttr);
  }

}
