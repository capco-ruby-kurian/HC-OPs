import { Component, OnInit } from '@angular/core';
import { HttpXrsService } from '../../providers/http-xrs.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-canceled',
  templateUrl: './canceled.component.html',
  styleUrls: ['./canceled.component.scss']
})
export class CanceledComponent implements OnInit {
  public gridData: any;
  constructor(public canceledserve:HttpXrsService,public router: Router) { }

  ngOnInit() {
    this.canceledserve.httprequest({ type: 'GET', url: './assets/data/status.json', data: {} })
    .then((data: any) => {
      console.log("canceled component ", data.customers);
      this.gridData = data.customers;
    });
  }

}
