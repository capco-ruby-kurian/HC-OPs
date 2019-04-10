import { Component, OnInit } from '@angular/core';
import { HttpXrsService } from '../../providers/http-xrs.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-on-hold',
  templateUrl: './on-hold.component.html',
  styleUrls: ['./on-hold.component.scss']
})
export class OnHoldComponent implements OnInit {
  public gridData: any;
  constructor(public onholdserve:HttpXrsService,public router: Router) { }

  ngOnInit() {
    this.onholdserve.httprequest({ type: 'GET', url: '', data: {} })
    .then((data: any) => {
      console.log("onhold component ", data.customers);
      this.gridData = data.customers;
    });
  }

}
