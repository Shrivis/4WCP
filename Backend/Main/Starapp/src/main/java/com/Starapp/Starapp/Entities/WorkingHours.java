package com.Starapp.Starapp.Entities;
import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class WorkingHours {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int workingHourId;
	
    int timesheetNo;
    LocalDateTime periodStart;
    LocalDateTime periodEnd;
    int hours;
    Boolean isActive;
    Boolean isApproved;
    String responseText;
    LocalDateTime createdOn;
    LocalDateTime approvedOn;
    
  //foreign key
  	@ManyToOne(cascade = CascadeType.ALL)	
  	@JoinColumn(name = "projId", referencedColumnName="projectId")
  	@JsonBackReference
  	Project project;
  //foreign key
  	@ManyToOne(cascade = CascadeType.ALL)	
  	@JoinColumn(name = "resourceId", referencedColumnName="userId")
  	@JsonBackReference
  	User user;
  	
	public WorkingHours() {
		super();
	}

	public int getWorkingHourId() {
		return workingHourId;
	}

	public void setWorkingHourId(int workingHourId) {
		this.workingHourId = workingHourId;
	}

	public int getTimesheetNo() {
		return timesheetNo;
	}

	public void setTimesheetNo(int timesheetNo) {
		this.timesheetNo = timesheetNo;
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

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	public Boolean getIsApproved() {
		return isApproved;
	}

	public void setIsApproved(Boolean isApproved) {
		this.isApproved = isApproved;
	}

	public String getResponseText() {
		return responseText;
	}

	public void setResponseText(String responseText) {
		this.responseText = responseText;
	}

	public LocalDateTime getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(LocalDateTime createdOn) {
		this.createdOn = createdOn;
	}

	public LocalDateTime getApprovedOn() {
		return approvedOn;
	}

	public void setApprovedOn(LocalDateTime approvedOn) {
		this.approvedOn = approvedOn;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "WorkingHours [workingHourId=" + workingHourId + ", timesheetNo=" + timesheetNo + ", periodStart="
				+ periodStart + ", periodEnd=" + periodEnd + ", hours=" + hours + ", isActive=" + isActive
				+ ", isApproved=" + isApproved + ", responseText=" + responseText + ", createdOn=" + createdOn
				+ ", approvedOn=" + approvedOn + ", project=" + project + ", user=" + user + "]";
	}
}
