import { Component, OnInit } from '@angular/core';
import { HttpXrsService } from '../../providers/http-xrs.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-closed',
  templateUrl: './closed.component.html',
  styleUrls: ['./closed.component.scss']
})
export class ClosedComponent implements OnInit {
  public gridData: any;
  constructor(public closedServe:HttpXrsService,public router: Router) { }

  ngOnInit() {
          /**
   * @param type endpoint for which we get the json data
   */
  this.closedServe.httprequest({ type: 'GET', url: './assets/data/status.json', data: {} })
  .then((data: any) => {
    console.log("closed component ", data.customers);
    this.gridData = data.customers;
  });
  }

}
