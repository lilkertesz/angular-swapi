import { Injectable } from '@angular/core';
import { Starship } from '../models/starship';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResult } from '../models/apiresult';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//   }),
// };

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  url = 'https://swapi.dev/api/starships';
  constructor(private http: HttpClient) { }

  getStarships(): Observable<ApiResult> {
    return this.http.get<ApiResult>(this.url);
  }
}
