import { environment } from './../../environments/environment';
import { County } from './../county';
import { StateInfoService } from './../state-info.service';
import { Component, OnInit,  OnChanges } from '@angular/core';
import { isNumber } from 'util';

// tslint:disable-next-line: max-line-length
const mapData = [{}];

const colorrange = {
  minvalue: '0',
  startlabel: 'Low',
  endlabel: 'High' ,
  code: '6baa01',
  gradient: '1',
  color: [{
    maxvalue: '500',
    code: 'f8bd19',
  }, {
    maxvalue: '1000',
    code: 'e44a00',
  }
  ]
};


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
    console.log('County detail is');
    console.log(this.countyDetail);
    console.log('size is' + this.countyDetail.length);
    this.countyDetail.forEach(info => {
      const countyInfo = info.split(',', 6);
      const county = new County();
      county.countyFlips = countyInfo[0];
      county.countyName = countyInfo[1];
      county.totalPositive = countyInfo[2];
      county.totalDeath = countyInfo[3];
      county.latitude = countyInfo[4];
      county.longitude = countyInfo[5];
      this.countyList.push(county);
    });
  }

  publishInfo() {
    console.log('County Info are');
    this.countyList.sort((a, b) => 0 - (a.countyName > b.countyName ? -1 : 1));
    console.log(this.countyList);
    this.countyList.forEach(e => {
      const tempData = new MapData();
      tempData.id = e.countyFlips.toString().substr(2, 4);
      tempData.value = e.totalPositive;
      const temp =  Number(tempData.value);
      if (!isNaN(temp)) {
        this.totalCases += temp;
        console.log('Data is ');
        console.log(temp);
      }
     // console.log(tempData);
      this.mapData.push(tempData);
    });

    console.log('Map Data are');
    console.log(this.totalCases);



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
      } // end of this.dataSource
}
