import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) { }

  parkAVehicle() {

  }
  getSlot() {
    return this.http.get('http://localhost:5000/:regNum');
  }
  removeParkedVehicle() {
    return this.http.get('http://localhost:5000/:regNum');
  }
  getAllSlots() {
    return this.http.get('http://localhost:5000/availableSlots');
  }
}
