import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  imgUrl: string;
  desc1: string;
  desc2: string;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  data: Product[] = [
    { 
      id: 0, 
      name: 'SNEAKERS MENS', 
      price: 750, 
      imgUrl: 'https://ae01.alicdn.com/kf/H4ed96b2d643e4556a82d7c2300db4684C.jpg', 
      amount: 0,
      desc1: 'Available Offers',
      desc2: 'Bank Offer 10% Instant Discount on ICICI Bank Credit and Debit CardsT&C'
    },
    { 
      id: 1, 
      name: 'MENS LONG SHIRT', 
      price: 1200, 
      imgUrl: 'https://img10.joybuy.com/N0/s560x560_jfs/t1/34182/26/13452/182783/5d2f154eE63ced238/bdaa784d455b6909.jpg.dpg', 
      amount: 0,
      desc1: 'Available Offers',
      desc2: 'Bank Offer 10% Instant Discount on ICICI Bank Credit and Debit CardsT&C'
    },
    { 
      id: 2, 
      name: 'MENS FITNESS T SHIRTS', 
      price: 1099, 
      imgUrl: 'https://contents.mediadecathlon.com/p551528/2000x2000/sq/fts100_fitness_cardio_t-shirt_-_grey_domyos_by_decathlon_8278626_551528.jpg?k=8e0ea84d0e765c80ea0cb6dff77d2ff2', 
      amount: 0,
      desc1: 'Available Offers',
      desc2: 'Bank Offer 10% Instant Discount on ICICI Bank Credit and Debit CardsT&C'
    },
    { 
      id: 3, 
      name: 'GUESS CONNECT WATCH', 
      price: 580, 
      imgUrl: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0', 
      amount: 0,
      desc1: 'Available Offers',
      desc2: 'Bank Offer 10% Instant Discount on ICICI Bank Credit and Debit CardsT&C'
    },
    { id: 4, 
      name: '70s RETRO GLAM KEFIAH', 
      price: 449, 
      imgUrl: 'https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0', 
      amount: 0,
      desc1: 'Available Offers',
      desc2: 'Bank Offer 10% Instant Discount on ICICI Bank Credit and Debit CardsT&C'
    },
    { 
      id: 5, 
      name: 'KIDS-JEANS 25', 
      price: 599, 
      imgUrl: 'https://5.imimg.com/data5/QP/JN/MY-5395209/kids-jeans-250x250.jpg', 
      amount: 0,
      desc1: 'Available Offers',
      desc2: 'Bank Offer 10% Instant Discount on ICICI Bank Credit and Debit CardsT&C'
    },
    { 
      id: 6, 
      name: 'ELEMENTS FORMAL SHIRT', 
      price: 499, 
      imgUrl: 'https://cdn.shopclues.com/images/thumbnails/61169/320/320/812E9EOgkXL1488870490.jpg', 
      amount: 0,
      desc1: 'Available Offers',
      desc2: 'Bank Offer 10% Instant Discount on ICICI Bank Credit and Debit CardsT&C'
    },
    { 
      id: 7, 
      name: 'BABY GIRL JACKET', 
      price: 399, 
      imgUrl: 'https://cdn.shopify.com/s/files/1/0047/5670/1251/products/Cute-1-5y-baby-girls-jacket-kids-boys-fashion-coats-with-ear-hoodie-spring-girl-clothes.jpg_640x640_6b968044-b3ae-4358-aa7a-affdb65fe13e.jpg?v=1583259304', 
      amount: 0,
      desc1: 'Available Offers',
      desc2: 'Bank Offer 10% Instant Discount on ICICI Bank Credit and Debit CardsT&C'
    },
    { 
      id: 8, 
      name: 'MENS FASHION CASUAL SHIRT', 
      price: 650, 
      imgUrl: 'https://ebaay.net/ebaay-admin/images/61bEgpKCE9L._AC_UL1500_.jpg', 
      amount: 0,
      desc1: 'Available Offers',
      desc2: 'Bank Offer 10% Instant Discount on ICICI Bank Credit and Debit CardsT&C'
    },
    { 
      id: 9, 
      name: 'MENS HOODED LEISURE', 
      price: 890, 
      imgUrl: 'https://img1.cfcdn.club/33/8d/334b3947655043a74fbe4443e0513a8d_350x350.jpg', 
      amount: 0,
      desc1: 'Available Offers',
      desc2: 'Bank Offer 10% Instant Discount on ICICI Bank Credit and Debit CardsT&C'
    }
  ];
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
 
  constructor() {}
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    console.log('cart items count are '+this.cartItemCount);
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