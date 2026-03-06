import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HighRiskEmployees {
    employee_id: number;
    employee_name: string;
  
    department: string;
  
    mood: string;
  
    sleep_hours: number;
    stress_level: number;
  
    workload: number;
  
    risk_score: number;
  

}


@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
private apiUrl = 'http://localhost:8080/analytics/high-risk';
  constructor(private http: HttpClient) { }

  getHighRiskEmployees(): Observable<HighRiskEmployees[]> { 
    return this.http.get<HighRiskEmployees[]>(this.apiUrl);
  }
}
