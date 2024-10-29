import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrl: './estado.component.css'
})
export class EstadoComponent {

  @Input() life: number = 100;
}
