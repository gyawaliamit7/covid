import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathGraphComponent } from './death-graph.component';

describe('DeathGraphComponent', () => {
  let component: DeathGraphComponent;
  let fixture: ComponentFixture<DeathGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
