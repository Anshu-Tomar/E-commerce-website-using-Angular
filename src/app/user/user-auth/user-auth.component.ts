import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart, Products, userLogin, userSignUp } from 'src/app/models/data-type';
import { ProductsService } from 'src/app/service/products.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  isShowLogin=false;
  authError:string = '';
 form!: FormGroup;
 formLogin!:FormGroup;
 submitted= false;
  constructor( private user:UserService , private router:Router, private route:ActivatedRoute, private product:ProductsService) { }

  ngOnInit(): void {
   
    this.form = new FormGroup({
      name:new FormControl(null, [Validators.required]),
      email: new FormControl(null,[Validators.required]),
      password: new FormControl(null, [Validators.required , Validators.maxLength(8)])
    });

    this.formLogin = new FormGroup({
      email: new FormControl(null,[Validators.required]),
      password: new FormControl(null, [Validators.required , Validators.maxLength(8)])
    });
    this.user.reloadUser();
  }
  
  onsubmit(data:userSignUp):void{
    data = this.form.value
    this.user.userSignup(data)
  
    
   }
   login(data:userLogin):void{
     data = this.formLogin.value;
     this.authError =""
     console.log(data)
     this.user.userLogin(data);
     this.user.isLoginError.subscribe((isError)=>{
       if(isError){
       this.authError="Email or password is not match";

       }else{
        this.localCartToRemoteCart();
       }
     })
    }

   openSignUp(){
     this.isShowLogin=false;

   }
   openLogin(){
     this.isShowLogin=true;
   }


   localCartToRemoteCart(){
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('user');
    let userId= user && JSON.parse(user).id;
    if(data){
     let cartDataList:Products[]= JSON.parse(data);
   
     cartDataList.forEach((product:Products, index)=>{
       let cartData:Cart={
         ...product,
         productId:product.id,
         userId
       }
       delete cartData.id;
       setTimeout(() => {
         this.product.addToCart(cartData).subscribe((result)=>{
           if(result){
             console.warn("data is stored in DB");
           }
         })
       }, 500);
       if(cartDataList.length===index+1){
         localStorage.removeItem('localCart')
       }
     })
    }
 
    setTimeout(() => {
     this.product.getCartList(userId)
    }, 2000);
     
   }

}
