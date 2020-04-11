import { StateInfoService } from './../state-info.service';
import { getTimeline } from './../map-data';
import { Component, OnInit } from '@angular/core';
import { State } from '../state';

export class Categories  {
  category: Label[];
  constructor() {
    this.category = [];
  }
}

export class Label {
  label: any;
}

export class DataSet {
  data: Value[];
  constructor() {
    this.data = [];
  }
}

export class Value {
  value: any;
}

@Component({
  selector: 'app-cases-graph',
  templateUrl: './cases-graph.component.html',
  styleUrls: ['./cases-graph.component.css']
})
export class CasesGraphComponent implements OnInit {
  timelineDetail: any[] = [];
  timelineList: State[] = [];
  categories: Categories[] = [];
  dataset: DataSet[] = [];

  dataSource: any;

  constructor(private stateInfo: StateInfoService) {
    this.categories[0] = new Categories();
    this.dataset[0] = new DataSet();
    this.stateInfo.getTimeDetail();
    this.dataSource = {
      chart: {
        caption: 'CASES REPORTED DUE TO COVID 19 IN MINNESOTA',
        subCaption: '2020',
        refreshinterval: '3',
        numdisplaysets: '10',
        theme: 'fusion',
        drawAnchors: '0',
        plotToolText: '$label: $dataValue Cases',
        showRealTimeValue: '0',
        labelDisplay: 'rotate'
        },
        categories: this.categories,
        dataset: this.dataset,
        };
  }

  ngOnInit() {
    this.getInfo();
    this.getTimeLine();
    this.publishInfo();
  }

  getDetail() {
    if (this.timelineList.length === 0) {
      this.getInfo();
      this.getTimeLine();
      this.publishInfo();
    }
  }

  getInfo() {
    this.timelineDetail = this.stateInfo.timeDetailInfo;
  }
  getTimeLine() {
    this.timelineList = getTimeline(this.timelineDetail);

  }

  publishInfo() {
    this.timelineList.forEach(info => {
      const tempCat = new Label();
      tempCat.label = info.date;
      if (tempCat.label !== 'date') {
        this.categories[0].category.push(tempCat);
      }
      const tempData = new Value();
      tempData.value = info.newPositiveTest;
      if (tempData.value !== 'new_positive_tests') {
        this.dataset[0].data.push(tempData);
      }
   });

  }



}
