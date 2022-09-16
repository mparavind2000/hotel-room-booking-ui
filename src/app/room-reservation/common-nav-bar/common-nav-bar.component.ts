import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-nav-bar',
  templateUrl: './common-nav-bar.component.html',
  styleUrls: ['./common-nav-bar.component.css']
})
export class CommonNavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  routerNavigate(url: string) {
    this.router.navigate([`/${url}`])
  }
  logOut(){
    console.log("logout")
  }
}
