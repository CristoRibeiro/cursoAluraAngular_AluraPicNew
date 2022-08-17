import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { PhotosReturn } from '../photo/model/photo.model';
import { PhotoService } from '../photo/photo.service';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<PhotosReturn[]>> {
  constructor(private photoService: PhotoService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userName = route.params['userName'];
    return this.photoService.listFromUserNamePaginated(userName, 1);
  }
}
