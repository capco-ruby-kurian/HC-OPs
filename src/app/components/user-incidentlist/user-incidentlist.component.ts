import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { HttpXrsService } from './../../providers/http-xrs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { process, State } from '@progress/kendo-data-query';


@Component({
  selector: 'app-user-incidentlist',
  templateUrl: './user-incidentlist.component.html',
  styleUrls: ['./user-incidentlist.component.scss']
})
export class UserIncidentlistComponent implements OnInit {
  incno: any;

  incidents: any;


  public gridData: any;



  constructor(private  route:  ActivatedRoute,  private  router:  Router, public userGroupServe: HttpXrsService) { }

  ngOnInit() {
    this.userGroupServe.httprequest({ type: 'GET', url: 'incident/getUserId', data: {} })
      .then((data: any) => {
        console.log("user group component ", data);
        this.gridData = data;

      });
  }


 


}
