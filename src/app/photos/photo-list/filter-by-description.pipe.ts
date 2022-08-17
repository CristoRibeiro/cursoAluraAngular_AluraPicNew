import { Pipe, PipeTransform } from '@angular/core';
import { Photos } from '../photo/model/photo.model';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {
  transform(photos: Photos[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();
    if (descriptionQuery)
      return photos.filter((photo) =>
        photo.description?.trim().toLowerCase().includes(descriptionQuery)
      );
    else return photos;
  }
}
