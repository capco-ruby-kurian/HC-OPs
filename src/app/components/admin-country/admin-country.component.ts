import { Component, OnInit, Input } from '@angular/core';
import { HttpXrsService } from '../../providers/http-xrs.service';
@Component({
  selector: 'app-admin-country',
  templateUrl: './admin-country.component.html',
  styleUrls: ['./admin-country.component.scss']
})
export class AdminCountryComponent implements OnInit {
  cityName: any;
  stateName: any;
  countryName: any;
  gridData = [];
  public dataItem: any;
  constructor(private location: HttpXrsService) { }
  countryForm = { country: '', state: '', city: '' };

  loadGridDetails() {
    debugger;
    this.ngOnInit();
  }
  ngOnInit() {
    //debugger;
    this.location.httprequest({ type: 'GET', url: 'city/getAllCity', data: {} })
      .then((data: any) => {
        this.gridData = data;
        this.dataItem = data;
        console.log("Grid data", this.gridData)
      });
  }

  getRow(evt) {
    this.location.state = evt.dataItem.states;
    console.log("helloooooooo", this.location.state);
  }


  addNewCities() {
    let addNewCities = {

      // stateName: this.stateName,
      // cityName: this.cityName,

      countryName: this.countryName,
      states: [
        {
          "stateName": this.stateName,
          "cities": [

            {
              "cityName": this.cityName
            }
          ]
        }
      ]

    }
    console.log(addNewCities);
    this.location.httprequest({ type: 'POST', url: 'city/addCity', data: addNewCities })
      .then((data) => {
        this.ngOnInit();
      }, (error) => {
        console.log(error);
      }

      )
  }
}
