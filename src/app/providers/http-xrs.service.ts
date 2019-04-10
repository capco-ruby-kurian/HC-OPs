import { RequestOptions } from '@angular/http/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/catch';

import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from "@angular/common/http";
// import 'rxjs/Rx';

@Injectable()
export class HttpXrsService {
  sub: Array<any> = [];
  state: Array<any> = [];
  city: Array<any> = [];
  public BASE_URL: string ="http://localhost:8080/" ;
  //"http://localhost:8080/";

  constructor(public http: Http) { }
  httprequest(req) {
    // debugger;
    let xhr: any;
    return new Promise((resolve, reject) => {
      try {

        switch (req.type) {
          case 'GET':
            console.log('get')
            this.http.get(this.BASE_URL + req.url).subscribe((data) => {
              if (data.status == 200 && data.statusText == "OK") {
                let json = data.json();
                resolve(json);
              } else {
                throw data;
              }
            },
              error => {
                throw error;
              });
            break;
          case 'POST':
          debugger;
            this.http.post(this.BASE_URL + req.url, req.data).subscribe((data) => {
              console.log("post service called");
              
              if (data.status == 200 && data.statusText == "OK") {
               let json = data;
                if (typeof data == "string") {
                  json = JSON.parse(data);
                  // json = data.json();
                }
                //debugger;
                resolve(json);
                console.log("post service called");
              } else {
                throw data;
              }
            },
              error => {
                // debugger;
                console.log(error);
                throw error;
              });
            break;
          case 'DELETE':
            this.http.delete(this.BASE_URL + req.url, req.data).subscribe((data) => {
              //debugger;
              if (data.status == 200 && data.statusText == "OK") {
                // let json = data.json();
                resolve(data);
              } else {
                throw data;
              }
            },
              error => {
                throw error;
              });
            break;
          case 'PUT':
            this.http.put(this.BASE_URL + req.url, req.data).subscribe((data) => {
              if (data.status == 200 && data.statusText == "OK") {
                let json = data.json();
                resolve(json);
              } else {
                throw data;
              }
            },
              error => {
                throw error;
              });
            break;
          default:
            break;
        }
      } catch (error) {
        console.log(error);
      }
    });
  }


}

