import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/data-type';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularProducts:Products[] |undefined;
  homeProduct:Products[] |undefined;
  constructor(private product:ProductsService) { }

  ngOnInit(): void {
    this.product.popularProduct().subscribe((res)=>{
      this.popularProducts = res
    })

    this.product.homePageProduct().subscribe((data)=>{
      this.homeProduct = data;
    })
  }

}
