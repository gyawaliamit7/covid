import { StateMapComponent } from './../state-map/state-map.component';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { StateInfoService } from './../state-info.service';
import { County } from '../county';
import { getCounty, colorrange, deathrange} from '../map-data';



export class MapData {
  id: string;
  value: number;

  constructor() {
    this.value = 0;
  }
}

@Component({
  selector: 'app-death-map',
  templateUrl: './death-map.component.html',
  styleUrls: ['./death-map.component.css']
})


export class DeathMapComponent implements OnInit {

  countyList: County[] = [];
  countyDetail: any[] = [];

  dataSource: any;

  totalDeath = 0;


  mapData: MapData[] = [];

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
      caption: 'COVID DEATH IN MINNESOTA COUNTY',
      connectorcolor: '000000',
      fillalpha: '80',
      hovercolor: 'CCCCCC',
      theme: 'fusion'
      },
      // tslint:disable-next-line: object-literal-shorthand
      colorrange: deathrange,
      data: this.mapData
      }; // end of this.dataSource

  }

  ngOnInit() {
    this.totalDeath = 0;
    this.getInfo();
    this.getCounty();
    this.publishInfo();
  }

  getDetail() {
    this.totalDeath = 0;
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
      tempData.value = e.totalDeath;
      const temp =  Number(tempData.value);
      if (!isNaN(temp)) {
        this.totalDeath += temp;
      }
     // console.log(tempData);
      this.mapData.push(tempData);
    });
      } // end of this.dataSource



}
