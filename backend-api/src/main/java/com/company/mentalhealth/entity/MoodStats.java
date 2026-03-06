package com.company.mentalhealth.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "mood_stats")
public class MoodStats {

    @Id
    private String mood;

    private Integer count;

    public String getMood() {
        return mood;
    }
    
    public Integer getCount() {
        return count;
    }

    public void setMood(String mood) {
        this.mood = mood;
    }

    public void setCount(Integer count) {
        this.count = count;
    }
}