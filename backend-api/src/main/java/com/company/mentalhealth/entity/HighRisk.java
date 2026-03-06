package com.company.mentalhealth.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;                  

@Entity
@Table(name = "high_risk_employees")
public class HighRisk {

    @Id
    private Integer employee_id;

    private String department;

    private String risk_score;

    public Integer getEmployee_id() {
        return employee_id;
    }

    public String getDepartment() {
        return department;
    }

    public String getRisk_score() {
        return risk_score;
    }

    public void setEmployee_id(Integer employee_id) {
        this.employee_id = employee_id;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
    
    public void setRisk_score(String risk_score) {
        this.risk_score = risk_score;
    }
}