package com.company.mentalhealth.controller;
import java.util.List;
import com.company.mentalhealth.repository.HighRiskRepository;
import com.company.mentalhealth.entity.HighRisk;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/analytics")
@CrossOrigin
public class AnalyticsController {

    private final HighRiskRepository highRiskRepository;

    public AnalyticsController(HighRiskRepository highRiskRepository) {
        this.highRiskRepository = highRiskRepository;
    }

    @GetMapping("/high-risk")   
    public List<HighRisk> getHighRiskEmployees() {
        return highRiskRepository.findAll();
    }

    }