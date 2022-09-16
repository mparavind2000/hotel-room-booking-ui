import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {
  displayTbale:boolean = true;
  displayedColumns: string[] = ['roomType', 'roomId', 'fromDate', 'toDate', 'delete'];
  dataSource = [
    {roomType: 'Ac', roomId :234,fromDate: '31/05/2020', toDate: '01/08/2020'},
    {roomType: 'Non AC',roomId:342, fromDate: '02/06/2020', toDate:'06/06/2020' },
    {roomType: 'AC',roomId:123, fromDate: '03/06/2020', toDate: '04/06/2020'},
    {roomType: 'Non AC',roomId:456, fromDate: '05/06/2020', toDate: '09/06/2020'},
    {roomType: 'AC',roomId:342, fromDate: '31/07/2020', toDate: '12/08/2020'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
  deleteUser(element:any){
    console.log(element)
  }
}
