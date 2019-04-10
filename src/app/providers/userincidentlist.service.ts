import { Injectable } from '@angular/core';
import{Http, Response, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class UserincidentlistService {
 private subUrl: string;
  constructor(private http:Http) { }
  getincidentlist(){
    
    console.log("User incident  service called");
    this.subUrl='assets/data/incidents.json';  
    // let obj=data.toString();
    // //console.log("Data ",body);
    return new Promise((resolve,reject)=>{
      this.http.get(this.subUrl).subscribe((res)=>{
        console.log(res);
       resolve(res);
    },
      err=>{reject(err);
        reject(err);
      });
    });
  }
}