import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms'
import { SharedPagesModule } from "./shared-pages/shared-pages.module";
import { HttpClientModule } from "@angular/common/http";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedPagesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
