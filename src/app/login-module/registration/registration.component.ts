import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  showPasswordOne: boolean = false;
  constructor(private fb: FormBuilder, private router: Router) { 
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
  }
  routerNavigate(url: string) {
    this.router.navigate([`/${url}`])
  }

}
