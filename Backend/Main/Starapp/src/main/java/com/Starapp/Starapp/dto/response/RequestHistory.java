package com.Starapp.Starapp.dto.response;

import lombok.Data;

@Data
public class RequestHistory {
	private Long id; 
	private Long userId;
	private String timesheetNo;
	private String name;
	private String projectName;	
	private String periodStart;
	private String periodEnd;
	private Integer hours;
	private String status;
	private Boolean canChange = false;
	private String responseText;
}
