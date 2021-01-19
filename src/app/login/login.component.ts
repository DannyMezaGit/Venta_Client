import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from '../services/api-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(public apiAuth: ApiAuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.apiAuth.login(this.email, this.password).subscribe(response => {
      console.log(response);
    });
  }

}
