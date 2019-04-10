import { FormsModule, FormBuilder } from '@angular/forms';
import { HttpXrsService } from '../../providers/http-xrs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from "../../../assets/validators/password-validation";

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.scss']
})
export class NewRegistrationComponent implements OnInit {
  register: any;
  username: string;
  userid: string;
  password: any;
  email: string;
  registrationForm: FormGroup;
  constructor(public registerUsr: HttpXrsService, public router: Router,fb: FormBuilder)
  { 
    this.registrationForm = fb.group({
      pass: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    
    },
    {
      validator:PasswordValidation.MatchPassword 
    });


    // this.registrationForm =fb.group({
    //   'userName': (this.user.userName, [
    //     Validators.required,
    //     Validators.pattern("[a-zA-Z ]*")
    //   ]),

    //   'userId':(this.user.userId, [
    //     Validators.required,
    //     Validators.minLength(4),
    //     Validators.maxLength(4),
    //     Validators.pattern("^[a-zA-Z]*$")
    //   ]),
    //   'emailId': (this.user.emailId, [
    //     Validators.required,
    //     Validators.pattern("^[A-Za-z]+.[^A-Za-z][^@]+@capco.com"),
    //   ]),
    //   'pass': (this.user.pass, [
    //     Validators.required,
    //     Validators.minLength(8),
    //   ]),
    //   'confirmPassword': (this.user.confirmPassword, [
    //     Validators.required,
    //     Validators.minLength(8),
    //   ]),


    // },

  }
  
   user = { userName: '', userId: '', emailId: '', pass: '', confirmPassword: '' };
  //ngOnInit(){}
  ngOnInit(): void {
  
    this.registrationForm = new FormGroup({
      'userName': new FormControl(this.user.userName, [
        Validators.required,
        Validators.pattern("[a-zA-Z ]*")
      ]),

      'userId': new FormControl(this.user.userId, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern("^[a-zA-Z]*$")
      ]),
      'emailId': new FormControl(this.user.emailId, [
        Validators.required,
        Validators.pattern("^[A-Za-z]+.[^A-Za-z][^@]+@capco.com"),
      ]),
      'pass': new FormControl(this.user.pass, [
        Validators.required,
        Validators.minLength(8),
      ]),
      'confirmPassword': new FormControl(this.user.confirmPassword, [
        Validators.required,
        Validators.minLength(8),
      ]),


    });
  }

  get userName() { return this.registrationForm.get('userName'); }
  get userId() { return this.registrationForm.get('userId'); }
  get emailId() { return this.registrationForm.get('emailId'); }
  get pass() { return this.registrationForm.get('pass'); }
  get confirmPassword() { return this.registrationForm.get('confirmPassword'); }


  registerfn() {
    let user  =  {
      username:  this.username,
      userid: this.userid,
      password: this.password,
      email: this.email
    }
// let user ={
// 	username: "nnnn",
// 	password: "anagah@123",
// 	name: "anagha",
// 	email: "anagha.sonawane@capco.com"

// }
    debugger;
    console.log(user);
    this.registerUsr.httprequest({ type: 'POST', url:'registration/save', data:user})
      .then((data:any) => {
        debugger;
        console.log(data,"data in post call");
        if (data) {
          console.log("data :", data);
          this.router.navigate(['/user-login']);
          console.log("Registration sucessfull")
        }
        else {
          console.log("Registration Unsucessfull");
        }
      });
  }
}
