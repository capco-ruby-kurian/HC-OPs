import { Injectable } from '@angular/core';
import{Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";

@Injectable()
export class ProfilepicService {
     getFiles(): any {
        throw new Error("Method not implemented.");
    }

  constructor(private http: HttpClient) { }
  
    pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
      debugger;
      const formdata: FormData = new FormData();
  
      formdata.append('file', file);
      console.log("file is: ",file);
  
      const req = new HttpRequest('POST','http://localhost:8080/profile/upload', formdata, {
        reportProgress: true,
        
        responseType: 'text'
      });
  
      return this.http.request(req);
    }
  
   
  
}
