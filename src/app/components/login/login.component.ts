import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: any;
  public password: any;

  constructor(private router: Router) { }
  ngOnInit() {
  }
  login(e) {
    if (this.username.value == 'admin' && this.password.value == 'admin') {
      this.router.navigate(['/main']);
    }
  }

}
