import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   menuType : string = 'default'
   sellerName : string = ''
   userName : string = ''
   cardItem = 0
  constructor( private router:Router, private product:ProductsService) { }

  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{     
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){        
          this.menuType = 'seller'
          if(localStorage.getItem('seller')){
            let sellerStore = localStorage.getItem('seller');
            let sellerData =  sellerStore && JSON.parse(sellerStore)[0]
            this.sellerName= sellerData.name;
          }
        }
        else if(localStorage.getItem('user')){
          let userStore =  localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.name
          console.log(this.userName)
          this.menuType = 'user'
        }
        else{
          this.menuType='default'
        }
      }
    });
  let cardData = localStorage.getItem('localCard')
  if(cardData){
    this.cardItem= JSON.parse.length
  }
  this.product.cartData.subscribe((res)=>{
    this.cardItem = res.length
    console.log(this.cardItem)
  })
  }

  logout(){
    localStorage.removeItem('seller');
    this.router.navigate(['/'])
  }

  userlogout(){
    localStorage.removeItem('user');
    this.router.navigate(['/'])
  }
}
