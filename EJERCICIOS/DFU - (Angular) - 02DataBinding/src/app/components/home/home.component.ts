import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  nombre = '';
  apellidos = '';
  edad = 0;

  ngOnInit(): void {
    this.nombre = 'David';
    this.apellidos = 'Falla Urtiaga';
    this.edad = 19;
    throw new Error('Method not implemented.');
  }

  calcBirthYear () {
    return 2024 - this.edad;
  }

}
