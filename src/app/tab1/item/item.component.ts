import { Spot } from './../../models/spot';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  @Input() spot: Spot;
  @Output('on-item-click') onItemClick = new EventEmitter<Spot>();
  private classificacaoColors = ['successlight', 'warninglight', 'dangerlight']

  constructor() { }

  ngOnInit() {}

  get classificacaoColor(): string {
    return this.classificacaoColors[this.spot.indicador];
  }

}
