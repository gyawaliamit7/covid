import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { County } from './county';

@Injectable({
  providedIn: 'root'
})
export class StateInfoService {

  countyList: County[] = [];
  countyDetailInfo: any[] = [];
  countyDetail = 'https://raw.githubusercontent.com/striblab/mn_covid_data/master/mn_positive_tests_by_county.csv?v=1586065901269';
  timeSeries = 'https://raw.githubusercontent.com/striblab/mn_covid_data/master/mn_statewide_timeseries.csv';
  timeDetailInfo: any[] = [];

  constructor(private http: HttpClient) { }
  getCountyDetail() {
    this.countyDetailInfo = [];
    this.http.get(this.countyDetail, {responseType: 'text'}).subscribe(
        data => {
          const list = data.split('\n');
          list.forEach( e => {
          this.countyDetailInfo.push(e);
        });
        }
      );
  }

  getTimeDetail() {
    this.timeDetailInfo = [];
    this.http.get(this.timeSeries, {responseType: 'text'}).subscribe(
      data => {
        const list = data.split('\n');
        list.forEach( e => {
         this.timeDetailInfo.push(e);
      });
      }
    );
  }




}
