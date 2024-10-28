import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonResponse } from '../../models/pokemonResponse.interfaces';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
    
  @Input() idPoke: number | undefined;
  
  // ÚLTIMA HORA
  @Input() idUno: number | undefined;
  @Input() idDos: number | undefined;
  
  pokemon: PokemonResponse | undefined;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(): void {
    this.pokemonService.getPokemon(this.idPoke!).subscribe((response) => {
      this.pokemon = response;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idPoke'] && changes['idPoke'].currentValue !== undefined) {
      this.loadPokemon();
    }
  }

  atacarPokemon(id: number | undefined) {
    
  }

}
