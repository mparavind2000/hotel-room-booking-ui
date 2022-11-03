import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendApiService } from 'src/app/backend-api.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  showPassword: boolean = false;
  msg: string="";
  msgStatus: boolean= false;
  constructor(private fb: FormBuilder,private router: Router, private backendApi:BackendApiService) {
    this.loginForm = this.fb.group({
      EmailAddress: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  userLogin(){
    console.log(this.loginForm.value);
    let backendLoginForm= {
      "email":this.loginForm.value.EmailAddress, "password":this.loginForm.value.password
    }
    this.backendApi.loginUser(backendLoginForm).subscribe(
      (data:any) =>{
        if(data.accessToken){
          sessionStorage.setItem('accessToken',data['accessToken']);
          sessionStorage.setItem('customerId',data['customerId']);
          this.routerNavigate("user/dashboard/mybooking");
        }
        else if (data.msg){
          this.msgStatus=true;
          this.msg=data.msg;
          console.error(data.msg)
        }
        else{
          this.msgStatus=true;
          this.msg="some thing went wrong please connect with team";
        }
      },
      (error:any) =>{
        this.msgStatus=true;
        this.msg="some thing went wrong please connect with team";
        console.error(this.msg)
        if (error.msg){
          this.msgStatus=true;
          this.msg=error.msg;
          console.error(error.msg)
        }
        else{
          this.msg=error.error.msg;
        }
      }
    )
  }
  passwordVisibility() {
    this.showPassword = !this.showPassword;
  }

  routerNavigate(url: string) {
    this.router.navigate([`/${url}`])
  }

}
