import { ItemComponent } from './item/item.component';
import { DetailsModule } from './../components/details/details.module';
import { LivemapModule } from './../components/livemap/livemap.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LivemapModule,
    DetailsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [
    Tab1Page,
    ItemComponent
  ]
})
export class Tab1PageModule {}
