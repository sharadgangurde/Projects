import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  public data: any;
  cartItemCount: BehaviorSubject<number>;
  //public items: any;
  constructor(private route: ActivatedRoute, public cartService: CartService, public router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      // console.log(this.data)
      }
    });
  }
  addToCart(items) {
    //console.log(items);
   this.cartService.addProduct(items)
   this.router.navigate(['/cart'])
  }
  
  ngOnInit() {
    this.cartItemCount = this.cartService.getCartItemCount()
  }

}
