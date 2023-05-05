import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';

const routes: Routes = [
  {path:"" , component:SellerAuthComponent},
  {
    path:"seller-home", component:SellerHomeComponent , canActivate:[AuthGuard]
  },
  {
    path:"seller-add-product", component:SellerAddProductComponent , canActivate:[AuthGuard]
  },
  {
    path:"seller-update-product/:id", component:SellerUpdateProductComponent , canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }