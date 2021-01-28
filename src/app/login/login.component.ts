import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAuthService } from '../services/api-auth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(public apiAuth: ApiAuthService,
              private router: Router,
              private formBuilder: FormBuilder,
    
    ) {
      //   if(this.apiAuth.usuarioData) {
        //   this.router.navigate(['/']);
        // }
        
      }
      

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', {validators: [Validators.required]}],
      password: ['', {validators: [Validators.required]}],
    });
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
