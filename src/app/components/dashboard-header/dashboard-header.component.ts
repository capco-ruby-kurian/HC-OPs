import { HttpXrsService } from './../../providers/http-xrs.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {
  username: any;

  constructor(private userGroupServe:HttpXrsService) { }

  ngOnInit() {
    this.userGroupServe.httprequest({ type: 'GET', url:'profile/getByUserId' , data: {} })
    .then((data: any) => {
      this.setQueryOptions(data);
      console.log(data)
    });
  }

  setQueryOptions(data:any){
     this.username=data.username
  }
}

