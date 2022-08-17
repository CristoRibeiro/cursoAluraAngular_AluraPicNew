import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photos } from '../../photo/model/photo.model';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnChanges {
  constructor() {}

  @Input() photos: Photos[] = [];
  @Input() filter: string;
  rows: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['photos']) {
      this.rows = [];
      for (let index = 0; index < this.photos.length; index += 6) {
        this.rows = [...this.rows, this.photos.slice(index, index + 6)];
      }
    }
  }
}
