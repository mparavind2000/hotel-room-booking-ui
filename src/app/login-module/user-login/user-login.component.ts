import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder,private router: Router) {
    this.loginForm = this.fb.group({
      EmailAddress: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  userLogin(){
    console.log(this.loginForm.value);
    this.routerNavigate("user/dashboard/mybooking");
  }
  passwordVisibility() {
    this.showPassword = !this.showPassword;
  }

  routerNavigate(url: string) {
    this.router.navigate([`/${url}`])
  }

}
