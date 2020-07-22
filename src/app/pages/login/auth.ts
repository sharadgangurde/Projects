import {Injectable} from '@angular/core';
// import {Http} from '@angular/http';
// import {Api} from './api';
// import {Settings} from './settings';
import {Storage} from "@ionic/storage";


@Injectable()
export class Auth {
    isLoggedIn: Boolean;
    user: any;

    constructor(public storage: Storage) {


        this.storage.get('user').then((user) => {

            this.user = user;
            this.isLoggedIn = true;
        });

    }

    login(user) {

        return this.storage.set('user', user).then(() => {
            this.isLoggedIn = true;
            this.user = user;
        });

    }

    logout() {

        this.storage.remove('user').then(() => {
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
