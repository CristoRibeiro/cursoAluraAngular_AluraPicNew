import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent {
  constructor() {}
  @Input() title: string;
  @Input() description: string;
  @Input() infoFooter: string;
}
