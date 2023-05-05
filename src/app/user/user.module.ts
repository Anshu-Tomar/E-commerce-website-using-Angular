import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MyOrderComponent } from './my-order/my-order.component';
import { CartsComponent } from './carts/carts.component';
import { SharedPagesModule } from "../shared-pages/shared-pages.module";

@NgModule({
  declarations: [
    UserAuthComponent,
    MyOrderComponent,
    CartsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPagesModule
  ]
})
export class UserModule { }
