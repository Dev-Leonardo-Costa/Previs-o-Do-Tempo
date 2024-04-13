import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WatherService {

  private apikey = "f5d33b00ae27f414ec087ec5c8d369f6";

  constructor(private http: HttpClient) { }

  getWatherDatas(cityName: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apikey}`,
      {}
    );
  }
}
