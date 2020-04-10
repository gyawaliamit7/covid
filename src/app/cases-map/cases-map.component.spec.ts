import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesMapComponent } from './cases-map.component';

describe('CasesMapComponent', () => {
  let component: CasesMapComponent;
  let fixture: ComponentFixture<CasesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
