import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: Boolean;
  user: any;
  constructor(public storage: Storage) {
   

      this.user =  JSON.parse(localStorage.getItem('user'));
      this.isLoggedIn = true;

  }
//   login(user) {

//     return  localStorage.setItem('user', user);
//         this.isLoggedIn = true;
//         this.user = user;

// }

logout() {

    localStorage.remove('user').then(() => {
        this.isLoggedIn = false;
        this.user = null;
    });

}

isAuthenticated() {
    return this.isLoggedIn;
}

getUser() {
    return this.user;
}

}
