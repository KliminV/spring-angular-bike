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
    return this.http.get('server/api/v1/bikes', this.options);
  }

  getBike(id: number) {
    return this.http.get('server/api/v1/bikes/' + id, this.options);
  }

  createBikeRegistration(bike) {
    let body = JSON.stringify(bike);
    return this.http.post('server/api/v1/bikes', body, this.options);
  }
}
