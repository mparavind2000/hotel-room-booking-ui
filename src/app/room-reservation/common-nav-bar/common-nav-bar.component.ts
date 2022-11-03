import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendApiService } from 'src/app/backend-api.service';
@Component({
  selector: 'app-common-nav-bar',
  templateUrl: './common-nav-bar.component.html',
  styleUrls: ['./common-nav-bar.component.css']
})
export class CommonNavBarComponent implements OnInit {
  message: string="";

  constructor(private router: Router, private backend:BackendApiService) { }

  ngOnInit(): void {
  }
  routerNavigate(url: string) {
    this.router.navigate([`/${url}`])
  }
  logOut(){
    this.routerNavigate("login");
    this.backend.logout().subscribe(
      (data:any) =>{
        if(data.message){
          this.message=data['message'];
          this.routerNavigate("login");
        }
      }
    )
  }
}
