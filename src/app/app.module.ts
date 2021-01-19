import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav";
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { DialogClienteComponent } from './cliente/dialog-cliente/dialog-cliente.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { DialogDeleteComponent } from './common/delete/dialog-delete/dialog-delete.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    DialogClienteComponent,
    DialogDeleteComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    FormsModule,
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
