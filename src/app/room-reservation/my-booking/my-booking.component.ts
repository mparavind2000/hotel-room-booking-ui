import { Component, OnInit } from '@angular/core';
import { BackendApiService } from 'src/app/backend-api.service'; 

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {
  displayTbale:boolean = true;
  displayedColumns: string[] = ['reservationId', 'customerId', 'roomId', 'roomNbr', 'roomType', 'isBooked', 'fromDate', 'toDate'];
  dataSource = [];
  roomBookedmessage:string="";

  constructor(private backend:BackendApiService) { }

  ngOnInit(): void {
    this.backend.reservations().subscribe(
      (data:any) =>{
        this.dataSource=data
      },
      (error:any) =>{
        console.error(error)
      }
    )
  }
  deleteUser(element:any){
    console.log(element)
  }
}
