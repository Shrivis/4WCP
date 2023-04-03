package com.Starapp.Starapp.dto.response;


import java.util.List;

import com.Starapp.Starapp.Entities.RequestChangeLog;

import lombok.Data;//automatically generates getters, setters, equals and hashCode methods for all fields defined in this class.

@Data
public class ResourceRequest {

	private Integer key;
	private Long workingHourId;
	private String timesheetNo;
	private String projectName;
	private String startTime;
	private String endTime;
	private String managerName;
	private String status;
	private Integer extraHours;
	private Boolean seen;
	List<RequestChangeLog> requestLogs;//This is a field of type List<RequestChangeLog> which contains a list of RequestChangeLog objects
}
