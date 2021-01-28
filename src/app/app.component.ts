import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './models/usuario';
import { ApiAuthService } from './services/api-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  usuario: Usuario;

 
  constructor(public apiAuthService: ApiAuthService,
              private router: Router        
            ) {
              this.apiAuthService.usuario.subscribe(res => {
                this.usuario = res;
                console.log('Cambio el objeto' + res);
              });
    
  }

  logout() {
    this.apiAuthService.logout();
    this.router.navigate(['/login']);
  }
}
