package com.company.mentalhealth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.company.mentalhealth.entity.HighRisk;    
import org.springframework.stereotype.Repository;

@Repository
public interface HighRiskRepository extends JpaRepository<HighRisk, Integer> {
    
}