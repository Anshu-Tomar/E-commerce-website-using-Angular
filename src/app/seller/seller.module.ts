import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SellerRoutingModule } from './seller-routing.module';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import {SharedPagesModule } from '../shared-pages/shared-pages.module'
@NgModule({
  declarations: [
    SellerAuthComponent,
    SellerHomeComponent,
    SellerUpdateProductComponent,
    SellerAddProductComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    SharedPagesModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SellerModule { }
