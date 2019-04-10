import { IncattachmentService } from './../../providers/incattachment.service';

//import { RequestOptions } from '@angular/http/http';

import { location } from './../../../cities';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

import { HttpXrsService } from '../../providers/http-xrs.service';
import { HttpEventType, HttpResponse } from "@angular/common/http";
@Component({
  selector: 'app-user-incident-form',
  templateUrl: './user-incident-form.component.html',
  styleUrls: ['./user-incident-form.component.scss']
})
export class UserIncidentFormComponent implements OnInit {
  subcategories: any;
  description: any;
  subcategory: any;
  category: any;
  locations: any;
  requestor: any;
  location: any;
  sc: any;
  incidentForm: FormGroup;
  cat: any;
  description1: any;

  selectedFiles: any;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };


  sub = [];
  Subcategories = [];
  categories = [];
  name: any;
  constructor(private userservice: HttpXrsService, private incidentattachment: IncattachmentService) { }

  ngOnInit(): void {

    this.userservice.httprequest({ type: 'GET', url: 'category/getAll' , data: {} })
      .then((data: any) => {
        this.setQueryOptionsCategories(data);
        console.log(data)
      });

    this.userservice.httprequest({ type: 'GET', url: 'city/getCities' , data: {} })
      .then((data: any) => {
        this.setQueryOptionsLocation(data);
        console.log(data)
      });
  }



  setQueryOptionsCategories(data: any) {
    this.categories = data;
    this.name = data.name;
    this.subcategories = data.subcategories;
  }
  setQueryOptionsLocation(data: any) {
    this.locations = data;
  }
  setOptions() {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].categoryName == this.category) {
        this.subcategories = this.categories[i].subcategory;
      }
    }
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    console.log("data", this.selectedFiles);

  }

  // upload():string {
  //   // this.progress.percentage = 0;

  //   this.currentFileUpload = this.selectedFiles;
  //  console.log("data", this.currentFileUpload)

  //   this.incidentattachment.pushFileToStorage(this.currentFileUpload).subscribe(event => {
  //     if (event.type === HttpEventType.UploadProgress) {
  //       this.progress.percentage = Math.round(100 * event.loaded / event.total);
  //     } else if (event instanceof HttpResponse) {
  //       console.log('File is completely uploaded!');
  //     }
  //   });

  //   console.log("Selected files ",this.selectedFiles);
  //   return this.selectedFiles[0];
  // }


  upload() {
debugger;
    // this.progress.percentage = 0;
    this.getdetails();
    this.currentFileUpload = this.selectedFiles.item(0);
    this.incidentattachment.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

  }




  getdetails() {
    this.ngOnInit();
    debugger;
    //this.selectedFiles = event.target.files;
    // var fileName = new Object();
    // fileName.file = this.selectedFiles[0];
   
    let userdata = {
      // incidentId: "INC10",
      requestor: this.requestor,
      location: this.location,
      category: this.category,
      subcategory: this.subcategory,
      request: [
        {
          description: this.description
        }
      ]
    };

    console.log(userdata);
    this.userservice.httprequest({
      type: 'POST',url: 'incident/incidentWithAttachmentnew',data: {userdata}
      // headers:{'Content-Type': 'multipart/form-data'}
    })
    .then((data) => {
        debugger;

    

    })
  }
}
  
     
 
