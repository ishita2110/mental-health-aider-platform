import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepStressChartComponent } from './sleep-stress-chart.component';

describe('SleepStressChartComponent', () => {
  let component: SleepStressChartComponent;
  let fixture: ComponentFixture<SleepStressChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SleepStressChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SleepStressChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
