import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation/reservation.component';
import { RouterModule, Routes } from '@angular/router';  


//angular material
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { CommonNavBarComponent } from './common-nav-bar/common-nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonLandingComponent } from './common-landing/common-landing.component';
import { MatMenuModule } from '@angular/material/menu';

const routes: Routes = [
  
  { path: 'dashboard', component: CommonLandingComponent ,children:[
    {path:'mybooking', component:MyBookingComponent},
    { path: 'reservation', component: ReservationComponent }
  ]},
  
]

@NgModule({
  declarations: [
    ReservationComponent,
    MyBookingComponent,
    CommonNavBarComponent,
    CommonLandingComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    RouterModule.forChild(routes)
  ]
})
export class RoomReservationModule { }
