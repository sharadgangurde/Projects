import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // email: string;
  // password: string;
  submitted=false;
  loginForm: FormGroup;
  constructor(private storage: Storage,public router:Router, public menu: MenuController ,public alertController: AlertController, public formBuilder: FormBuilder) {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', Validators.compose([Validators.minLength(6), Validators.required])),
   });
   this.menu.enable(false, 'main-menu');
  }
  get f() { return this.loginForm.controls; }
  async login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
  } 
    var result = JSON.parse(localStorage.getItem('data'));

    //console.log(result[0].data.email);
    let formData = this.loginForm.value;
    for(let obj of result) {
      if(obj.data.email == formData.email && obj.data.password == formData.password)
      {
        var emailid = obj.data.email;
        var pass = obj.data.password;
        var allData = obj.data;
      } 
    }
    console.log(allData);
    
    if(emailid && pass) {
      localStorage.setItem('user', JSON.stringify(allData));
      this.router.navigate(['/dashboard']);
    } else this.presentAlert()
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Invalid Credentials',
      message: 'Try again',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
