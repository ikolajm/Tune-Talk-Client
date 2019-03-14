import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { first } from 'rxjs/operators';

import { AlertService } from '../../../../_services/alert.service';
import { AuthenticationService } from '../../../../_services/authentication.service';
import { UserService } from '../../../../_services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input ()
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private userService: UserService
  ) { 
    this.createForm();

    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  } 
    private createForm() {
      this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        avatar_url: ['', Validators.required],
        email: ['', Validators.required] 
      })
    }

    // get f() { return this.registerForm.controls; }

    private onSubmit() {
    this.submitted = true;
    this.activeModal.close(this.registerForm.value);

    if(this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.signup(this.registerForm.value)
      // .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration Successful!', true);
          this.router.navigate(['/user']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
      });  
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }

   ngOnInit() {
    
  }
}
