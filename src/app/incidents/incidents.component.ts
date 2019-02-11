import {Component, OnInit, ViewChild} from '@angular/core';
import { AppTopbarService } from '../app.topbar.service';
import { AppService } from '../app.service';
import {NgxSpinnerService} from 'ngx-spinner';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import {ModalComponent} from 'angular-custom-modal';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {

  @ViewChild('modalDeleteIncident') modalDeleteIncident: ModalComponent;

  incidentTitle: string;
  incidentAttr: string;
  incidentCommentDelTitle: string;

  deleteIncidentId: string;

  public startDateIncident: string;
  endDateIncident: string;

  public incidentStatus: string;
  startDate: string;
  endDate: string;

  public incidentList;
  public incidentCacheList;

  constructor(private _appService: AppService, private _loadingSpinner: NgxSpinnerService, private _appTopBarService: AppTopbarService) { }

  ngOnInit() {
    this.incidentTitle = 'Incidents';
    this.incidentAttr = 'incident';
    this._appTopBarService.changeHeaderTitle(this.incidentTitle, this.incidentAttr);
    this.getAllIncidentsService();
  }

  getAllIncidentsService() {
    this._appService.getAllIncidents().subscribe(
      res => {
        this.incidentList = res;
        this.incidentCacheList = this.incidentList;
        this._loadingSpinner.hide();
      }
    );
  }

  onStartDateChanged(event: IMyDateModel) {
    this.startDateIncident = event.formatted;
  }

  onEndDateChanged(event: IMyDateModel) {
    this.endDateIncident = event.formatted;
  }

  resetFilterClick($event) {
    $event.stopPropagation();
    this.incidentStatus = '';
    this.startDate = '';
    this.endDate = '';
    this.incidentList = this.incidentCacheList;
  }

  deleteIncident(incidentId: string, incidentTitle: string) {
    this.modalDeleteIncident.open();
    this.deleteIncidentId = incidentId;
    this.incidentCommentDelTitle = incidentTitle;
  }

  cancelDeleteConfirm() {
    this.modalDeleteIncident.close();
  }

  deleteIncidentConfirm() {
    this._appService.deleteIncident(this.deleteIncidentId).subscribe(
      res => {
        console.log('Delete Incident Response: ' + res);
        if (res) {
          this.getAllIncidentsService();
          this.modalDeleteIncident.close();
        }
      }
    );
  }


  incidentFilterClick($event) {
    $event.stopPropagation();
    let endDate = Date.parse(this.endDateIncident);
    let startDate = Date.parse(this.startDateIncident);
    let incidentListArr = this.incidentList;

    console.log(endDate);

    if (this.incidentStatus) {
      if (!Number.isNaN(startDate) && !Number.isNaN(endDate)) {
        this.incidentList = this.incidentCacheList.filter((item) => ((Date.parse(item.created) <= endDate) && (Date.parse(item.created) >= startDate) && (item.status == this.incidentStatus)));
      } else if (Number.isNaN(startDate) && Number.isNaN(endDate)) {
        this.incidentList = this.incidentCacheList.filter((item) => ((item.status == this.incidentStatus)));
      } else if (Number.isNaN(startDate)) {
        this.incidentList = this.incidentCacheList.filter((item) => (Date.parse(item.created) <= endDate) && (item.status == this.incidentStatus));
      } else if (Number.isNaN(endDate)) {
        this.incidentList = this.incidentCacheList.filter((item) => (Date.parse(item.created) >= startDate) && (item.status == this.incidentStatus));
      } else {
        this.incidentList = this.incidentCacheList;
      }
    } else {
      if (!Number.isNaN(startDate) && !Number.isNaN(endDate)) {
        this.incidentList = this.incidentCacheList.filter((item) => ((Date.parse(item.created) <= endDate) && (Date.parse(item.created) >= startDate)));
      } else if (Number.isNaN(startDate) && Number.isNaN(endDate)) {
        this.incidentList = this.incidentCacheList;
      } else if (Number.isNaN(startDate)) {
        this.incidentList = this.incidentCacheList.filter((item) => (Date.parse(item.created) <= endDate));
      } else if (Number.isNaN(endDate)) {
        this.incidentList = this.incidentCacheList.filter((item) => (Date.parse(item.created) >= startDate));
      } else {
        this.incidentList = this.incidentCacheList;
      }
    }

  }
}
