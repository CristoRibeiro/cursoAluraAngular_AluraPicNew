import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhotosReturn } from './model/photo.model';

const API = 'https://api.unsplash.com/';
const url = 'users/';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(private http: HttpClient) {}
  /*
  O Access Key deverá ser recuperado após realizar o cadastro da API unsplash e cadastrar sua aplicação no portal deles.  
*/
  acessKey: string = '';

  private headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    Authorization: `Client-ID ${this.acessKey}`,
  };

  listFromUserName(userName: string) {
    return this.http.get<PhotosReturn[]>(`${API}${url}${userName}/photos`, {
      headers: this.headerDict,
    });
  }

  listFromUserNamePaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<PhotosReturn[]>(`${API}${url}${userName}/photos`, {
      headers: this.headerDict,
      params,
    });
  }
}
