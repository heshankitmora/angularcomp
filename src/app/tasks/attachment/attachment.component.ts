import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss']
})
export class AttachmentComponent implements OnInit {

  @Input() taskAttachments: any;
  @Input() taskAttachID: string;

  taskAttachmentsList: any;

  constructor() { }

  ngOnInit() {
    this.taskAttachmentsList = this.taskAttachments;
  }

}
