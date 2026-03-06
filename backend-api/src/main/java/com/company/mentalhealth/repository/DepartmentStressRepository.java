package com.company.mentalhealth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.company.mentalhealth.entity.DepartmentStress;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentStressRepository extends JpaRepository<DepartmentStress, String> {

}