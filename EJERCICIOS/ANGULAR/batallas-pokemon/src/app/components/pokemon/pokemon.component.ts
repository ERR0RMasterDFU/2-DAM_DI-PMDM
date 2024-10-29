import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
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

  @Output() ataqueRealizado = new EventEmitter<number>();

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

  getLifeBarColor(ps: number): string {
    if (ps == ps) {
      return 'primary';
    } else if (ps >= ps*75/100) {
      return 'success';
    } else if (ps >= ps*50/100) {
      return 'warning';
    } else {
      return 'danger';
    }
  }

  hacerAtaque(atk: number) {
    let max = atk/2;
    let min = atk/4;
    let ataque = Math.floor(Math.random() * (max - min) + min);
    this.ataqueRealizado.emit(ataque);
  }
}
