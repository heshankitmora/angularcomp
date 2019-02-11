import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {TaskComment} from './models/tasks/taskComment';
import {Task} from './models/tasks/task';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl = 'http://localhost:9025/';

  constructor(private _http: HttpClient) { }

  /*Get All Users*/
  getAllUsers() {
    return this._http.get(this.baseUrl + 'v1/organisations/5aeba16319d81a1a18679a3d/users');
  }

  /*Get All Projects*/
  getAllProjects() {
    return this._http.get(this.baseUrl + 'v1/organisations/5aeba16319d81a1a18679a3d/projects');
  }

  /*Get All Tasks*/
  getAllTasks() {
    return this._http.get(this.baseUrl + 'v1/organisations/5aeba16319d81a1a18679a3d/tasks');
  }

  /*Get All Incidents*/
  getAllIncidents() {
    return this._http.get(this.baseUrl + 'v1/organisations/5aeba16319d81a1a18679a3d/incidents');
  }

  /*Delete Task*/
  deleteTask(taskId: string) {
    return this._http.delete(this.baseUrl + 'v1/organisations/5aeba16319d81a1a18679a3d/tasks/' + taskId);
  }

  /*Delete Incident*/
  deleteIncident(incidentId: string) {
    return this._http.delete(this.baseUrl + 'v1/organisations/5aeba16319d81a1a18679a3d/incidents/' + incidentId);
  }

  /*Get Comments related to Task*/
  getCommentsForTask(taskId) {
    return this._http.get(this.baseUrl + 'v1/organisations/5aeba16319d81a1a18679a3d/tasks/' + taskId + '/comments');
  }

  /*Post Comments related to Task*/
  postCommentByUserToTask(taskId: string, taskComment: TaskComment): Observable<TaskComment> {
    return this._http.post<TaskComment>(
      this.baseUrl + 'v1/organisations/5aeba16319d81a1a18679a3d/tasks/' + taskId + '/comments', taskComment, httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  /*Post Comments related to Task*/
  addTask(task: Task): Observable<Task> {
    return this._http.post<Task>(
      this.baseUrl + 'v1/organisations/5aeba16319d81a1a18679a3d/tasks', task, httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
