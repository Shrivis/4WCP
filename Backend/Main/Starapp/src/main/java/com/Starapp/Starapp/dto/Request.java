package com.Starapp.Starapp.dto;

import java.time.LocalDateTime;

public class Request {
	int workingHourId;
	String projectName;
	LocalDateTime startTime;
	LocalDateTime endTime;
	String managerName;
	String status;
	int extraHours;
	String responseText;
	public Request() {
		super();
	}
	
	public String getResponseText() {
		return responseText;
	}

	public void setResponseText(String responseText) {
		this.responseText = responseText;
	}

	public int getWorkingHourId() {
		return workingHourId;
	}

	public void setWorkingHourId(int timeSheetId) {
		this.workingHourId = timeSheetId;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public LocalDateTime getStartTime() {
		return startTime;
	}

	public void setStartTime(LocalDateTime startTime) {
		this.startTime = startTime;
	}

	public LocalDateTime getEndTime() {
		return endTime;
	}

	public void setEndTime(LocalDateTime endTime) {
		this.endTime = endTime;
	}

	public String getManagerName() {
		return managerName;
	}

	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getExtraHours() {
		return extraHours;
	}

	public void setExtraHours(int extraHours) {
		this.extraHours = extraHours;
	}

	@Override
	public String toString() {
		return "Request [workingHourId=" + workingHourId + ", projectName=" + projectName + ", startTime=" + startTime
				+ ", endTime=" + endTime + ", managerName=" + managerName + ", status=" + status + ", extraHours="
				+ extraHours + ", responseText=" + responseText + "]";
	}

}
