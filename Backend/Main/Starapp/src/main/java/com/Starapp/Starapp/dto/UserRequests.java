package com.Starapp.Starapp.dto;

import java.time.LocalDateTime;

public class UserRequests {
	private int id; // Timesheet id
	private String name;
	private String projectName;
	private LocalDateTime periodStart;
	private LocalDateTime periodEnd;
	private int hours;
	private int expectedHours;
	public UserRequests() {
		
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public LocalDateTime getPeriodStart() {
		return periodStart;
	}
	public void setPeriodStart(LocalDateTime periodStart) {
		this.periodStart = periodStart;
	}
	public LocalDateTime getPeriodEnd() {
		return periodEnd;
	}
	public void setPeriodEnd(LocalDateTime periodEnd) {
		this.periodEnd = periodEnd;
	}
	public int getHours() {
		return hours;
	}
	public void setHours(int hours) {
		this.hours = hours;
	}
	public int getExpectedHours() {
		return expectedHours;
	}
	public void setExpectedHours(int expectedHours) {
		this.expectedHours = expectedHours;
	}
	
}
