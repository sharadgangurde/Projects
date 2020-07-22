
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
 

@Injectable({
  providedIn: 'root'
})
export class CartService { 
  data: any;
  public allData: any;
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
 
  constructor(public http: HttpClient) {
    //this.getMyData()
    //this.getProducts()
  }
  getMyData(){
    let url='https://my-json-server.typicode.com/sharadgangurde/JSONFILE/db';
    let data:Observable<any>=this.http.get(url);
    data.subscribe(result=>{
       //console.log(result);
       this.data = result.arrayOfProducts;
       //console.log(this.data);
       return this.data;
    });
    
  

  }
  getProducts() {
    //console.log('DATA ALA RE '+ this.data);
    return this.allData;
  }
 
  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }
 
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}