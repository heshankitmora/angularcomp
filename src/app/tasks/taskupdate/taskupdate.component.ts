import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Task } from '../../models/tasks/task';
import {TaskComment} from '../../models/tasks/taskComment';

@Component({
  selector: 'app-taskupdate',
  templateUrl: './taskupdate.component.html',
  styleUrls: ['./taskupdate.component.scss']
})
export class TaskupdateComponent implements OnInit {

  usersData: any;
  fileToUpload: File = null;

  task: Task;

  taskNameVal: string;
  taskDescVal: string;
  taskCategory: string;
  taskPriority: string;
  taskStatus: string;
  taskReviewer: string;
  taskAssignee: string;

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.getAllUsers().subscribe(
      res => {
        this.usersData = res;
      }
    );
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  onTaskSubmit() {
    //this._appService.addTask
    this.task = new Task();
    this.task.title = this.taskNameVal;
    this.task.description = this.taskDescVal;
    this.task.catId = this.taskCategory;
    this.task.priority = this.taskPriority;
    this.task.status = this.taskStatus;
    this.task.reviewer = this.taskReviewer;
    this.task.files = this.fileToUpload;
    this.task.assignedTo = this.taskAssignee;

    this._appService.addTask(this.task).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
