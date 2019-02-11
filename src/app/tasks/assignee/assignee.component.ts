import {Component, Input, OnInit} from '@angular/core';
import { AppService } from '../../app.service';
import {User} from '../../models/user/user';

@Component({
  selector: 'app-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.scss']
})
export class AssigneeComponent implements OnInit {

  @Input() taskIdAssignee: string;
  @Input() taskAssigneeUser: string;

  assignUser: string;
  allUsers: any;
  assignedUserData: User;

  constructor(private _appService: AppService) {
    this._appService.getAllUsers().subscribe(
      res => {
        this.allUsers = res;
        this.filterAssignedUser(res);
      }
    );
  }

  filterAssignedUser(allUsers: any) {
    this.assignedUserData = allUsers.filter((item) => (item.id == this.taskAssigneeUser));
    this.assignUser = this.assignedUserData[0].fullName;
  }

  ngOnInit() {
  }

}
