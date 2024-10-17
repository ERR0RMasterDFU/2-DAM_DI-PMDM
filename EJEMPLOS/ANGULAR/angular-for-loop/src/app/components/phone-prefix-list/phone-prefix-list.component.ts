import { Component } from '@angular/core';

export interface TelefonoPais {
  nombre: string;
  bandera: string;
  prefijo: number[];
}

const PREFIJOS_PAISES: TelefonoPais[] = [
  {nombre: 'España', bandera: '', prefijo: [34]},
  {nombre: 'España', bandera: '', prefijo: []},
  {nombre: 'España', bandera: '', prefijo: []},
  {nombre: 'España', bandera: '', prefijo: []},
  {nombre: 'España', bandera: '', prefijo: []},
  {nombre: 'España', bandera: '', prefijo: []}
]

@Component({
  selector: 'app-phone-prefix-list',
  templateUrl: './phone-prefix-list.component.html',
  styleUrl: './phone-prefix-list.component.css'
})
export class PhonePrefixListComponent {

}
