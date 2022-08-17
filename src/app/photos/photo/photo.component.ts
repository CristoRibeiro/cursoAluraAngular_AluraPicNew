import { Component, Input } from '@angular/core';
import { Photos } from './model/photo.model';

@Component({
  selector: 'ap-photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent {
  @Input() photo: Photos;
  @Input() filter: string;
}
