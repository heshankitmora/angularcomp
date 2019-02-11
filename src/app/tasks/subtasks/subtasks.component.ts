import {Component, Input, OnInit} from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-subtasks',
  templateUrl: './subtasks.component.html',
  styleUrls: ['./subtasks.component.scss']
})
export class SubtasksComponent implements OnInit {

  @Input() subTasksList: any;
  @Input() taskIdSub: string;

  subTasksArray: any;
  assignedUserData: any;
  assignUser: string;
  allUsers: any;

  constructor(private _appService: AppService) {
    this._appService.getAllUsers().subscribe(
      res => {
        this.allUsers = res;
      }
    );
  }

  ngOnInit() {
    console.log(this.subTasksList);
    this.subTasksArray = this.subTasksList;
  }

}
