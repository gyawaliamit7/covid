import { State } from './state';
import { County } from './county';

export const getTimeline = (tl: any[]) => {
  const timeList = [];
  tl.forEach(info => {
    const timelineInfo = info.split(',', 11);
    const state = new State();
    state.date = timelineInfo[0];
    state.totalpositiveTest = timelineInfo[1];
    state.newPositiveTest = timelineInfo[2];
    state.totalHospitalized = timelineInfo[3];
    state.currentlyHospitalized = timelineInfo[4];
    state.currentIcu = timelineInfo[5];
    state.totalDeath = timelineInfo[6];
    state.newDeath = timelineInfo[7];
    state.totalRecoveries = timelineInfo[8];
    state.totalCompletedTest = timelineInfo[9];
    state.newCompletedTest = timelineInfo[10];
    timeList.push(state);
  });
  return timeList;

};
export const getCounty = (cd: any[])  => {
    const countyList  = [];
    cd.forEach(info => {
      const countyInfo = info.split(',', 6);
      const county = new County();
      county.countyFlips = countyInfo[0];
      county.countyName = countyInfo[1];
      county.totalPositive = countyInfo[2];
      county.totalDeath = countyInfo[3];
      county.latitude = countyInfo[4];
      county.longitude = countyInfo[5];
      countyList.push(county);
    });
    return countyList;
  };

export  const colorrange = {
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

export  const deathrange = {
  minvalue: '0',
  startlabel: 'Low',
  endlabel: 'High' ,
  code: '6baa01',
  gradient: '1',
  color: [{
    maxvalue: '125',
    code: 'f8bd19',
  }, {
    maxvalue: '250',
    code: 'e44a00',
  }
  ]
};



