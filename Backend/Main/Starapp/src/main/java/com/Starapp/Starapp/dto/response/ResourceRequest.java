package com.Starapp.Starapp.dto.response;


import lombok.Data;

@Data
public class ResourceRequest {
	private Long workingHourId;
	private String timesheetNo;
	private String projectName;
	private String startTime;
	private String endTime;
	private String managerName;
	private String status;
	private Integer extraHours;
	private String responseText;
}
