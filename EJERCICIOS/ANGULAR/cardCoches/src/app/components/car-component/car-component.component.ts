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
    this.foto = 'https://es.gizmodo.com/el-cybertruck-de-tesla-feo-tenemos-que-repasar-lo-que-1840065516';
  }

}
