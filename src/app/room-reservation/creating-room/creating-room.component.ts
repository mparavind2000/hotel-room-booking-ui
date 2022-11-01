import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BackendApiService } from 'src/app/backend-api.service';
@Component({
  selector: 'app-creating-room',
  templateUrl: './creating-room.component.html',
  styleUrls: ['./creating-room.component.css']
})
export class CreatingRoomComponent implements OnInit {
  createroomForm: FormGroup;
  sucessmessage:string ="";
  messageStaatus:boolean= false;
  seletedRoom:any=[
    { displayName:'AC', value:'ac' },
    { displayName:'Non AC', value:'nonac' },
    { displayName:'Duplex', value:'duplex' },
    { displayName:'Non Duplex', value:'nonduplex' },
  ]
  constructor(private fb: FormBuilder, private backendapi:BackendApiService) { 
    this.createroomForm=this.fb.group({
      selectorControl:[],
      roomNbr: ['', [Validators.required, Validators.pattern(/^[0-9]{1,}$/)]]
    });
  }

  ngOnInit(): void {
  }
  createroom(){
    let createdroom = {'roomType':this.createroomForm.value.selectorControl, 'roomNbr':this.createroomForm.value.roomNbr};
    console.log(this.createroomForm.value);
    this.backendapi.createrooms(createdroom).subscribe(
      (data:any) =>{
        if(data.message){
          this.messageStaatus=true;
          this.sucessmessage=data['message']
        }
      },
      (error:any) =>{
        console.error(error)
      }
    )
  }
  selectedRoom(){

  }
}
