import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { userLogin, userSignUp } from '../models/data-type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoginError = new EventEmitter<boolean>(false)
  constructor(private _http:HttpClient, private router:Router) { }

  userSignup(data:userSignUp){
    return this._http.post('http://localhost:3000/user',data,{ observe: 'response' })
    .subscribe((result) => {
      console.log(result)
      if(result){
        localStorage.setItem('user',JSON.stringify(result.body))
        this.router.navigate(['user/my-order'])
      }

    })
  }

  reloadUser(){
    if(localStorage.getItem('user')){
     
      this.router.navigate(['/my-order'])
    }
  }
  userLogin(data:userLogin){
    this._http.get(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,
    { observe: 'response' }
    ).subscribe((result:any)=>{
      console.log(result);
      if(result && result.body && result.body.length){
        // console.log("user logged");
        localStorage.setItem('user',JSON.stringify(result.body))
        this.router.navigate(['user/my-order'])
        
      }
      else{
        console.log("login failed");
        this.isLoginError.emit(true);
      }
      
    })
  }
}
