import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BikeService {


  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient) {

  }

  getBikes() {
    let token = localStorage.getItem('access_token');
    return this.http.get('server/api/v1/bikes', {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)});
  }

  getBike(id: number) {
    let token = localStorage.getItem('access_token');
    return this.http.get('server/api/v1/bikes/' + id, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)});
  }

  createBikeRegistration(bike) {
    let body = JSON.stringify(bike);
    return this.http.post('server/api/v1/bikes', body, this.options);
  }
}
