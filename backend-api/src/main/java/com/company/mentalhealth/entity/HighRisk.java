package com.company.mentalhealth.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

@Entity
@Table(name = "high_risk_employees")
public class HighRisk {

    @Id
    private Integer employee_id;

    private String employee_name;

    private String department;

    private String mood;

    private Integer sleep_hours;

    private Integer stress_level;

    private Integer workload;

    private Integer risk_score;

    public Integer getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(Integer employee_id) {
        this.employee_id = employee_id;
    }

    public String getEmployee_name() {
        return employee_name;
    }

    public void setEmployee_name(String employee_name) {
        this.employee_name = employee_name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getMood() {
        return mood;
    }

    public void setMood(String mood) {
        this.mood = mood;
    }

    public Integer getSleep_hours() {
        return sleep_hours;
    }

    public void setSleep_hours(Integer sleep_hours) {
        this.sleep_hours = sleep_hours;
    }

    public Integer getStress_level() {
        return stress_level;
    }

    public void setStress_level(Integer stress_level) {
        this.stress_level = stress_level;
    }

    public Integer getWorkload() {
        return workload;
    }

    public void setWorkload(Integer workload) {
        this.workload = workload;
    }

    public Integer getRisk_score() {
        return risk_score;
    }

    public void setRisk_score(Integer risk_score) {
        this.risk_score = risk_score;
    }
}