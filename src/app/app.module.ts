import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { LeftmenuComponent } from './common/leftmenu/leftmenu.component';
import { TopheaderComponent } from './common/topheader/topheader.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { NgxPaginationModule } from 'ngx-pagination';
import { PopupcommentsComponent } from './tasks/popupcomments/popupcomments.component';
import { ModalModule } from 'angular-custom-modal';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AssigneeComponent } from './tasks/assignee/assignee.component';
import { SubtasksComponent } from './tasks/subtasks/subtasks.component';

import { SubtasksAssigneepipe } from './tasks/subtasks/subtasks.assigneepipe';
import { TaskupdateComponent } from './tasks/taskupdate/taskupdate.component';
import { AttachmentComponent } from './tasks/attachment/attachment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { AddtaskComponent } from './tasks/addtask/addtask.component';
import { ViewprojectleftComponent } from './projects/viewprojectleft/viewprojectleft.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { AddincidentComponent } from './incidents/addincident/addincident.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    LeftmenuComponent,
    TopheaderComponent,
    PopupcommentsComponent,
    AssigneeComponent,
    SubtasksComponent,
    SubtasksAssigneepipe,
    TaskupdateComponent,
    AttachmentComponent,
    DashboardComponent,
    ProjectsComponent,
    AddtaskComponent,
    ViewprojectleftComponent,
    IncidentsComponent,
    AddincidentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ScrollingModule,
    NgxSpinnerModule,
    FormsModule,
    MyDatePickerModule,
    NgxPaginationModule,
    ModalModule,
    LazyLoadImageModule,
    NgbModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
