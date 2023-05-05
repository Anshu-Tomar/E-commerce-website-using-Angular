import { Component } from '@angular/core';
import { SellerService } from './service/seller.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private seller:SellerService){}

  ngOnInit():void{
    this.seller.reloadSeller()
  }
  title = 'app11';
}