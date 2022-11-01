import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BackendApiService } from 'src/app/backend-api.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  TableData:any;
  reservationFrom: FormGroup;
  DateErrorMessage:boolean= false;
  roomBooked:string="room was booked please select another room";
  minDate = new Date(); // to get current date
  secondDate=false;
  minDate2 = new Date();
  displaySelectedRoom:boolean = false;
  displayedColumns: string[] = ['roomType', 'roomId', 'roomNbr', 'isBooked'];
  dataSource :any=[];
  tablemessage:string="End Date should be greater than Start date"
  seletedRoom:any=[
    { displayName:'AC', value:'ac' },
    { displayName:'Non AC', value:'nonac' },
    { displayName:'Duplex', value:'duplex' },
    { displayName:'Non Duplex', value:'nonduplex' },
  ]
  constructor(private fb: FormBuilder, private backend:BackendApiService) { 
    this.reservationFrom=this.fb.group({
      selectorControl:['', [Validators.required]],
      roomId:[''],
      minDateControl:['',[Validators.required]],
      minDate2Control:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    
  }

  displayRooms(){
    this.displaySelectedRoom=true;
    this.reservationFrom.value.minDateControl > this.reservationFrom.value.minDate2Control ? this.DateErrorMessage=true : this.DateErrorMessage=false;
    this.reservationFrom.value.minDateControl = this.convert(this.reservationFrom.value.minDateControl );
    this.reservationFrom.value.minDate2Control=this.convert(this.reservationFrom.value.minDate2Control);
    let searchingroomdetails = { 'roomType':this.reservationFrom.value.selectorControl, 'fromDate':this.reservationFrom.value.minDateControl, 'toDate': this.reservationFrom.value.minDate2Control}
    this.backend.searchingrooms(searchingroomdetails).subscribe(
      (data:any) =>{
        this.dataSource=data;
      },
      (error:any) => {
        if(error.msg){
          this.DateErrorMessage=true
          this.tablemessage=error.msg;
        }
      }
    )
    console.log(this.dataSource);
  }
  bookedRooms(){
  
  }
  selectedRoom(){
  
  }
  convert(str:string){
    var date=new Date(str),
    mnth=("0"+(date.getMonth()+1)).slice(-2),
    day=("0"+(date.getDate())).slice(-2);
    return [mnth,day,date.getFullYear()].join("/")
  }
  bookRoom(element:any){
    let detailsOfRoomBooked = { 'roomId':element.roomId, 'fromDate':this.reservationFrom.value.minDateControl, 'toDate':this.reservationFrom.value.minDate2Control}
    this.backend.reservingroom(detailsOfRoomBooked).subscribe(
      (data:any) =>{
        if(data['message']){
          element.isBooked=true
          this.roomBooked=data['message']
        }
      },
      (error:any) =>{
        if(error['message']){
          element.isBooked=true
          this.roomBooked=error['message']
        }
      }
    )
  }
}
