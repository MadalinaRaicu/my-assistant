import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrilldownMapComponent } from './drilldown-map.component';

describe('DrilldownMapComponent', () => {
  let component: DrilldownMapComponent;
  let fixture: ComponentFixture<DrilldownMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrilldownMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrilldownMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
