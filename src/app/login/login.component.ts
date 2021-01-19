import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAuthService } from '../services/api-auth.service';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(public apiAuth: ApiAuthService,
              private router: Router
    ) {
      //   if(this.apiAuth.usuarioData) {
      //   this.router.navigate(['/']);
      // }

     }

    

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm.value);
    this.apiAuth.login(this.loginForm.value).subscribe(response => {
      if (response.exito === 1) {
        this.router.navigate(['/']);
      }
    });
  }

}
