import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
public name = '';
  constructor(public storage: Storage, public menu: MenuController ) {
    this.menu.enable(true, 'main-menu');
  }
  
  ngOnInit() {
    var result = JSON.parse(localStorage.getItem('user'));
    this.name = result.fname;
  }

}
