import { DetailsComponent } from './../components/details/details.component';
import { TouristSpotService } from './../services/spot.service';
import { ModalController } from '@ionic/angular';
import { InteractionService } from './../services/interaction.service';
import { UserService } from 'src/app/services/user.service';
import { Spot } from './../models/spot';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  spots: Spot[] = null;
  showInList = false;

  constructor(
    public userServ: UserService,
    private spotServ: TouristSpotService,
    private intServ: InteractionService,
    private modalController: ModalController,
  ) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.spotServ.getList().subscribe((data) => {
      this.spots = data;
    }, _ => {
      this.intServ.presentGenericAlert({
        header: 'Eita',
        message: `Deu ruim`
      });
    });
  }

  async details(spot: Spot) {
    const modal = await this.modalController.create({
      component: DetailsComponent,
      componentProps: { spot }
    });
    await modal.present();
  }

  reload() {
    location.reload()
  }
}
