import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAuthService } from '../services/api-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(public apiAuth: ApiAuthService,
              private router: Router
    ) {
        if(this.apiAuth.usuarioData) {
        this.router.navigate(['/']);
      }

     }

    

  ngOnInit(): void {
  }

  login(){
    this.apiAuth.login(this.email, this.password).subscribe(response => {
      if (response.exito === 1) {
        this.router.navigate(['/']);
      }
    });
  }

}
