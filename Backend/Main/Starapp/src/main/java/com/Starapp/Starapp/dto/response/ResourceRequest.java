package com.Starapp.Starapp.dto.response;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class ResourceRequest {
	private Long workingHourId;
	private String timesheetNo;
	private String projectName;
	private LocalDateTime startTime;
	private LocalDateTime endTime;
	private String managerName;
	private String status;
	private Integer extraHours;
	private String responseText;
}
