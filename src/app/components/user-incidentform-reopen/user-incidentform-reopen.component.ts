
import { ActivatedRoute } from '@angular/router';
import { HttpXrsService } from './../../providers/http-xrs.service';
import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-incidentform-reopen',
  templateUrl: './user-incidentform-reopen.component.html',
  styleUrls: ['./user-incidentform-reopen.component.scss']
})
export class UserIncidentformReopenComponent implements OnInit {
  incdescription:any;
  userData: {};

  category: any;
  subcategory: any;
  status: any;
  location: any;
  incident: any;
  reason: any;
  incno: any;
  public show: boolean = false;
  public buttonName:any = 'Reopen';
  sub=[];
  cat: any;
  Subcategories = [];

  name:any;
  incidentId="string";
  requestor:any;
  cities = ['IN>Pune', 'IN>Banglore'];

  user = {incidentNo: '',name:'', state: '', city:'',categories:'',sub:'',description1:'',solution:''};

  constructor(private categoryservice:HttpXrsService,route:ActivatedRoute) { 
    this.incidentId = route.snapshot.params['dataItem.incidentId'];
   
  }


  reopenForm: FormGroup;
  ngOnInit():void{
    this.reopenForm = new FormGroup({
      'inc':  new FormControl(this.user.incidentNo, Validators.required),
      'name':  new FormControl(this.user.name, Validators.required),
      'state':  new FormControl(this.user.state, Validators.required),
      'city': new FormControl(this.user.city, Validators.required),
      'categories': new FormControl(this.user.categories, Validators.required),
      'subCategory': new FormControl(this.user.sub, Validators.required),
      'description1': new FormControl(this.user.description1, Validators.required),
      'solution': new FormControl(this.user.solution, Validators.required),
    }); 
  
    this.categoryservice.httprequest({ type: 'GET', url: 'incident/getIncidentId/'+this.incidentId})
    .then((data:any) => {
     
      console.log("data :", data);
      this.userData=data;
      this.requestor=data.requestor;
      this.location=data.location;
      this.status=data.status;
      this.category=data.category;
      this.subcategory=data.subcategory;
      this.incdescription=data.request;
      

    }, err => {
      console.log(err);
    })

    
  


  }
  
  setQueryOptionsData(data: any) {
      this.incident=data
      
      }
  // setQueryOptionsData(data: any) {
  //   this.categories=data.categories;
  //   this.name = data.name;
  //   this.Subcategories = data.Subcategories;
  //   }
  //   setOptions(){
  //     for(let i=0;i<this.categories.length;i++){
  //       if(this.categories[i].name==this.cat){
  //         this.sub=this.categories[i].Subcategories;
  //       }
  //     }
  //   }

    toggle() {
      this.show = !this.show;
      debugger;
      if(this.show)   
        this.buttonName = "Save";
      else
       {
        let obj={
          incidentId:this.incidentId,
          request: [
            {
                description: this.reason
            }
        ]
        }     
        console.log("Reopen Data",obj)
        this.categoryservice.httprequest({ type: 'POST', url: 'incident/reOpen/'+this.incidentId, data:  obj  })
        .then((data) => {
         console.log("userdata :", data);
        },err =>{
          console.log(err);
        })

    }
  }
  get city() { return this.reopenForm.get('city'); }
  get categories() { return this.reopenForm.get('categories'); }
  get subCategory() { return this.reopenForm.get('subCategory'); }
  get description() { return this.reopenForm.get('description'); }
  get solution() { return this.reopenForm.get('solution'); }
}
