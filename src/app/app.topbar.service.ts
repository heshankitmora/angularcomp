import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppTopbarService {

  visibleTasksManagement: boolean;

  private headerTitleSource = new BehaviorSubject('Main Title');
  private componentAttrNameSource = new BehaviorSubject('');

  headerTitle = this.headerTitleSource.asObservable();
  attrTitle = this.componentAttrNameSource.asObservable();

  constructor() { this.visibleTasksManagement = false; }

  changeHeaderTitle(headerMainTitle: string, attrMainTitle: string) {
    this.headerTitleSource.next(headerMainTitle);
    this.componentAttrNameSource.next(attrMainTitle);
  }

  showTasksManagement() {
    this.visibleTasksManagement = true;
  }

  hideTasksManagement() {
    this.visibleTasksManagement = false;
  }
}
