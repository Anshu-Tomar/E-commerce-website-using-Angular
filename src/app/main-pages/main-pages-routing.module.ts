import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { HomeComponent } from './component/home/home.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductComponent } from './component/product/product.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'product', component:ProductComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'product-details/:productId', component:ProductDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPagesRoutingModule { }
