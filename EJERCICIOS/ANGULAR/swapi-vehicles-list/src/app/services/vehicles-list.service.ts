import { Injectable } from '@angular/core';
import { VehiclesListResponse } from '../interfaces/vehicles.interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class VehiclesListService {

  constructor(private http: HttpClient) {}

  getVehiclesList(): Observable<VehiclesListResponse> {
    return this.http.get<VehiclesListResponse>('http://swapi.dev/api/vehicles');
  }

}