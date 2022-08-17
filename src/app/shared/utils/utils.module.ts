import { NgModule } from '@angular/core';
import { FirstLeterUpperCase } from './first-leter-uppercase.pipe';

@NgModule({
  declarations: [FirstLeterUpperCase],
  exports: [FirstLeterUpperCase],
})
export class UtilsModule {}
