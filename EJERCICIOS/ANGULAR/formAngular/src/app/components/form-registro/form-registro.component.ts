import { Component } from '@angular/core';
import { UserDto } from '../../models/user.dto';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrl: './form-registro.component.css'
})
export class FormRegistroComponent {

  sexoList = ['Hombre', 'Mujer', 'Otro'];
  rePassword = '';
  letraNif = '';
  expRegNif = /^\d{8}$/;
  expRegTel = /^\d{9,15}$/;
  expRegEmail = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;

  user = new UserDto('', '', '', '', '', '', '', '');
  submitted = false

  constructor() {}

  addUser() {
    console.log(this.user);
    this.submitted = true;
  }

  calcularLetraNif(numNif: string) {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let numero = parseInt(numNif);
    let resto = numero % 23;
    this.letraNif = letras[resto];
    return this.letraNif;
  }

  validacionForm(rePassword: string) {
    if(!this.expRegNif.test(this.user.nif)){
      alert("El NIF o DNI DEBE estar compuesto por 8 dígitos.");
    } else if (!this.expRegTel.test(this.user.telefono)) {
      alert("El Nº de teléfono DEBE escribirse SIN prefijo y SIN espacios.");
    } else if (this.user.password != rePassword) {
      alert("Las contraseñas NO coinciden.");
    } else if (!this.expRegEmail.test(this.user.email)) {
      alert("El correo DEBE contener una @.");
    } else {
      this.user.nif = this.user.nif.concat(this.letraNif);
      this.addUser();
    }
  }

}
