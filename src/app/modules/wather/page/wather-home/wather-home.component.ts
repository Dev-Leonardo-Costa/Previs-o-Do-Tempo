import { Component, OnDestroy, OnInit } from '@angular/core';
import { WatherService } from '../../services/wather-service.service';
import { WatherDatas } from 'src/app/models/interface/WatherInterface';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wather-home',
  templateUrl: './wather-home.component.html',
  styleUrls: []
})
export class WatherHomeComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'Ceará';
  watherDatas!: WatherDatas;
  seacherIcon = faMagnifyingGlass;

  constructor(private watherService: WatherService) { }

  ngOnInit(): void {
    this.getWatherDatas(this.initialCityName);
  }

  getWatherDatas(cityName: string): void {
    this.watherService.getWatherDatas(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        response && (this.watherDatas = response);
        console.log(this.watherDatas);
      },
      error: (error) => console.log(error)
    })
  }

  onSubmit(): void {
    this.getWatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
