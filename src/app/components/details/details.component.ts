import { Spot } from './../../models/spot';
import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  spot: Spot;
  private classificacaoColors = ['success', 'warning', 'danger']
  private classificacaoLabels = ['-20min', 'de 20 a 40min', '+40min']

  constructor(
    public navParams: NavParams,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.spot = this.navParams.get('spot')
  }

  close(id?: number) {
    this.modalController.dismiss(id);
  }

  get classificacaoColor(): string {
    return this.classificacaoColors[this.spot.indicador];
  }

  get classificacaoLabel(): string {
    return this.classificacaoLabels[this.spot.indicador];
  }

}
