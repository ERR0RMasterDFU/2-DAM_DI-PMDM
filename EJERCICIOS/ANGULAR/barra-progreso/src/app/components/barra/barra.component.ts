import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrl: './barra.component.css'
})
export class BarraComponent {

  @Input() progreso = 0;
  @Input() color = 0;

  getColor(): string {
    
    if(this.progreso<=25) {
      return 'danger';
    }else if(this.progreso<=50) {
        return 'warning';
      }else if(this.progreso<=75){
          return 'success';
        }else if(this.progreso<100){
            return 'primary';
          }else if(this.progreso>=100) {
              return 'secondary';
          }
    return '';      
  }

}