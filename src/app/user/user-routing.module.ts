import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/carts.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {path:'user',component:UserAuthComponent},
  {path:'my-order',component:MyOrderComponent},
  {path:'',component:CartsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
