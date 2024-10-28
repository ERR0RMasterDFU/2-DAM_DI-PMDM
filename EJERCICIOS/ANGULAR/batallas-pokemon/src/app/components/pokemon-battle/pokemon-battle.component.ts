import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemonBattleResponse.interfaces';
import { PokemonBattleService } from '../../services/pokemon-battle.service';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrl: './pokemon-battle.component.css'
})
export class PokemonBattleComponent implements OnInit {

  pokemonIdUno: number = 1;
  pokemonIdDos: number = 1;

  listadoPokemon: Pokemon[] = [];
  constructor(private pokemonService: PokemonBattleService) {}

  ngOnInit(): void {
    this.pokemonService.getListPokemon().subscribe((response) => {
      this.listadoPokemon = response.results;
    });
  }

  getIdPokemonUno(id: number) {
    this.pokemonIdUno = id;
    return this.pokemonIdUno;
  }

  getIdPokemonDos(id: number) {
    this.pokemonIdDos = id;
    return this.pokemonIdDos;
  }

}
