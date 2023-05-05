import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Products } from 'src/app/models/data-type';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {

  addProduct!:FormGroup;
  addProductSuccessfully :string|undefined;
  constructor( private products:ProductsService) { }

  ngOnInit(): void {
    this.getformData();
  }
  getformData(){
    this.addProduct = new FormGroup({
      p_name : new FormControl(null, [Validators.required]),
      p_price: new FormControl(null),
      p_color: new FormControl(null),
      p_category: new FormControl(null),
      p_description: new FormControl(null),
      p_image: new FormControl(null),
    })
  }
  removeFormData(){
    this.addProduct = new FormGroup({
      p_name : new FormControl(''),
      p_price: new FormControl(''),
      p_color: new FormControl(''),
      p_category: new FormControl(''),
      p_description: new FormControl(''),
      p_image: new FormControl(''),
    });

  }
  onsubmit(data:Products){
    console.log(this.addProduct.value)
    data= this.addProduct.value
    this.products.adddProducts(data).subscribe((res)=>{
      console.log(res)
      if(res){
        this.addProductSuccessfully = " Product is  successfully added..."
      }
      setTimeout(()=>(this.addProductSuccessfully=undefined),3000)
    });
    this.removeFormData();
 
  }
}
