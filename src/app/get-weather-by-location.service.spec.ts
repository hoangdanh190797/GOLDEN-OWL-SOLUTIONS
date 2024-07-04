import { TestBed } from '@angular/core/testing';

import { GetWeatherByLocationService } from './get-weather-by-location.service';

describe('GetWeatherByLocationService', () => {
  let service: GetWeatherByLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetWeatherByLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
