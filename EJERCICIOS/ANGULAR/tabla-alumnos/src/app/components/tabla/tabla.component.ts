import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface student {
  numAlumno : number
  nombre : string
  apellidos : string
  nif : string
  edad : number
  curso : string
}

const DATOS_ALUMNO: displayedColumns[] = [
  {numAlumno: 1, nombre: 'Hydrogen', apellidos: 1.0079, nif: 'H', edad: 'Hydrogen', curso: 1.0079},
  {numAlumno: 2, nombre: 'Helium', apellidos: 4.0026, nif: 'He', edad: 'Hydrogen', curso: 1.0079},
  {numAlumno: 3, nombre: 'Lithium', apellidos: 6.941, nif: 'Li', edad: 'Hydrogen', curso: 1.0079},
  {numAlumno: 4, nombre: 'Beryllium', apellidos: 9.0122, nif: 'Be', edad: 'Hydrogen', curso: 1.0079},
  {numAlumno: 5, nombre: 'Boron', apellidos: 10.811, nif: 'B', edad: 'Hydrogen', curso: 1.0079},
  {numAlumno: 6, nombre: 'Carbon', apellidos: 12.0107, nif: 'C', edad: 'Hydrogen', curso: 1.0079},
  {numAlumno: 7, nombre: 'Nitrogen', apellidos: 14.0067, nif: 'N', edad: 'Hydrogen', curso: 1.0079},
  {numAlumno: 8, nombre: 'Oxygen', apellidos: 15.9994, nif: 'O', edad: 'Hydrogen', curso: 1.0079},
  {numAlumno: 9, nombre: 'Fluorine', apellidos: 18.9984, nif: 'F', edad: 'Hydrogen', curso: 1.0079},
  {numAlumno: 10, nombre: 'Neon', apellidos: 20.1797, nif: 'Ne', edad: 'Hydrogen', curso: 1.0079},
];

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  displayedColumns: string[] = ['numAlumno', 'nombre', 'apellidos', 'nif', 'edad', 'curso'];
  dataSource = DATOS_ALUMNO;
  /**Necesitaremos:
- Conocer que en el array displayedColumns, se almacenan los nombres de las columnas que se muestran en la tabla, 
si eliminamos un elemento de ese array haremos que la columna se oculte. Si lo volvemos a añadir, la columna volverá a aparecer.



- En Angular Material tenemos los components Checkbox: https://material.angular.io/components/checkbox/overview.

- La idea es diseñar en el mismo componente de la tabla, una línea de elementos de selección múltiple (checkboxes) 
que nos permitan indicar si queremos que aparezca una columna o no. En el primer ejemplo que aparece en el Overview 
de la documentación de Checkbox, tenemos un ejemplo de Event binding sobre el evento change:

(change)="setAll($event.checked)"
- Con dicho evento estamos invocando al método setAll que debe estar definido en nuestro Typescript del componente. En dicho método se recibe una variable boolean que indica true si el checkbox ha sido marcado o false si ha sido desmarcado. Deberemos en dicho método eliminar o añadir la columna de displayedColumns.
 */


}
