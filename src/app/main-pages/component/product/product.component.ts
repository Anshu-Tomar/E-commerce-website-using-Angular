import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/data-type';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Productlists:Products[] |undefined;
  constructor( private product:ProductsService) { }

  ngOnInit(): void {
    this.product.Productlist().subscribe((data)=>{
      this.Productlists = data;
    })
  }

}
