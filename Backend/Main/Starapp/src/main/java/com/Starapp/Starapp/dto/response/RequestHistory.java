package com.Starapp.Starapp.dto.response;

import java.util.List;

import com.Starapp.Starapp.Entities.RequestChangeLog;

import lombok.Data;//it automatically creates getters and setters and constructors for this class

@Data
public class RequestHistory {
	private Integer key;
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
	private List<RequestChangeLog> requestLogs;
}
