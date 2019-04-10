import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EditServiceService } from '../../providers/edit-service.service';
import { HttpXrsService } from "../../providers/http-xrs.service";
@Component({
  selector: 'app-admin-resolver',
  templateUrl: './admin-resolver.component.html',
  styleUrls: ['./admin-resolver.component.scss']
})
export class AdminResolverComponent implements OnInit {

  status1 = ['Active', 'On Hold', 'Resolved','Cancel'];
  [x: string]: any;
  category: any;
  form: FormGroup;
  incNo; description; assignedto; created; req;userid;

  public assignedData: any;
  user = { state: '', usr: '' };
  constructor(private es: EditServiceService,public saveresolverserv: HttpXrsService) {
  this.assignedData = this.es.actRow;
    console.log('data in admin resolver ', this.assignedData);
    // this.incNo=this.assignedData[0].INC;
    this.incNo = this.assignedData.incidentId;
    this.req = this.assignedData.requestor;
    this.assignedto = this.assignedData.assignedTo;
    this.created = this.assignedData.createdAt;
    this.description = this.assignedData.description;
    this.userid=this.assignedData.userId;
    this.category=this.assignedData.category;
    this.subcategory=this.assignedData.subcategory;
    this.resolvedBy=this.assignedData.resolvedBy;
    this.resolvedAt=this.assignedData.resolvedAt;
    this.location=this.assignedData.location;

  }


  ngOnInit(): void {
    this.form = new FormGroup({
      'state': new FormControl(this.user.state, [
        Validators.required
      ]),
      'usr': new FormControl(this.user.usr, [
        Validators.required
      ])
    });
}
  populate() {
    for (let i = 0; i < this.assignedData.length; i++) {
      // this.es.assignedRow.push(this.assignedData[i]);

    }
  }

  saveResolverForm() {
    let user = {        
        status: this.status,
        solutions: [
            {
                solution: this.solution
            }
        ]
    
    }
    console.log(user);

    // Post Data
    this.saveresolverserv.httprequest({ type: 'POST', url: 'incident/resolveIncident/'+this.incNo, data:  user  })
      .then((data) => {
        if (data) {
          console.log('res :', data);
          console.log('Data sent sucessfull');
        } else {
          console.log('Data Unsucessfull');
        }
        console.log(data);
      });
  }
  
}
