import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { first } from 'rxjs/operators';


import { UserService } from '../../../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // @Input ()
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  // error = '';

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private router: Router,
    private route: ActivatedRoute,
    // private alertService: AlertService,
    private userService: UserService
  ) { 
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]] 
    })
  }


  get f() { return this.loginForm.controls;  }
 

  onSubmit() {
    console.log(this.loginForm)
  this.submitted = true;
  this.activeModal.close(this.loginForm.value);

  if(this.loginForm.invalid) {
    return;
  }
  this.loading = true;
  this.userService.login(this.loginForm.value)
    // .pipe(first())
    .subscribe(
      data => {
        // this.alertService.success('Registration Successful!', true);
        // console.log(data);
        this.router.navigate([`/user/${this.userService.id}`]);
      },
      error => {
        // this.alertService.error(error);
        this.loading = false;
    });  
}

closeModal() {
  this.activeModal.close('Modal Closed');
}

  ngOnInit() {
    
  }

}
