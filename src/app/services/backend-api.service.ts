import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError,  } from 'rxjs/operators';
import { Observable, throwError} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const url = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {


  constructor(private http: HttpClient) {
   }

  parkAVehicle(regNum: string) {
    const body = {regNum: regNum};
    console.log(regNum, body);
    return this.http.post(`${url}`, body, httpOptions)
                    .pipe(
                      catchError(this.handleError)
                    );
  }

  getSlot(regNum: string) {
    // tslint:disable-next-line:object-literal-shorthand
    const options = Object.assign(httpOptions, {params: {regNum: regNum}});
    console.log(options);
    return this.http.get(`${url}`, options)
                    .pipe(
                      catchError(this.handleError)
                    );
  }

  removeParkedVehicle(regNum: string) {
    return this.http.delete(`${url}/${regNum}`, httpOptions)
                    .pipe(
                      catchError(this.handleError)
                    );
  }

  getAvailableSlots() {

    return this.http.get(`${url}/availableSlots`, httpOptions)
                      .pipe(
                        catchError(this.handleError)
                      );
  }

  handleError( err: HttpErrorResponse) {
      return throwError('currently service is down.');
    }

}


