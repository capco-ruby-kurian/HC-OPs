import { Injectable } from '@angular/core';
import{Http, Response, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class UserIncidentFormService {
 private subUrl: string;
  constructor(private http:Http) { }
  getincidentdetails(data:any){
    
    console.log("User incident  service called", data);
    this.subUrl='http://localhost:8080/incident/save';  
     let obj=data.toString();
    console.log("Data ",data);
    return new Promise((resolve,reject)=>{
      this.http.post(this.subUrl,data).subscribe((res)=>{
       resolve(res);
    
      },
      err=>{reject(err);
        console.log("Data ",data);
      });
    });
  }
}