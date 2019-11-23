import { Spot } from './../../models/spot';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss'],
})
export class ChatItemComponent implements OnInit {

  @Input() mensagem: string;
  @Input() autor: 'eu' | 'susi';
  @Input() result?: Spot;
  @Input() criadoEm: string;

  constructor() { }

  ngOnInit() {}

}
