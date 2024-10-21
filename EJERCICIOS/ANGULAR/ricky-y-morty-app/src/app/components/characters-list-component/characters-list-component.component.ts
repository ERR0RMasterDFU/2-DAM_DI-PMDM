import { Component, OnInit } from '@angular/core';
import { CharactersList } from '../../models/characters.interfaces';
import { CharacterServiceService } from '../../services/character-service.service';

@Component({
  selector: 'app-characters-list-component',
  templateUrl: './characters-list-component.component.html',
  styleUrl: './characters-list-component.component.css'
})
export class CharactersListComponentComponent implements OnInit {

  listadoPersonajes: CharactersList [] = [];

  constructor(private charactersService: CharacterServiceService){}

  ngOnInit(): void {
    this.charactersService.getCharactersList().subscribe(respuesta => {
      this.listadoPersonajes = respuesta.results;
    });
  }

}


