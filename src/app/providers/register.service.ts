import { Injectable } from '@angular/core';
import{Http, Response, RequestOptions, Headers} from '@angular/http';

    
@Injectable()
export class RegisterService {
private subUrl:string;
  constructor(private http:Http) { }


register1(body:any){
   console.log("Data ",body);
  console.log("Registration service called");
  this.subUrl='http://localhost:8080/registration/save';

  let obj=body.toString();
  //console.log("Data ",body);
  return new Promise((resolve,reject)=>{
    this.http.post(this.subUrl,body).subscribe((res)=>{
     resolve(res);
     if(res){
       
     }
      
    },
    err=>{reject(err);
      console.log("Data ",body);
    });
  });
}
}
