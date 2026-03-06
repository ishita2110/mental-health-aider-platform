package com.company.mentalhealth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.company.mentalhealth.entity.MoodStats;
import org.springframework.stereotype.Repository;

@Repository
public interface MoodStatsRepository extends JpaRepository<MoodStats, String> {

}