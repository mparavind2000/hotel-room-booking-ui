import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { dateValidation } from '../dateValidation'

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationFrom: FormGroup;
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
      minDateControl:['',[Validators.required]],
      minDate2Control:['',[Validators.required,dateValidation]]
    })
    this.reservationFrom.controls.minDateControl.valueChanges
    .subscribe(
      x => this.reservationFrom.controls.minDate2Control.updateValueAndValidity()
    )
  }

  ngOnInit(): void {
    
  }

  displayRooms(){
    console.log(this.reservationFrom.value);
    this.displaySelectedRoom=true;

  }
  bookedRooms(){
    console.log("...")
  }
  selectedRoom(){
    const propertyNames = Object.keys(this.reservationFrom.value);
    console.log(propertyNames);
  }

}
