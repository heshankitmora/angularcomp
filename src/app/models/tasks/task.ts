import {Taskrecurrence} from './taskrecurrence';

export class Task {
  status: string;
  created: any;
  title: any;
  description: any;
  catId: any;
  priority: any;
  assignedTo: any;
  reviewer: any;
  subTasks: Array<any>;
  comments: Array<any>;
  reminders: Array<any>;
  files: any;
  risks: Array<any>;
  recurrence: Taskrecurrence;
  tags: Array<any>;
}


