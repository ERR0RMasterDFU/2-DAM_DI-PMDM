import { Component } from '@angular/core';

@Component({
  selector: 'app-car-component',
  templateUrl: './car-component.component.html',
  styleUrl: './car-component.component.css'
})
export class CarComponentComponent {

  nombre = '';
  tipo = '';
  precio = 0;
  foto = '';

  ngOnInit(): void {
    this.nombre = 'Tesla Kput X';
    this.tipo = 'Automágico';
    this.precio = 2067;
    this.foto = 'https://png.pngtree.com/png-clipart/20231024/original/pngtree-tesla-model-s-white-transparent-background-png-image_13408947.png';
  }

}
