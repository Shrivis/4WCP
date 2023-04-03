//This code creates a REST API controller for reports with an endpoint of "/api/v1/report".
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
    // This injects an instance of ReportServiceImpl into this class.
    @Autowired
    ReportServiceImpl reportService;

    // This maps the GET HTTP method to the "/horizontal" endpoint.
    // When accessed, it returns a HorizontalData object with data from the reportService.
    @GetMapping("/horizontal")
    HorizontalData getHorizontalData() {
        return reportService.getHorizontalsReports();
    }
}