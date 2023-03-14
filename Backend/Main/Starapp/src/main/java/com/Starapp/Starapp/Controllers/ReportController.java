package com.Starapp.Starapp.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Starapp.Starapp.dto.response.HorizontalData;
import com.Starapp.Starapp.serviceImpl.ReportServiceImpl;

@RestController
@RequestMapping("/api/v1/report")
public class ReportController {
	@Autowired
	ReportServiceImpl reportService;

	@GetMapping("/horizontal")
	HorizontalData getHorizontalData() {
		return reportService.getHorizontalsReports();
	}
}
