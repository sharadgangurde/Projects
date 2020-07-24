import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
//import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
 data: any;
 //checkoutForm: FormGroup;
  constructor(public route: ActivatedRoute, public alertController: AlertController) { 
  //   this.checkoutForm = new FormGroup({
  //     address: new FormControl('',[Validators.required]),
  //  });
  }
//   get f() { return this.checkoutForm.controls; }
//   async checkout() {
//     if (this.checkoutForm.invalid) {
//       return;
//   }
// }
selectedOptions(options) {
  console.log(options);
}
placeorder() {
  console.log('ORDER PLACED');
  this.presentAlert()
}
async presentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Order placed',
    message: 'Thank You',
    buttons: ['Continue Shopping']
  });

  await alert.present();
}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      // console.log(this.data)
      }
    });
  }

}
