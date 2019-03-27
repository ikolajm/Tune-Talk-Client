import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { SignupComponent } from '../app/components/home/auth/signup/signup.component'
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../app/components/home/auth/login/login.component';

import { UserService } from './services/user/user.service';
import { User } from './_models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Tune-Talk';
  // bool = false;
  userId = '';
 

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private userService: UserService
  ) {
    // this.userService.currentUser.subscribe(x => this.currentUser = x);
    
   }

  openSignup() {
    const modalRef = this.modalService.open(SignupComponent);
    modalRef.componentInstance; // should be the id
    }

  openLogin() {
    const modalRefTwo = this.modalService.open(LoginComponent);
    modalRefTwo.componentInstance; 
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['/home']);
    }
    
    userNav() { 
      
        this.router.navigate([`/user/${this.userService.id}`])
      }
      


    ngOnInit() {
      this.userId = localStorage.getItem('userId');
      
      
    }
  
}
