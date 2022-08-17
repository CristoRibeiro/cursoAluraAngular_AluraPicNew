import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { DarkOnHoverModule } from 'src/app/shared/directives/dark-on-hover.module';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { PhotoModule } from '../photo/photo.module';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { SearchPhotoComponent } from './search/search-photo.component';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchPhotoComponent,
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardsModule,
    UtilsModule,
    DarkOnHoverModule,
  ],
})
export class PhotoListModule {}
