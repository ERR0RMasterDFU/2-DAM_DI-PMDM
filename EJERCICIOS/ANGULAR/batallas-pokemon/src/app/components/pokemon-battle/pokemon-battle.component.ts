import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonBattleResponse } from '../../models/pokemonBattleResponse.interfaces';
import { PokemonBattleService } from '../../services/pokemon-battle.service';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrl: './pokemon-battle.component.css'
})
export class PokemonBattleComponent implements OnInit {

  listadoPokemon: Pokemon[] = [];
  //peliculasSelected: number[] = [];
  constructor(private pokemonService: PokemonBattleService) {}

  ngOnInit(): void {
    this.pokemonService.getListPokemon().subscribe((response) => {
      this.listadoPokemon = response.results;
    });
  }

  

  /*getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  getTwoChallengers() {
    return this.getRandomNumber(1, this.listadoPokemon.length)
  }*/



}
