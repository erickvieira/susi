import { DetailsComponent } from './details.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DetailsComponent,
  ],
  declarations: [
    DetailsComponent,
  ],
  entryComponents: [
    DetailsComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class DetailsModule { }
