import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  /*pokemonList: Pokemon[] = [];
  imagen = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private pokemonService: PokemonService) { }
  
  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe((response) => {
      this.pokemonList = response.results;
    });
  }

  getImagen(url: string) {
    let id = url.slice(34, -1);
    return this.imagen.concat(id + '.png');
  }*/

}
