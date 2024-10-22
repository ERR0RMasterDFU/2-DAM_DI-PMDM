import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharactersListResponse } from '../models/characters.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersListService {

  constructor(private http: HttpClient) {}

  getCharactersList(): Observable<CharactersListResponse> {
    return this.http.get<CharactersListResponse>('http://swapi.dev/api/people');
  }
}
