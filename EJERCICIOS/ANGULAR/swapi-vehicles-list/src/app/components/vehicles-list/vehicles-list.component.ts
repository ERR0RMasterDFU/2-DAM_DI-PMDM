import { Component, OnInit } from '@angular/core';
import { VehiclesList } from '../../interfaces/vehicles.interfaces';
import { VehiclesListService } from '../../services/vehicles-list.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.css'
})
export class VehiclesListComponent implements OnInit {

  listadoVehiculos: VehiclesList [] = [];
  imagen: string = 'https://starwars-visualguide.com/assets/img/vehicles/'

  constructor(private vehiclesService: VehiclesListService){}

  ngOnInit(): void {
    this.vehiclesService.getVehiclesList().subscribe(respuesta => {
      this.listadoVehiculos = respuesta.results;
    });
  }

  getImagen(url: string) {
    let id = url.slice(31, -1);
    return this.imagen.concat(id + '.jpg');
  }

}