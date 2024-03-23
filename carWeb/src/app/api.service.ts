import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCars() {
    const {appUrl} = environment;
    //URL адреса е грешен         
    return this.http.get(`${appUrl}/cars`);
  }
}
