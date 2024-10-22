import { Component } from '@angular/core';
import { CharactersListService } from '../../services/characters-list.service';
import { CharactersList } from '../../models/characters.interfaces';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent {

  listadoPersonajes: CharactersList [] = [];
  imagen: string = 'https://starwars-visualguide.com/assets/img/vehicles/' /**/ 

  constructor(private charactersService: CharactersListService){}

  ngOnInit(): void {
    this.charactersService.getCharactersList().subscribe(respuesta => {
      this.listadoPersonajes = respuesta.results;
    });
  }

  getImagen(url: string) {
    let id = url.slice(31, -1);
    return this.imagen.concat(id + '.jpg');
  }

}
