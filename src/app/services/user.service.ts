import { User } from './../models/user';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _instance: User = {
    id: '201908075214892',
    nome: 'Xxxxxxx Xx Xxxx',
    foto: 'assets/imgs/profile.jpg',
    sexo: 'M',
    dtNasc: moment(1574448273168).toDate(),
  };

  get instance() {
    if (this._instance) {
      return this._instance;
    } else {
      const currentUserJson = localStorage.getItem('currentUser');
      if (currentUserJson) {
        this._instance = JSON.parse(currentUserJson);
      } else {
        this._instance = {} as User;
      }
      return this._instance;
    }
  }

  isAuthenticated() {
    return this.instance && this.instance.id;
  }

}
