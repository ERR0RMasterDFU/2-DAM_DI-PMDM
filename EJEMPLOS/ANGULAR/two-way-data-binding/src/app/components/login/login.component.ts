import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //1. Property binding
  valoracion = 5;

  imgURL = 'https://upload.wikimedia.org/wikipedia/commons/d/db/Mercadona_Nuevo_Modelo_de_Tienda4.jpg';


  //2. Event binding

  showUserInfo() {
    alert("Hola :V")
  }


  //3. TWO WAY DATA BINDING.
  nombre='Mercadona';


}
