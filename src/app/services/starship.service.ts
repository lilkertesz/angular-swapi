import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiResult } from '../models/apiresult';

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
