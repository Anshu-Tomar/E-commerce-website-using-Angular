import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, SignUp } from '../models/data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root',
})
export class SellerService {

  SellerLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter<boolean>(false)
  constructor(private _http: HttpClient , private router:Router) {}

  userSignup(data: SignUp) {
    // console.warn("i am services...");
    // return this._http.post(' http://localhost:3000/seller',data)


    this._http
      .post(' http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        this.SellerLoggedIn.next(true)
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['seller/seller-home'])
        console.warn(result);
      });
    return false;
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.SellerLoggedIn.next(true)
      this.router.navigate(['seller/seller-home'])
    }
  }

  // login service
  userLogin(data:Login){
    this._http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    { observe: 'response' }
    ).subscribe((result:any)=>{
      console.log(result);
      if(result && result.body && result.body.length){
        console.log("user logged");
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['seller/seller-home'])
        
      }
      else{
        console.log("login failed");
        this.isLoginError.emit(true)
        
      }
      
    })
  }
}
