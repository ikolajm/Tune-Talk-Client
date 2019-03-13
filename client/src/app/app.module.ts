import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

=======
import { HttpClientModule } from '@angular/common/http'
>>>>>>> 4543bad158a9462742ceba87caefdbd832670294

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/home/auth/login/login.component';
import { SignupComponent } from './components/home/auth/signup/signup.component';
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
<<<<<<< HEAD
    AlertComponent
=======
    
>>>>>>> 4543bad158a9462742ceba87caefdbd832670294
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
    
=======
    HttpClientModule
>>>>>>> 4543bad158a9462742ceba87caefdbd832670294
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ SignupComponent ]
})
export class AppModule { }
