import {Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform, ViewChild} from '@angular/core';

import { AppService } from '../app.service';
import { AppTopbarService } from '../app.topbar.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { ModalComponent } from 'angular-custom-modal';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasksList;
  public cacheTasksList;
  collection: any[] = this.tasksList;
  p: any;

  @ViewChild('modalTaskComments') modalTaskComments: ModalComponent;
  @ViewChild('modalDeleteTask') modalDeleteTask: ModalComponent;
  @ViewChild('modalTaskAssignee') modalTaskAssignee: ModalComponent;
  @ViewChild('modalSubTasks') modalSubTasks: ModalComponent;
  @ViewChild('modalTaskAttachments') modalTaskAttachments: ModalComponent;

  deleteTaskId: string;
  taskHeaderTitle: string;
  taskHeaderAttr: string;

  taskIdDel: string;

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };

  public startDateTask: string;
  public endDateTask: string;
  public startDate: string;
  public endDate: string;
  testVal: string;
  public taskStatus: string;
  public taskComments: any;
  public taskCommentTitle: string;
  public taskCommentDelTitle: string;
  public taskId: string;
  taskIdSub: string;

  subTaskListAll: any;
  subTasksList: any;

  assigneeTaskId: string;
  userAssignTask: string;

  taskAttachmentsAll: any;
  taskIdAttach: string;

  constructor(private _appService: AppService, private _loadingSpinner: NgxSpinnerService, private _appTopBarService: AppTopbarService) {
    _loadingSpinner.show();
    this.getAllTasksService();
  }

  getAllTasksService() {
    this._appService.getAllTasks().subscribe(
      res => {
        this.tasksList = res;
        this.cacheTasksList = this.tasksList;
        this._loadingSpinner.hide();
      }
    );
  }

  openTaskComments(taskId: number, taskName: string) {
    this.taskCommentTitle = taskName;
    this._appService.getCommentsForTask(taskId).subscribe(
      res => {
        console.log('Task Comments Result: ' + res);
        this.taskComments = res;
        this.taskId = taskId.toString();
      }
    );
    this.modalTaskComments.open();
  }

  viewSubTasks(taskTitle: string, subTasks: any, taskId: string) {
    this.taskIdSub = taskId;
    this.subTaskListAll = subTasks;
    this.taskCommentTitle = taskTitle;
    this.subTasksList = subTasks;
    this.modalSubTasks.open();
  }

  viewAttachments(taskTitle: string, attachments: any, taskId: string) {
    this.assigneeTaskId = taskId;
    this.taskAttachmentsAll = attachments;
    this.taskCommentTitle = taskTitle;
    this.modalTaskAttachments.open();
  }

  viewTaskAssignees(taskId: number, assignee: string, taskTitle: string) {
    this.assigneeTaskId = taskId.toString();
    this.userAssignTask = assignee;
    this.taskCommentTitle = taskTitle;
    this.modalTaskAssignee.open();
  }

  deleteTaskConfirmation(taskId: number, taskName: string) {
    this.deleteTaskId = taskId.toString();
    this.taskCommentDelTitle = taskName;
    this.modalDeleteTask.open();
  }

  deleteTaskConfirm() {
    console.log('delete click');
    this._appService.deleteTask(this.deleteTaskId).subscribe(
      res => {
        console.log('Delete Task Response: ' + res);
        if (res) {
          this.getAllTasksService();
          this.modalDeleteTask.close();
        }
      }
    );
  }

  cancelDeleteConfirm() {
    this.modalDeleteTask.close();
  }

  onEndDateChanged(event: IMyDateModel) {
    this.endDateTask = event.formatted;
  }

  onStartDateChanged(event: IMyDateModel) {
    this.startDateTask = event.formatted;
  }

  resetFilterClick($event) {
    $event.stopPropagation();
    this.taskStatus = '';
    this.startDate = '';
    this.endDate = '';
    this.tasksList = this.cacheTasksList;
  }

  taskFilterClick($event) {
    $event.stopPropagation();
    let endDate = Date.parse(this.endDateTask);
    let startDate = Date.parse(this.startDateTask);
    let taskListArr = this.tasksList;

    if (this.taskStatus) {
      if (!Number.isNaN(startDate) && !Number.isNaN(endDate)) {
        this.tasksList = this.cacheTasksList.filter((item) => ((Date.parse(item.created) <= endDate) && (Date.parse(item.created) >= startDate) && (item.status == this.taskStatus)));
      } else if (Number.isNaN(startDate) && Number.isNaN(endDate)) {
        this.tasksList = this.cacheTasksList.filter((item) => ((item.status == this.taskStatus)));
      } else if (Number.isNaN(startDate)) {
        this.tasksList = this.cacheTasksList.filter((item) => (Date.parse(item.created) <= endDate) && (item.status == this.taskStatus));
      } else if (Number.isNaN(endDate)) {
        this.tasksList = this.cacheTasksList.filter((item) => (Date.parse(item.created) >= startDate) && (item.status == this.taskStatus));
      } else {
        this.tasksList = this.cacheTasksList;
      }
    } else {
      if (!Number.isNaN(startDate) && !Number.isNaN(endDate)) {
        this.tasksList = this.cacheTasksList.filter((item) => ((Date.parse(item.created) <= endDate) && (Date.parse(item.created) >= startDate)));
      } else if (Number.isNaN(startDate) && Number.isNaN(endDate)) {
        this.tasksList = this.cacheTasksList;
      } else if (Number.isNaN(startDate)) {
        this.tasksList = this.cacheTasksList.filter((item) => (Date.parse(item.created) <= endDate));
      } else if (Number.isNaN(endDate)) {
        this.tasksList = this.cacheTasksList.filter((item) => (Date.parse(item.created) >= startDate));
      } else {
        this.tasksList = this.cacheTasksList;
      }
    }

  }

  ngOnInit() {
    this.taskHeaderTitle = 'Tasks';
    this.taskHeaderAttr = 'tasks';
    this._appTopBarService.changeHeaderTitle(this.taskHeaderTitle, this.taskHeaderAttr);
  }
}
