import { Component, OnInit } from '@angular/core';
import { VehiclesList } from '../../interfaces/vehicles.interfaces';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.css'
})
export class VehiclesListComponent implements OnInit {

  listadoVehiculos: VehiclesList [] = [];

  ngOnInit(): void {
    
  }

}
