import { StateMapComponent } from './../state-map/state-map.component';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-death-map',
  templateUrl: './death-map.component.html',
  styleUrls: ['./death-map.component.css']
})
export class DeathMapComponent implements AfterViewInit {

  @ViewChild(StateMapComponent, {static: false})
  stateMap: StateMapComponent;



  constructor() { }
  ngAfterViewInit() {
    console.log('Checking');
    console.log(this.stateMap.totalCases);
  }


}
