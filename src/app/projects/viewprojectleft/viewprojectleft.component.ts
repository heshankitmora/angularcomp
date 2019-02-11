import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-viewprojectleft',
  templateUrl: './viewprojectleft.component.html',
  styleUrls: ['./viewprojectleft.component.scss']
})
export class ViewprojectleftComponent implements OnInit {

  projectData: any;
  projectLength: number;

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this.projectLength = 0;
    this._appService.getAllProjects().subscribe(
      (res: any[]) => {
        this.projectLength = res.length;
        this.projectData = res;
      }
    );
  }

}
