import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpXrsService } from '../../providers/http-xrs.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfilepicService } from "../../providers/profilepic.service";



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  login: any;
  userid: string;
  password: any;

  user = {userId: '', passWord: ''};
  constructor(public loginServe: HttpXrsService, public router: Router,private usrservice: ProfilepicService) { }

  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'userId': new FormControl(this.user.userId, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern("^[a-zA-Z]*$")
      ]),
      'passWord': new FormControl(this.user.passWord, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  get userId() { return this.loginForm.get('userId'); }
  get passWord() { return this.loginForm.get('passWord'); }

  loginfn() {
    let logObj = {
      userid: this.userid,
      password: this.password
    }
    //console.log(logObj);
    this.loginServe.httprequest({ type: 'POST', url: 'login', data:logObj  })
      .then((data) => {
        if (data) {
          console.log("data :", data);
          this.router.navigate(['/main']);
          console.log("login sucessfull")
        }
        else {
          console.log("Invalid User");
        }
      });
  }

}
