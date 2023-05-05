import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cart, Products } from '../models/data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cartData = new EventEmitter()
  constructor(private _http:HttpClient) { }

  adddProducts(data:Products){
    console.log('service calling')
    return this._http.post('http://localhost:3000/products',data)
  }

  showProductList(){
   let list = this._http.get<Products[]>('http://localhost:3000/products');
   console.log(list)
   return list;
   
  }

  deleteProductList(id:number){
    return this._http.delete(`http://localhost:3000/products/${id}`)
  }

  getProduct(id:string){
    return this._http.get<Products[]>(`http://localhost:3000/products/${id}`)
  }

  updateProducts(product: Products) {
    console.log(product)
    return this._http.put<Products[]>(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }

  popularProduct(){
    return this._http.get<Products[]>( `http://localhost:3000/products?_limit=3`)
  }

  homePageProduct(){
    return this._http.get<Products[]>( `http://localhost:3000/products?_limit=6`)
  }

 Productlist(){
    return this._http.get<Products[]>( `http://localhost:3000/products`)
  }

 localAddtoCard(data:Products){
  let cartData = [];
  let localCart = localStorage.getItem('localCart');
  if (!localCart) {
    localStorage.setItem('localCart', JSON.stringify([data]));
    // this.cartData.emit(cartData);
  }
  else {
    cartData = JSON.parse(localCart);
    cartData.push(data);
    localStorage.setItem('localCart', JSON.stringify(cartData));
    this.cartData.emit(cartData);
  }
 }

 removeToCart(productId:number){
  let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items: Products[] = JSON.parse(cartData);
      items = items.filter((item: Products) => productId !== item.id);
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartData.emit(items);
    }
 }
 addToCart(cartDatas:Cart){
  return this._http.post('http://localhost:3000/cart',cartDatas)
 }

 getCartList(userId: number) {
  return this._http
    .get<Cart[]>('http://localhost:3000/cart?userId='+userId, {
      observe: 'response',
    })
    .subscribe((result) => {
      if (result && result.body) {
        this.cartData.emit(result.body);
      }
    });
}
removeCart(cartId: number) {
  return this._http.delete('http://localhost:3000/cart/' + cartId);
}

currentCart() {
  let userStore = localStorage.getItem('user');
  let userData = userStore && JSON.parse(userStore);
  return this._http.get<Cart[]>('http://localhost:3000/cart?userId=' + userData.id);
}
}

