import { Injectable } from '@angular/core';
import { VehiclesList } from '../interfaces/vehicles.interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclesListService {

  constructor(private http: HttpClient) {}

  getVehiclesList(): Observable<VehiclesList[]> {
    return this.http.get<VehiclesList[]>('http://localhost:3000/vehicles-list');
  }
}
