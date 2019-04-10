import { Component, OnInit } from '@angular/core';
import { HttpXrsService } from '../../providers/http-xrs.service';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  usrgroup: any;
  departments: any;
  Email: any;
  userid: any;
  usergroup: any;
  countries: any;
  departmentName: any;
  c: any;
  ste: any;
  ctry: any;
  cit: any;
  st: any;
  cunt: any;
  cnt: any;
  locations = [];
  states = [];
  cities = [];
  // departments = [];
  userGroups = ['HC OPS', 'Users'];

  user = { userId: '', email: '', city: '', state: '', country: '', department: '', userGroup: '' };

  constructor(public newuserserv: HttpXrsService, private locationservice: HttpXrsService) { }

  userForm: FormGroup;

  ngOnInit(): void {

    this.locationservice.httprequest({ type: 'GET', url: 'city/getAllCity', data: {} })
    .then((data: any) => {
      this.setQueryOptionsData(data);
      console.log('add user component ', data);
      
    });

    this.newuserserv.httprequest({ type: 'GET', url: 'UserGroup/getAllUserGroup' })
      .then((data: any) => {
        this.setQueryOptionsUserGroup(data);
        console.log(data)
      });

    this.userForm = new FormGroup({
      'userId': new FormControl(this.user.userId, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
      'email': new FormControl(this.user.email, [
        Validators.required,
        Validators.pattern('^[A-Za-z]+.[^A-Za-z][^@]+@capco.com'),
        //  Validators.pattern("[^ @]*@[^ @]*")

      ]),
      'city': new FormControl(this.user.city, Validators.required),
      'state': new FormControl(this.user.state, Validators.required),
      'country': new FormControl(this.user.country, Validators.required),
      'department': new FormControl(this.user.department, Validators.required),
      'userGroup': new FormControl(this.user.userGroup, Validators.required),

    });
  }
  
  setQueryOptionsUserGroup(data: any) {
    debugger;
    this.usergroup= data;
    console.log("Data ",this.usergroup);
    
  }
 
  setQueryOptionsData(data: any) {
    this.locations = data;
    this.ctry = data.countryName;
    this.states = data.states;
    this.ste = data.stateName;
    this.cities = data.cities;

  }
  setOptions() {
    for (let i = 0; i < this.locations.length; i++) {
      if (this.locations[i].countryName == this.countries) {
        this.cunt = this.locations[i].states;
        for (let z = 0; z < this.cunt.length; z++) {
          if (this.cunt[z].stateName == this.states) {
            this.cit = this.cunt[z].cities;
          }
        }

      }
    }
  }


  saveAddNewUserForm() {
    let user = {
      userid: this.userid,
      email: this.Email,
      location: this.cities,  
      department: this.departments,
      usergroup: this.user,
    }
    console.log(user);

    // Post Data
    this.newuserserv.httprequest({ type: 'POST', url: 'addNewUser/save', data:  user  })
      .then((data) => {
        if (data) {
          console.log('res :', data);
          console.log('Registration sucessfull');
        } else {
          console.log('Registration Unsucessfull');
        }
        console.log(data);
      });
  }
  get userId() { return this.userForm.get('userId'); }
  get email() { return this.userForm.get('email'); }
  get city() { return this.userForm.get('city'); }
  get state() { return this.userForm.get('state'); }
  get country() { return this.userForm.get('country'); }
  get department() { return this.userForm.get('department'); }
  get userGroup() { return this.userForm.get('userGroup'); }



}
