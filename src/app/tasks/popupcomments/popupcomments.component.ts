import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TaskComment} from '../../models/tasks/taskComment';
import {User} from '../../models/user/user';
import { AppService } from '../../app.service';
import {Task} from '../../models/tasks/task';

@Component({
  selector: 'app-popupcomments',
  templateUrl: './popupcomments.component.html',
  styleUrls: ['./popupcomments.component.scss']
})
export class PopupcommentsComponent implements OnInit, OnChanges {

  @Input() taskCommentsMessage: any;
  @Input() taskIdMessage: string;

  public taskCommentsList: any;
  public taskCommentVal: string;
  public loggedUserName: string;
  public taskComment: TaskComment;
  public user: User;
  p: any;

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this.loggedUserName = 'Sandeep Thammadi';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.taskCommentsMessage);
    this.taskCommentsList = this.taskCommentsMessage;
  }

  onCommentSubmit() {

    this.taskComment = new TaskComment();
    this.user = new User();

    this.taskComment.type = 'task';
    this.user.id = '1';
    this.user.fullName = this.loggedUserName;
    this.user.avatar = '';

    this.taskComment.user = this.user;
    this.taskComment.timestamp = '2019/01/19';
    this.taskComment.comment = this.taskComment.toString();

    console.log(this.taskCommentVal);

    let taskIdMsg = this.taskIdMessage;
    let _self = this;

    this._appService.postCommentByUserToTask(taskIdMsg, this.taskComment).subscribe(
      res => {
        console.log(res);
        _self._appService.getCommentsForTask(taskIdMsg).subscribe(
          resMsgs => {
            console.log('Task Comments Result: ');
            console.log(resMsgs);
            _self.taskCommentsList = resMsgs;
            _self.taskComment.comment = '';
          }
        );
      }
    );
  }

}
