import { Component, OnInit } from '@angular/core';
import { HttpXrsService } from '../../providers/http-xrs.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-resolved',
  templateUrl: './resolved.component.html',
  styleUrls: ['./resolved.component.scss']
})
export class ResolvedComponent implements OnInit {
  public gridData: any;
  constructor(public resolvedServe:HttpXrsService, public router: Router ) { }

  ngOnInit() {
         /**
   * @param type endpoint for which we get the json data
   */
  this.resolvedServe.httprequest({ type: 'GET', url: 'incident/getAllResolvedIncident' })
  .then((data: any) => {
    console.log("admin header component ", data);
    this.gridData = data;
  });
  }

}
