import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  cero = 0;
  uno = 1;
  dos = 2;
  tres = 3;
  cuatro = 4;
  cinco = 5;
  seis = 6;
  siete = 7;
  ocho = 8;
  nueve = 9;

  numero1 = 0;
  numero2 = 0;
  resultado = 0;

  postOperacion = 0;
  suma = false;
  resta = false;

  mostrarEnPantalla() {
  
    switch (this.postOperacion) {
      case 1:
        return this.resultado;
        break;

      case 2:
        return this.numero2;
        break;

      default:
        return this.numero1;
        break;
    }
  }

  borrarTodo () {
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
    this.postOperacion = 0;
    this.suma = false;
    this.resta = false;
  }

  seleccionarNumero1(numero:number){
    this.numero1 = numero;
  }

  seleccionarNumero2(numero:number){
    this.numero2 = numero;
  }

  sumar() {
    this.postOperacion = 2;
    this.suma = true;
  }

  restar() {
    this.postOperacion = 2;
    this.resta = true;
  }


  operacion() {
    this.postOperacion = 1;
    if(this.suma==true){
      this.resultado = this.numero1 + this.numero2;
    }else{
      this.resultado = this.numero1 - this.numero2;
    }
  }


}
