import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  reactions = [
    {up: 0, down: 12},
    {up: 0, down: 43},
    {up: 2, down: 32},
    {up: 0, down: 21},
    {up: 2, down: 12},
    {up: 125, down: 13},
    {up: 0, down: 18},
    {up: 7, down: 10}
  ]

  constructor() {}

}
