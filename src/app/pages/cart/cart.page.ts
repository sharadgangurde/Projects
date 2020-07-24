import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
cart=[];
cartItemCount: BehaviorSubject<number>;
@ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor(public cartService: CartService, public router: Router) {}

  ngOnInit() {
    this.cart = this.cartService.getCart()
    this.cartItemCount = this.cartService.getCartItemCount()
  }
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
 
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
 
  // close() {
  //   this.modalCtrl.dismiss();
  // }
 
  async checkout() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.cart)
      }
    };
    this.router.navigate(['checkout'], navigationExtras);
  }
}
