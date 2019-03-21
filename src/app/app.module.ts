import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations'; uncomment to disable Material Animations
import { CustomMaterialModule } from './material.module';
import { MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/home/auth/login/login.component';
import { SignupComponent } from './components/home/auth/signup/signup.component';
// import { AlertComponent } from './components/alert/alert.component';
import { CommunityComponent } from './components/community/community.component';
import { MyDialogComponent } from './components/user/my-dialog/my-dialog.component';
import { CommentComponent } from './components/community/comment/comment.component';
import { SongDialogComponent } from './components/user/song-dialog/song-dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    // AlertComponent,
    CommunityComponent,
    MyDialogComponent,
    CommentComponent,
    SongDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    MatDialogModule
    // NoopAnimationsModule uncomment this to disable Material Animations
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
     SignupComponent,
    MyDialogComponent,
    CommentComponent ,
    SongDialogComponent ]
})
export class AppModule { }
