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
public class Request {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int requestId;
  //foreign key
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "managerId", referencedColumnName="userId")
	@JsonBackReference
	User manager;
  //foreign key
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "resourceId" , referencedColumnName = "userId")
	@JsonBackReference
	User resource;
  //foreign key
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "workingId" , referencedColumnName = "workingHourId")
	@JsonBackReference
	WorkingHours workinghours;	
	Boolean isApproved;
	String responseText;
	LocalDateTime time;
	public Request(int requestId, User manager, User resource, WorkingHours workinghours, Boolean isApproved,
			String responseText, LocalDateTime time) {
		super();
		this.requestId = requestId;
		this.manager = manager;
		this.resource = resource;
		this.workinghours = workinghours;
		this.isApproved = isApproved;
		this.responseText = responseText;
		this.time = time;
	}
	public Request() {
		super();
	}
	public int getRequestId() {
		return requestId;
	}
	public void setRequestId(int requestId) {
		this.requestId = requestId;
	}
	public User getManager() {
		return manager;
	}
	public void setManager(User manager) {
		this.manager = manager;
	}
	public User getResource() {
		return resource;
	}
	public void setResource(User resource) {
		this.resource = resource;
	}
	public WorkingHours getWorkinghours() {
		return workinghours;
	}
	public void setWorkinghours(WorkingHours workinghours) {
		this.workinghours = workinghours;
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
	public LocalDateTime getTime() {
		return time;
	}
	public void setTime(LocalDateTime time) {
		this.time = time;
	}
	@Override
	public String toString() {
		return "Request [requestId=" + requestId + ", manager=" + manager + ", resource=" + resource + ", workinghours="
				+ workinghours + ", isApproved=" + isApproved + ", responseText=" + responseText + ", time=" + time
				+ "]";
	}


}
