import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  correo : string = '';
  contrasenya : string = '';

  registar() {
    (console.log('Correo:', this.correo));
    (console.log('Contraseña:', this.contrasenya));
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

}