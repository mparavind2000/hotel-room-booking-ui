import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BackendApiService } from '../../backend-api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  showPasswordOne: boolean = false;
  msg : String = "";
  errorStatus: boolean= false;
  sucessStatus: boolean= false;
  constructor(private fb: FormBuilder, private router: Router, private backEndApiService: BackendApiService) { 
    this.registrationForm = this.fb.group({
      EmailAddress: ['', [Validators.email]],
      firstName: ['', [Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
      lastName: ['', [Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10,10}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)]],
      address: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  passwordVisibilityOne() {
    this.showPasswordOne = !this.showPasswordOne;
  }
  registrationUser(){
    console.log(this.registrationForm.value)
    let backendRegistration = { "email": this.registrationForm.value.EmailAddress, "password":this.registrationForm.value.password,
     "phoneNumber":this.registrationForm.value.phoneNumber, "address":this.registrationForm.value.address, "firstName":this.registrationForm.value.firstName,
    "lastName":this.registrationForm.value.lastName }
    this.backEndApiService.registerUser(backendRegistration).subscribe(
      (data:any) =>{
        if(data.accessToken){
          sessionStorage.setItem('accessToken',data['accessToken'])
          this.sucessStatus=true;
         this.msg= "Registred successfully";
         this.routerNavigate("user/dashboard/mybooking");
        }
        else if(data.msg){
          this.errorStatus=true;
         this.msg=data.msg; 
        }
        else{
          this.errorStatus=true;
          this.msg="something went wrong";
        }
      },
      (error:any) => {
        this.errorStatus=true;
        this.msg="something went wrong please connect with team"
        if(error.msg){
          this.errorStatus=true;
         this.msg=error.msg; 
        }
        else{
          this.errorStatus=true;
          this.msg="something went wrong";
        }
      }
    )
  }
  routerNavigate(url: string) {
    this.router.navigate([`/${url}`])
  }

}
