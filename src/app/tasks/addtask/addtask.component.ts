import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from 'angular-custom-modal';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {

  @ViewChild('modalNewTask') modalNewTask: ModalComponent;

  constructor() { }

  ngOnInit() {
  }

  addNewTask() {
    this.modalNewTask.open();
  }

}
