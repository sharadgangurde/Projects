import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public menu: MenuController, public router: Router) {
    this.menu.enable(false, 'main-menu');
    //this.authCheck();
  }
  // authCheck() {
  //   var result = JSON.parse(localStorage.getItem('user'));
  //   if(result) {
  //     this.router.navigate(['/dashboard'])
  //   }
  //   else null;
  // }


}
