import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressTrendChartComponent } from './stress-trend-chart.component';

describe('StressTrendChartComponent', () => {
  let component: StressTrendChartComponent;
  let fixture: ComponentFixture<StressTrendChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StressTrendChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StressTrendChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
