import { environment } from './../../environments/environment';
import { County } from './../county';
import { StateInfoService } from './../state-info.service';
import { Component, OnInit,  OnChanges } from '@angular/core';
import { isNumber } from 'util';
import { getCounty, colorrange} from '../map-data';





export class MapData {
  id: string;
  value: number;

  constructor() {
    this.value = 0;
  }
}

@Component({
  selector: 'app-state-map',
  templateUrl: './state-map.component.html',
  styleUrls: ['./state-map.component.css']
})
export class StateMapComponent implements OnInit , OnChanges {
  countyList: County[] = [];
  countyDetail: any[] = [];

  dataSource: any;

  totalCases = 0;


  mapData: MapData[] = [];


  ngOnChanges() {
    this.totalCases = 0;
  }




  constructor(private stateInfo: StateInfoService) {
    this.stateInfo.getCountyDetail();
    this.dataSource = {
      chart: {
      animation: '0',
      showbevel: '0',
      usehovercolor: '1',
      showlegend: '1',
      legendposition: 'BOTTOM',
      legendborderalpha: '0',
      legendbordercolor: 'ffffff',
      legendallowdrag: '0',
      legendshadow: '0',
      caption: 'COVID CASES IN MINNESOTA COUNTY',
      connectorcolor: '000000',
      fillalpha: '80',
      hovercolor: 'CCCCCC',
      theme: 'fusion'
      },
      // tslint:disable-next-line: object-literal-shorthand
      colorrange: colorrange,
      data: this.mapData
      }; // end of this.dataSource

  }
  ngOnInit() {
    this.totalCases = 0;
    this.getInfo();
    this.getCounty();
    this.publishInfo();
  }

  getDetail() {
    this.totalCases = 0;
    this.getCounty();
    this.publishInfo();
  }

  getInfo() {
   this.countyDetail = this.stateInfo.countyDetailInfo;
  }

  getCounty() {
   this.countyList = getCounty(this.countyDetail);
  }

  publishInfo() {
    this.countyList.sort((a, b) => 0 - (a.countyName > b.countyName ? -1 : 1));
    this.countyList.forEach(e => {
      const tempData = new MapData();
      tempData.id = e.countyFlips.toString().substr(2, 4);
      tempData.value = e.totalPositive;
      const temp =  Number(tempData.value);
      if (!isNaN(temp)) {
        this.totalCases += temp;
      }
     // console.log(tempData);
      this.mapData.push(tempData);
    });
      } // end of this.dataSource
}
