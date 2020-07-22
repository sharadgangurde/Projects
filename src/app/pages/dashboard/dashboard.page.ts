import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MenuController } from '@ionic/angular';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public name = '';
  public items: any ='';
  singleItem: any ='';
  constructor(public storage: Storage, public router: Router, public menu: MenuController, private http: HttpClient ) {
    
    this.getData();
    
  }
  gotoDetail(singleItem) {
    //console.log(singleItem);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(singleItem)
      }
    };
    this.router.navigate(['product-detail'], navigationExtras);
  }
  getData(){
    let url='https://my-json-server.typicode.com/sharadgangurde/JSONFILE/db';
    let data:Observable<any>=this.http.get(url);
    data.subscribe(result=>{
       //console.log(result);
       this.items = result.arrayOfProducts;
       console.log(this.items);
    })

  }

  ngOnInit() {
    var result = JSON.parse(localStorage.getItem('user'));
    this.name = result.fname;
  }

}
