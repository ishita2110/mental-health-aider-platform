package com.company.mentalhealth.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "department_stress")
public class DepartmentStress {

    @Id
    private String department;

    private Double avg_stress;

    public String getDepartment() {
        return department;
    }
    
    public Double getAvg_stress() {
        return avg_stress;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public void setAvg_stress(Double avg_stress) {
        this.avg_stress = avg_stress;
    }
}