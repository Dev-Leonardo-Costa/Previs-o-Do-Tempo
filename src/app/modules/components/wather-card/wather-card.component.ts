import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WatherDatas } from 'src/app/models/interface/WatherInterface';

@Component({
  selector: 'app-wather-card',
  templateUrl: './wather-card.component.html',
  styleUrls: []
})
export class WatherCardComponent{
  @Input() watherDatasCard!: WatherDatas

  minTenperaturaIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

}
