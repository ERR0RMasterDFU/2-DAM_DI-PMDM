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

  @Input() life: number = 100;
  
  //showAnimation: boolean = false;

  @Output() ataqueRealizado = new EventEmitter<number>();
  @Input() turnoToca: boolean = false;

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

    if (changes['life']) {
      if (changes['life'].firstChange == false) {
        /*this.showAnimation = true;
        setTimeout(() => {
          this.showAnimation = false;
        }, 1000);*/
      }
    }
  }

  getLifeBarColor(): string {

    if (this.life == 100) {
      return 'primary';
    } else if (this.life >= 75) {
      return 'success';
    } else if (this.life >= 25) {
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
