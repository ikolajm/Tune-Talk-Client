import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from '../app/components/home/auth/signup/signup.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tune-Talk';

  constructor(
    private modalService: NgbModal
  ) { }

  openSignup() {
    const modalRef = this.modalService.open(SignupComponent);
    // modalRef.componentInstance; // should be the id
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}
