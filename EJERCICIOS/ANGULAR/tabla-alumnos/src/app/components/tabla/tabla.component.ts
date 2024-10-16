import { Component, OnInit } from '@angular/core';

export interface Student {
  numAlumno : number
  nombre : string
  apellidos : string
  nif : string
  edad : number
  curso : string
}

const DATOS_ALUMNO: Student[] = [
  {numAlumno: 1, nombre: 'Adriana', apellidos: 'García Gómez', nif: '00480819G', edad: 8, curso: '2º EPO'},
  {numAlumno: 2, nombre: 'Mateo', apellidos: 'López Verdugo', nif: '93565520W', edad: 11, curso: '5º EPO'},
  {numAlumno: 3, nombre: 'Sofía', apellidos: 'Rodríguez Cebrian', nif: '50085582T', edad: 8, curso: '2º EPO'},
  {numAlumno: 4, nombre: 'Santiago', apellidos: 'González Sacristán', nif: '70912875B', edad: 9, curso: '3º EPO'},
  {numAlumno: 5, nombre: 'Valentina', apellidos: 'Pérez Arnau', nif: '10110404H', edad: 10, curso: '4º EPO'},
  {numAlumno: 6, nombre: 'Alejandro', apellidos: 'Martínez Toledano', nif: '70462176C', edad: 11, curso: '5º EPO'},
  {numAlumno: 7, nombre: 'Isabella', apellidos: 'Sánchez Corral', nif: '88520770A', edad: 10, curso: '4º EPO'},
  {numAlumno: 8, nombre: 'Diego', apellidos: 'Hernández Valdés', nif: '91080357N', edad: 8, curso: '2º EPO'},
  {numAlumno: 9, nombre: 'Luna', apellidos: 'Ramírez Espino', nif: '22235462M', edad: 9, curso: '3º EPO'},
  {numAlumno: 10, nombre: 'Miguel', apellidos: 'Torres Hidalgo', nif: '59262617N', edad: 9, curso: '3º EPO'},
];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent implements OnInit {

   // Lista de todas las columnas posibles
   columns: string[] = ['id', 'nombre', 'apellidos', 'nif', 'edad', 'curso'];

   // Lista de las columnas visibles
   displayedColumns: string[] = [];

  dataSource = DATOS_ALUMNO;

  ngOnInit() {
    this.displayedColumns = ['numAlumno', 'nombre', 'apellidos', 'nif', 'edad', 'curso']; // Por defecto, todas las columnas están visibles
  }

  // Método que se invoca cuando cambia el estado de un checkbox
  toggleColumn(column: string, checked: boolean): void {
    if (checked) {
      // Si el checkbox está marcado, agregamos la columna
      this.displayedColumns.push(column);
    } else {
      // Si el checkbox está desmarcado, eliminamos la columna
      const index = this.displayedColumns.indexOf(column);
      if (index >= 0) {
        this.displayedColumns.splice(index, 1);
      }
    }
  }
}
