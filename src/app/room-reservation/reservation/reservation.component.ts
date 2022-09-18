import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationFrom: FormGroup;
  DateErrorMessage:boolean= false;
  minDate = new Date(); // to get current date
  secondDate=false;
  minDate2 = new Date();
  displaySelectedRoom:boolean = false;
  displayedColumns: string[] = ['roomType', 'roomId', 'fromDate', 'toDate'];
  dataSource = [
    {roomType: 'Ac', roomId :234,fromDate: '31/05/2020', toDate: '01/08/2020'}
  ];
  seletedRoom:any=[
    { displayName:'AC', value:'ac' },
    { displayName:'Non AC', value:'nonac' },
    { displayName:'Duplex', value:'duplex' },
  ]
  constructor(private fb: FormBuilder) { 
    this.reservationFrom=this.fb.group({
      selectorControl:['', [Validators.required]],
      date:['123'],
      minDateControl:['',[Validators.required]],
      minDate2Control:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    
  }

  displayRooms(){
    this.displaySelectedRoom=true;
    this.reservationFrom.value.minDateControl > this.reservationFrom.value.minDate2Control ? this.DateErrorMessage=true : this.DateErrorMessage=false;
    //this.dataSource.push(this.reservationFrom.value);
    console.log(this.dataSource);
  }
  bookedRooms(){
  
  }
  selectedRoom(){
  
  }

}
