import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/guards/auth.guard";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
    {path:"" ,loadChildren: () => import('./main-pages/main-pages.module').then(mod=>mod.MainPagesModule)},
   
    {path:"seller" ,loadChildren: () => import('./seller/seller.module').then(mod=>mod.SellerModule)},
    {path:"user" ,loadChildren: () => import('./user/user.module').then(mod=>mod.UserModule)},
    {path:"**", component:PageNotFoundComponent}
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}