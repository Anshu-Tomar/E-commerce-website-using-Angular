import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/models/data-type';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  
  productData: any;

  updateProduct!: FormGroup;
  productMessage: string |undefined ;
  constructor( private route:ActivatedRoute, 
    private product:ProductsService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {

  
    this.updateProduct = new FormGroup({
      p_name : new FormControl(''),
      p_price: new FormControl(''),
      p_color: new FormControl(''),
      p_category: new FormControl(''),
      p_description: new FormControl(''),
      p_image: new FormControl(''),
    })
    let productId = this.route.snapshot.paramMap.get('id');
    // console.warn(productId);
    productId &&
    this.product.getProduct(productId).subscribe((data) => {
      // console.warn(data);
      this.productData = data;

      //  this.updateProduct.controls["description"].setValue(post.description);
      //  this.updateProduct.controls["imagepath"].setValue(post.imagePath);
      //  this.updateProduct = true;


    });
  }

  onUpdate(data:any){
    data = this.updateProduct.value
    if (this.productData) {
      data.id = this.productData.id;
    }
    console.log(data.id)
    this.product.updateProducts(data).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product has updated';
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
    console.log(data);
    this.router.navigate(['/seller/seller-home'])
  }
  
}
