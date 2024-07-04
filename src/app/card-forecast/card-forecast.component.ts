import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-forecast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card bg-secondary text-bg-secondary" style="">
      <div class="card-body">
        <h5 class="card-title">({{weatherForecast?.date}})</h5>
        <img src={{weatherForecast?.day.condition.icon}} alt="">
        <p class="card-text">
          Temp: {{weatherForecast?.day.avgtemp_c}}
          <br>
          Wind: {{weatherForecast?.day.maxwind_mph}}
          <br>
          Humidity: {{weatherForecast?.day.avghumidity}}
        </p>
      </div>
    </div>
  `,
  styleUrl: './card-forecast.component.css',
})
export class CardForecastComponent {
  @Input() weatherForecast! : any;
}
