import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';
import { UtilsModule } from '../shared/utils/utils.module';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    PhotoListModule,
    PhotoFormModule,
    PhotoModule,
  ],
})
export class PhotosModule {}
