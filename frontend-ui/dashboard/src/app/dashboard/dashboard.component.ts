import { Component, OnInit } from '@angular/core';
import { AnalyticsService, HighRiskEmployees } from '../services/analytics.service';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { AgCharts } from 'ag-charts-community';
import { ModuleRegistry } from 'ag-charts-community';
import { AllCommunityModule } from 'ag-charts-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  rowData: HighRiskEmployees[] = [];

  totalEmployees: number = 0;
  highRisk: number = 0;
  avgStress: number = 0;
  avgSleep: number = 0;

  columnDefs: ColDef[] = [
    { field: 'employee_id', headerName: 'Employee ID' },
    { field: 'employee_name', headerName: 'Employee Name' },
    { field: 'department', headerName: 'Department' },
    { field: 'mood', headerName: 'Mood' },
    { field: 'sleep_hours', headerName: 'Sleep Hours' },
    { field: 'stress_level', headerName: 'Stress Level' },
    { field: 'workload', headerName: 'Workload' },
    { field: 'risk_score', headerName: 'Risk Score' }
  ];

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit(): void {

    this.analyticsService.getHighRiskEmployees().subscribe(data => {

      console.log("API DATA:", data);

      this.rowData = [...data];

      this.totalEmployees = data.length;
      this.highRisk = data.length;

      const stressSum = data.reduce((sum, emp) => sum + emp.stress_level, 0);
      const sleepSum = data.reduce((sum, emp) => sum + emp.sleep_hours, 0);

      this.avgStress = Number((stressSum / data.length).toFixed(2));
      this.avgSleep = Number((sleepSum / data.length).toFixed(2));

      setTimeout(() => {
        this.createDepartmentChart(data);
        this.createMoodChart(data);
        this.createSleepStressChart(data);
      }, 100);

    });

  }

  createDepartmentChart(data: any[]) {

    const deptMap: any = {};

    data.forEach(emp => {
      deptMap[emp.department] = (deptMap[emp.department] || 0) + 1;
    });

    const deptData = Object.keys(deptMap).map(d => ({
      department: d,
      employees: deptMap[d]
    }));

    const chartDiv = document.getElementById('departmentChart');
    if (!chartDiv) return;

    AgCharts.create({
      container: chartDiv,
      title: { text: "Department Risk Distribution" },
      data: deptData,
      series: [
        {
          type: 'pie',
          angleKey: 'employees',
          calloutLabelKey: 'department'
        }
      ]
    });

  }

  createMoodChart(data: any[]) {

    const moodMap: any = {};

    data.forEach(emp => {
      moodMap[emp.mood] = (moodMap[emp.mood] || 0) + 1;
    });

    const moodData = Object.keys(moodMap).map(m => ({
      mood: m,
      count: moodMap[m]
    }));

    const chartDiv = document.getElementById("moodChart");
    if (!chartDiv) return;

    AgCharts.create({

      container: chartDiv,

      title: { text: "Mood Distribution" },

      data: moodData,

      series: [
        {
          type: 'pie',
          angleKey: 'count',
          calloutLabelKey: 'mood'
        }
      ]

    });

  }

  createSleepStressChart(data: any[]) {

    const chartDiv = document.getElementById("sleepStressChart");
    if (!chartDiv) return;

    const options:any = {

      container: chartDiv,

      title: { text: "Sleep vs Stress Correlation" },

      data: data,

      series: [
        {
          type: 'scatter',
          xKey: 'sleep_hours',
          yKey: 'stress_level',
          size:12,
          labelKey: 'mood'
        }
      ],
      axes:[
        {
          type: 'number',
          position: 'bottom',
          title: { text: 'Sleep Hours' }
        },
        {
            type: 'number',
          position: 'left',
          title: { text: 'Stress Level' }
        }
      ]

    };

    AgCharts.create(options);

  }

}