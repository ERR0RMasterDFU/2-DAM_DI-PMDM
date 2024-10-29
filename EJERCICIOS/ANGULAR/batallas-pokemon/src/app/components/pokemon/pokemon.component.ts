import { Component, EventEmitter, Input, OnInit, SimpleChanges } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonResponse } from '../../models/pokemonResponse.interfaces';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
    
  @Input() idPoke: number | undefined;
  
  pokemon: PokemonResponse | undefined;

  //@Output() onAttackDone = new EventEmitter<>

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.generarPokemon();
  }

  generarPokemon(): void {
    this.pokemonService.getPokemon(this.idPoke!).subscribe((response) => {
      this.pokemon = response;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idPoke'] && changes['idPoke'].currentValue !== undefined) {
      this.generarPokemon();
    }
  }

  atacarPokemon() {
    //let ataque Math.random
  }

}
