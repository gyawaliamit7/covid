import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateInfoService {

  countyDetailInfo: any[] = [];


  constructor(private http: HttpClient) { }
  countyDetail = 'https://raw.githubusercontent.com/striblab/mn_covid_data/master/mn_positive_tests_by_county.csv?v=1586065901269';

  getCountyDetail() {
  this.http.get(this.countyDetail, {responseType: 'text'}).subscribe(
      data => {
        const list = data.split('\n');
        list.forEach( e => {
         this.countyDetailInfo.push(e);
      });
      }
    );
  }

  getTopoJson(): Observable<any> {
    return this.http.get('../assets/county.json');
  }





}
