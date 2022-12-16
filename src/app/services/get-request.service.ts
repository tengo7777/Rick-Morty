import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetRequestService {
  apiUrl: string = "https://rickandmortyapi.com/api/character";

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getRickyMortyName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${name}`)
  }
}
