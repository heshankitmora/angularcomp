import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from 'angular-custom-modal';

@Component({
  selector: 'app-addincident',
  templateUrl: './addincident.component.html',
  styleUrls: ['./addincident.component.scss']
})
export class AddincidentComponent implements OnInit {

  constructor() { }

  @ViewChild('modalNewIncident') modalNewIncident: ModalComponent;

  ngOnInit() {
  }

  addNewIncident() {
    this.modalNewIncident.open();
  }

}
