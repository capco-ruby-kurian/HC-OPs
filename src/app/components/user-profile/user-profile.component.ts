import { Component, OnInit } from '@angular/core';
import { ProfilepicService } from '../../providers/profilepic.service';
import { HttpEventType, HttpResponse } from "@angular/common/http";
import { HttpXrsService } from "../../providers/http-xrs.service";
import { FormGroup, FormControl, Validators } from "@angular/forms/forms";
declare var $: any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  department: any;
  username: any;
  email: any;
  locations: any;
  mob: any;
  location: any;
  incidents: any;
  // ProfilepicService: any;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(public userprofile: ProfilepicService, private userGroupServe: HttpXrsService) { }

  ngOnInit() {
  


    this.userGroupServe.httprequest({ type: 'GET', url:'city/getCities' , data: {} })
    .then((data: any) => {
      this.setQueryOptionsLocation(data);
      console.log(data)
    });

    
    this.userGroupServe.httprequest({ type: 'GET', url:'profile/getByUserId' , data: {} })
    .then((data: any) => {
      this.profileDetails(data);
      console.log(data)
    });


 
  }

  profileDetails(data){
    this.email=data.email
    this.username=data.username
    this.department=data.department
  }

  setQueryOptionsLocation(data:any){
    this.locations=data;  
  }
   


  selectFile(event) {
    this.selectedFiles = event.target.files;
  //   let v=(document.getElementById("text1") as HTMLInputElement);
  //  alert(v.value);
  //   let pic=v.value;
  //   console.log("data",pic);

  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.userprofile.pushFileToStorage( this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
  }


  save(){
    let obj={
      location:this.location
    } 
    console.log(obj);
    this.userGroupServe.httprequest({ type:'PUT', url:'profile/updateUser', data:obj})
      .then((data:any) => {
        debugger;
        console.log("userdata :", data);
      }, err => {
        console.log(err);
      })

  }

}
