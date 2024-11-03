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
  letraNif = ''
  expresionReg = /^\d{8}$/

  user = new UserDto('', '', '', '', '', '', '', '');
  submitted = false

  constructor() {}

  addUser() {
    console.log(this.user);
    this.submitted = true;
  }

  validacionForm(password: string, rePassword: string, numNif: string) {
    if(!this.expresionReg.test(numNif)){
      alert("El NIF o DNI DEBE estar compuesto por 8 dígitos.");
    }else{
      if(password == rePassword){
        this.user.nif = this.user.nif.concat(this.letraNif);
        this.addUser();
      }else{
        alert("Los campos de contraseña NO coinciden");
      }
    }
  }

  calcularLetraNif(numNif: string) {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let numero = parseInt(numNif);
    let resto = numero % 23;
    this.letraNif = letras[resto];
    return this.letraNif;
  }
  
}