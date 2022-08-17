import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardsComponent } from './cards.component';

@NgModule({
  declarations: [CardsComponent],
  imports: [CommonModule],
  exports: [CardsComponent],
})
export class CardsModule {}
