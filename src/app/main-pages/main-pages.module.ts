import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPagesRoutingModule } from './main-pages-routing.module';
import { HomeComponent } from './component/home/home.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ProductComponent } from './component/product/product.component';
import {SharedPagesModule } from '../shared-pages/shared-pages.module'
import { CategoryComponent } from './component/category/category.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    ProductComponent,
    CategoryComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    MainPagesRoutingModule,
    SharedPagesModule
  ]
})
export class MainPagesModule { }
