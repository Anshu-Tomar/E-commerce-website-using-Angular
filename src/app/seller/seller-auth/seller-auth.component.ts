import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl ,Validators  } from "@angular/forms";
import { SellerService } from "../../service/seller.service";
import { Router , ActivatedRoute } from "@angular/router";
import { Login, SignUp } from 'src/app/models/data-type';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  isShowLogin=false;
  authError:string = '';
 form!: FormGroup;
 formLogin!:FormGroup;
 submitted= false;
  constructor( private seller:SellerService , private router:Router, private route:ActivatedRoute) { }

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
  }
  // onsubmit(data:any):void{
  //  console.log(this.form.value)
  //  this.seller.userSignup(data).subscribe((res) =>{
  //   console.log(res)
  //  })
  // }

  onsubmit(data:SignUp):void{
     data = this.form.value
     this.seller.userSignup(data)
     
    }
    login(data:Login):void{
      data = this.formLogin.value;
      this.authError =""
      // console.log(data)
      this.seller.userLogin(data);
      this.seller.isLoginError.subscribe((isError)=>{
        if(isError){
        this.authError="Email or password is not match";

        }
      })
     
      
     }

    openSignUp(){
      this.isShowLogin=false;

    }
    openLogin(){
      this.isShowLogin=true;
    }

}
