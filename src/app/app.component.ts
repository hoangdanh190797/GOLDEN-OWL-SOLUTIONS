import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetWeatherByLocationService } from './get-weather-by-location.service';
import { CardForecastComponent } from './card-forecast/card-forecast.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  //templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <div class="bg-primary text-center">
      <h1 class="text-bg-primary p-3">Weather Dashboard</h1>
    </div>
    <div class="container pt-4">
      <div class="row">
        <div class="col-sm-4">
          <div class="mr-auto, ml-auto">
            <h4>Enter a City Name</h4>
            <br />
            <input class="w-100 p-2" type="text" />
            <br />
            <button class="text-bg-primary w-100 p-2 my-2">Search</button>
          </div>
          <hr />
          <div>
            <button class="text-bg-secondary w-100 p-2 my-2">
              Use Current Location
            </button>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="row text-bg-primary">
            <div class="p-2 rounded col-6">
              <h2>
                {{ wLondon?.location.name }} ({{ wLondon?.location.localtime }})
              </h2>
              <h4>Temperature: {{ wLondon?.current.temp_c }} oC</h4>
              <h4>Wind: {{ wLondon?.current.wind_mph }} M/S</h4>
              <h4>Humidity: {{ wLondon?.current.humidity }} %</h4>
            </div>
            <div class="col-6">
              <div class="position-relative top-50 start-50 translate-middle">
                <img
                  style="height: 100px; width: 100px;"
                  src="{{ wLondon?.current.condition.icon }}"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <h1 class="py-3">4-Day Forecast</h1>
          </div>
          <div class="row">
            <app-card-forecast
              class="col-3"
              *ngFor="let weatherForecast of weatherForecastLodon"
              [weatherForecast]="weatherForecast"
            ></app-card-forecast>
          </div>
        </div>
      </div>
    </div>
  `,
  imports: [CardForecastComponent, CommonModule],
})
export class AppComponent {
  title = 'weatherDashboard';
  //
  weatherLodon: any = inject(GetWeatherByLocationService);
  wLondon: any = {};
  //
  weatherForecastLodon: any[] = [];
  constructor() {
    //
    this.weatherLodon.getWeatherLondon().then((wLodon: any) => {
      this.wLondon = wLodon;
    });
    //
    this.weatherForecastLodon = this.weatherLodon
      .getWheatherForecast()
      .then((weatherForecastLodon: any) => {
        this.weatherForecastLodon = weatherForecastLodon?.forecast.forecastday;
        console.log(this.weatherForecastLodon);
      });
  }
}
