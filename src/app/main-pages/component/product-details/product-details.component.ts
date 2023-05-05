import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart, Products } from 'src/app/models/data-type';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productData: any;
  productQuantity:number=1;
  removeCart = false;
  userIds :number  | any
  cartData:Products|undefined;
  constructor(private route:ActivatedRoute, private product:ProductsService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('productId');
    console.warn(productId);
    productId &&
    this.product.getProduct(productId).subscribe((data) => {
      console.warn(data);
      this.productData = data;
      let cartData= localStorage.getItem('localCart');
      if(productId && cartData){
        let items = JSON.parse(cartData);
        items = items.filter((item:Products)=>productId=== item.id.toString());
        if(items.length){
          this.removeCart=true
        }else{
          this.removeCart=false
        }
      }
      
      let user = localStorage.getItem('user');
      if(user){
        let userId= user && JSON.parse(user).id;
        this.product.getCartList(userId);

        this.product.cartData.subscribe((result)=>{
          let item = result.filter((item:Products)=>productId?.toString()===item.productId?.toString())
       if(item.length){
        this.cartData=item[0];
        this.removeCart=true;
       }
        })
      }   
  })
}

  removeToCart(product:number){
    this.product.removeToCart(product);
    this.removeCart = false

  }
  addToCart(){
    if(this.productData){
      this.productData.quantity = this.productQuantity;
      console.warn(this.productData);
      if(!localStorage.getItem('user')){
        console.warn(this.productData)
        this.product.localAddtoCard(this.productData)
        this.removeCart=true
      }
      else{
        console.log('hey')
        let users = localStorage.getItem('user');
        let userId= users && JSON.parse(users).id;
        console.log(userId)
        let cartData:Cart={
          ...this.productData,
          productId:this.productData.id,
          userId
        }
        delete cartData.id;
        this.product.addToCart(cartData).subscribe((result)=>{
          if(result){
           this.product.getCartList(userId);
           this.removeCart=true;
          }
        })        
      }
      
    }

  }

  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity+=1;
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1;
    }
  }
}
