import { Component } from '@angular/core';
import { easyInOutVer } from '../models/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    easyInOutVer,
  ]
})
export class HomePage {

  constructor() {}

}
