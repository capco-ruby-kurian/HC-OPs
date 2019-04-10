import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Injectable()
export class LocationserviceService {

  constructor(private http: HttpClient) {
  }
  public getJSONDataAsync(filePath:string):Promise <any>{
    return new Promise ((resolve ,reject)=>{
    this.http.get(filePath)
    .subscribe(
      res=>{
        if(!res){
          reject("failed with status:"+res+"\n trying to find the file at:"+filePath);
        }
        var jsonRes=res;
        resolve(jsonRes);
      }
    );
    }).catch((error:any) => console.log(error));
  }

}
