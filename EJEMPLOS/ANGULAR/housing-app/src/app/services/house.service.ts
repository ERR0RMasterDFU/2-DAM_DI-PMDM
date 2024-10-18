import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { House } from '../interfaces/house.interfaces';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  //providedIn: 'root',
  type: ProviderType.SERVICE,
  scope: ProviderScope.SINGLETON
})
export class HouseService {
  
  constructor(private http: HttpClient) { }
    
    getHouseList(): Observable<House []> {
      return this.http.get<House[]>('http://localhost:3000/houses');
    }
      
}
