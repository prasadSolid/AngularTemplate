import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { BaseRequest, UserVM, WorkflowRequest } from '../../shared/models';
import { getLocaleDateFormat } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  userVM : UserVM = { UserName : null, Password : null};

  loginForm: FormGroup;
  loading = false;
  msgs: any[];
  error: string;
  
  constructor(
    private router: Router, private _auth: AuthService ) {     
  }  
    
     
  ngOnInit() {
    this.createLoginForm();   
  }
  createLoginForm(): void {
      // this.loginForm = this.fb.group({
      //   username: ['', Validators.required],
      //   password: ['', Validators.required]
      // });
  }

  loginUser(newUserVM : UserVM){   
  
    //let userVM : UserVM = { UserName : "admin@admin", Password : "tsAdmin"}
    
    console.log(this.createRequest(newUserVM));
   
    this._auth.userLogIn(this.createRequest(newUserVM));
   /* .subscribe(
     res => console.log(res),
     err => console.log(err)
   ) */
  }

  createRequest(userVM : UserVM):WorkflowRequest<UserVM>{
    return new WorkflowRequest(userVM);     
  }

}
