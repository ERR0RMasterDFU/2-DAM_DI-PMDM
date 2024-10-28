import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonBattleResponse } from '../models/pokemonBattleResponse.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonBattleService {

  constructor(private http: HttpClient) { }

  getListPokemon(): Observable<PokemonBattleResponse> {
    return this.http.get<PokemonBattleResponse>('https://pokeapi.co/api/v2/pokemon/?limit=1025');
  }
  
}
