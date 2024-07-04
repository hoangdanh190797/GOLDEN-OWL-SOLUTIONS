import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherByLocationService {
baseURL= 'https://api.weatherapi.com/v1/current.json?q=London&key=c75ff2b1bcea474f99490325240307'
baseURLForecast = 'https://api.weatherapi.com/v1/forecast.json?q=London&days=4&hour=6&key=c75ff2b1bcea474f99490325240307'
  constructor() {}
  async getWeatherLondon(): Promise <any>{
    const data = await fetch(this.baseURL);
    return await data.json();
  }
  async getWheatherForecast(): Promise <any>{
    const data = await fetch(this.baseURLForecast);
    return await data.json();
  }
}
