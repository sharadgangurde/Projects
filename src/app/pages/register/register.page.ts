import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl, ValidatorFn} from '@angular/forms';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  data={};
  data2: any;
  newData: any;
  myForm: FormGroup;
  submitted = false;
  constructor(private storage: Storage, public router: Router, public menu: MenuController ,public formBuilder: FormBuilder) {
    this.myForm = new FormGroup({
      //fname: new FormControl('',[Validators.required, Validators.pattern('/^[A-Za-z]+$/')]),
      fname: new FormControl('', Validators.compose([Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*'), Validators.required])),
      lname: new FormControl('', Validators.compose([Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*'), Validators.required])),
      email: new FormControl('',[Validators.required, Validators.email]),
      mno: new FormControl('', Validators.compose([Validators.minLength(10), Validators.pattern('[0-9]*'), Validators.required])),
      addr: new FormControl('', Validators.compose([Validators.maxLength(30), Validators.required])),
      // password: this.formBuilder.group({
      //   password: ['', [Validators.required]],
      //   conf_pass: ['', [Validators.required]],
      // },
      // {validator: this.password(password, conf_pass)}),
      password: new FormControl('', Validators.compose([Validators.minLength(6), Validators.required])),
      conf_pass: new FormControl('', Validators.compose([Validators.minLength(6), Validators.required, this.equalto('password')])),
   });
   this.menu.enable(false, 'main-menu');
  }
  // password(formGroup: FormGroup) {
  //   const { value: password } = formGroup.get('password');
  //   const { value: confirmPassword } = formGroup.get('conf_pass');
  //   return password === confirmPassword ? null : { passwordNotMatch: true };
  // }

  get f() { return this.myForm.controls; }
  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
    
    let input = control.value;
    
    let isValid=control.root.value[field_name]==input
    if(!isValid)
    return { 'equalto': {isValid} }
    else
    return null;
    };
    }
  async register() {
      this.submitted = true;

        // stop here if form is invalid
        if (this.myForm.invalid) {
            return;
        } 

          console.log(this.myForm.value)
          let tmpdata = localStorage.getItem('data');
            this.data2 = {'data': this.myForm.value};
            if (tmpdata){
                this.newData = JSON.parse(tmpdata);
                this.newData.push(this.data2);
                localStorage.setItem('data',JSON.stringify(this.newData));
      
        }else{
      
          localStorage.setItem('data', JSON.stringify([this.data2]));
          
        }
        this.router.navigate(['/home']);
        
  
}
  
  ngOnInit() {
    

  }
}
