import { Component, OnInit } from '@angular/core';
import { HttpXrsService } from '../../providers/http-xrs.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-open-active',
  templateUrl: './open-active.component.html',
  styleUrls: ['./open-active.component.scss']
})
export class OpenActiveComponent implements OnInit {
  public gridData: any;
  constructor(public openActiveServe:HttpXrsService,public router: Router) { }

  ngOnInit() {
        /**
   * @param type endpoint for which we get the json data
   */
  this.openActiveServe.httprequest({ type: 'GET', url: 'incident/getAll' })
  .then((data: any) => {
    console.log("admin header component ", data);
    this.gridData = data;
  });
  }
}
