import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '' , loadChildren: () => import('./login-module/login-module.module').then(m => m.LoginModuleModule)},
  {path: 'user' , loadChildren: () => import('./room-reservation/room-reservation.module').then(m => m.RoomReservationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
