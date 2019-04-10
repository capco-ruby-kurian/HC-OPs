import { Component, OnInit } from '@angular/core';
// import { customers } from '../../../customers';
import { EditServiceService } from '../../providers/edit-service.service';
import { log } from 'util';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { HttpXrsService } from "../../providers/http-xrs.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-assigned',
  templateUrl: './admin-assigned.component.html',
  styleUrls: ['./admin-assigned.component.scss']
})
export class AdminAssignedComponent implements OnInit {
  gridData: any;
  public assignedData: any[];
  // public gridData: any[] = customers;
 
   constructor(public adunassignserv: HttpXrsService, public router: Router,private es: EditServiceService) {
   
    this.assignedData = this.es.assignedRow;
  }

  ngOnInit() {
    console.log(this.assignedData);
      //Get  Data
  this.adunassignserv.httprequest({ type: 'GET', url: 'incident/getAllIncidentAssignedTo'})
  .then((data: any) => {
    console.log('Admin  unassigned component ', data);
    this.gridData = data;
  });
  }
  selectRow(evt) {
   this.es.actRow = evt;
   console.log('hhhhhhhhhhhhhhhhhhhhhhhhh', this.es.actRow);
}
}
