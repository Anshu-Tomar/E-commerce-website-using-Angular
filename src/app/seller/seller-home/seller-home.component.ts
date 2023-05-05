import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/data-type';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  productMessage: string |undefined;
    productsLists :undefined | Products[]
  constructor( private productList:ProductsService) { }

  ngOnInit(): void {
    this.getProductList()
      }

    getProductList(){
      this.productList.showProductList().subscribe((res)=>{
        console.log(res);
        this.productsLists = res;
      })
    }
  deleteItems(id:number){
    console.warn('test id ' ,id)
    this.productList.deleteProductList(id).subscribe((res)=>{
      if(res){
        this.productMessage = 'Product is deleted'
      }
      this.getProductList()
    })
    setTimeout(()=>(this.productMessage = undefined),3000)
  }
}
