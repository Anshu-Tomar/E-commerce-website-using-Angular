// this is a signup models...
export interface SignUp{
    name:string;
    email:string;
    password:string;
}

// login models.....
export interface Login{
    email:string;
    password:string;
    id:number
}

export interface userSignUp{
    name:string;
    email:string;
    password:string;
}

// login models.....
export interface userLogin{
    email:string;
    password:string;
    id:number
}

// products
export interface Products{
    p_name: string;
    p_price: string;
    p_color: string;
    p_category: string;
    p_description: string
    p_image: string ;
    id:number;
    quantity:undefined | number;
    productId:undefined|number
}

// cart
export interface Cart{
    p_name: string;
    p_price: string;
    p_color: string;
    p_category: string;
    p_description: string
    p_image: string ;
    id:number | undefined;
    quantity:undefined | number;
    userId:number;
    productId:number
}
// priceSummary
export interface priceSummary{
    price:number,
    discount:number,
    tax:number,
    delivery:number,
    total:number
  }
  