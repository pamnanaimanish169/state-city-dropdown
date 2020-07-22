// tslint:disable
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }
  // https://www.universal-tutorial.com/rest-apis/free-rest-api-for-country-state-city
  // Generated Token
  // WkeknRP6kuo48I_MaYts7WoIqYXZO56iI3WWckPW2Go7bC70nciAhQbXm4ZUZx02IyE
  getCountries(auth_token) {
    const headers = new HttpHeaders()
    .set('Authorization' , 'Bearer ' +  btoa(auth_token))
    return this.http.get<any>(this.apiUrl + `countries/`, {'headers': headers})
      .pipe(map(res => {
        return res;
      }));
  }

  login() {
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

    return this.http.get<any>(this.apiUrl + `getaccesstoken`, { 'headers' : headers})
      .pipe(map(res => {
        return res;
      }));
  }
}
