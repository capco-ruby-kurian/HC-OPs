import { constant } from '@progress/kendo-data-query/dist/npm/funcs';
// import { customers } from './../../../customers';
import { HttpXrsService } from '../../providers/http-xrs.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { EditServiceService } from '../../providers/edit-service.service';
// import { SelectableSettings } from '@progress/kendo-angular-grid';
import { element } from 'protractor';

@Component({
  selector: 'app-admin-unassigned',
  templateUrl: './admin-unassigned.component.html',
  styleUrls: ['./admin-unassigned.component.scss']
})
export class AdminUnassignedComponent implements OnInit {
  username: any;

 
  name: any;
  public d1:any=[];
 public userid:number;
  public gridView: GridDataResult;
  public pageSize: number;
  public sss: String;
  public assignedElement: any = [];
  public gridData: any;

  incidentId:any;
  
  // public listItems: Array<string> = [
  //   'Joe Joel', 'Anne Joe', 'Hammer Hell', 'Rocky Venis',
  //   'Anchor Due', 'Sanna Thomas'
  // ];
  public listItems:Array<{text:string,value:number}>; 
  constructor(public adunassignserv: HttpXrsService, public router: Router,private es: EditServiceService) {
    // this.setSelectableSettings();
  }
  //    public setSelectableSettings(): void {
  //     this.selectableSettings = {
  //         mode: 'multiple'
  //     };
  // }

 

  ngOnInit() {

  
    // this.editService.read();
     /**
   * @param type endpoint for which we get the json data
   */
  //Get  Data
  this.adunassignserv.httprequest({ type: 'GET', url: 'incident/getAllIncidentByStatus/open', data: {}})
  .then((data: any) => {
    console.log('Admin  unassigned component ', data);
    this.gridData = data;
  });

  this.adunassignserv.httprequest({ type: 'GET', url: 'addNewUser/getAllNewUsers', data: {}})
  .then((data: any) => {
    console.log('Admin  unassigned component ', data);
    this.listItems = data
  
  });
  
  }
  // removeRecord(){
  //   if(checkbox.checked==true){}
  // }
  public removeHandler({ dataItem }) {
    this.es.remove(dataItem);
  }

  assignedItems(dataItem, element) {
    // dataItem.AssignedTo = this.sss;
    console.log("data",dataItem);
    if (element.target.checked) {
      this.es.assignedRow.push(dataItem);
    } else {
      for (let i = 0; i < this.es.assignedRow.length; i++) {
        if (this.es.assignedRow[i].INC === dataItem.INC) {
          this.es.assignedRow.splice(i, 1);
          break;
        }
      }
    }
    console.log(this.es.assignedRow);
    // console.log(this.es.assignedRow);
    // this.es.assignedRow.push(dataItem);
    console.log('after', this.es.assignedRow);
  }

  removeItems(dataItem) {
    
    let c = 0;
    for (let i = 0; i < this.gridData.length; i++) {
      for (let j = 0; j < this.es.assignedRow.length; j++) {
        if (this.es.assignedRow[j] === this.gridData[i]) {
          c++;
          this.es.assignedRow[j].assignedTo = this.username;
          this.gridData.splice(i, 1);
        }
      }
    }
    console.log('gridData ', this.gridData);
    console.log('after removal', this.es.assignedRow);
    for (let i = 0; i < this.assignedElement.length; i++) {
      this.es.assignedRow.push(this.assignedElement[i]);
    }
    let data1:any=this.es.assignedRow;
    
   
    this. saveUnassigned(data1);
   
  }

  //POST

  saveUnassigned(data1) {
    console.log("dataItem",data1)
    for(let i=0;i<data1.length;i++)
      {
         this.d1.push(data1[i].incidentId); 
        //  this.d2.push(data1[i].username); 

      
       console.log("d1",this.d1);        
      }
   // this.name=this.d1.username;
   console.log("id",this.d1);
  //  let user={
  //  username:this.username.username,
  //   id:this.d1
  //  }
   //console.log("user",user);
    // let user = {
    //  username:data1.username,
    //   request: [
    //     {
    //        incidentId :data1.incidentId
    //     }
    // ]
    // }
    //console.log("user",user);

    // Post Data
    this.adunassignserv.httprequest({ type: 'PUT', url: 'incident/assignedTo/ '+this.d1 +'/'+this.username.userid})
      
    .then((data) => {
        if (data) {
          console.log('res :', data);
          console.log('Registration sucessfull');
        } else {
          console.log('Registration Unsucessfull');
        }
        console.log(data);
      });
  }

}
